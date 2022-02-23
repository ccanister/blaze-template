import { IProject, IUser, RequestService } from "@blazes/theme";
import { message } from "ant-design-vue";
import { AxiosResponse } from "axios";
import { HttpCode } from "./common";
import env from "./env";

const instance = new RequestService({
  baseURL: env.baseUrl,
  withCredentials: true,
  timeout: 3000,
  useBtnLoading: true,
}).instance;

instance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const config = response.config;
    const { baseURL } = config;
    if (baseURL?.startsWith("/resource")) {
      // 请求静态资源时候不再判断状态码
      return Promise.resolve(response.data);
    }
    // 对响应数据做点什么
    const { code = -1, data = {} } = response.data;
    const { msg = "" } = response.data;
    switch (code) {
      case HttpCode.Ok:
        return Promise.resolve(data);
    }

    return Promise.reject(msg);
  },
  (error) => {
    const { status = 500, data = {} } = error.response || {};
    let msg = data.msg || error.message;
    if (msg.startsWith("timeout")) {
      message.error("请求超时，请稍微再试");
      return;
    } else if (msg === "取消请求") {
      return;
    }
    switch (status) {
      case HttpCode.ServerError:
        msg = "服务器内部错误";
        break;
    }
    return Promise.reject(msg);
  }
);

export function fetchAssets(file: string) {
  return instance.get(`${file}`, {
    baseURL: "/resource",
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export function getProjects(): Promise<IProject[]> {
  return instance.get("project");
}

export function getUser(): Promise<IUser> {
  return instance.get("user");
}

export const simpleTableUrl = "simple-table";

export function postItem(form: any) {
  return instance.post("item", form);
}
