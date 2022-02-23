export interface IEnvConfig {
  baseUrl: string;
}

export const env = process.env.VUE_APP_ENV;

export function isDevelopment() {
  return env === "development";
}

function getEnvConfig(): IEnvConfig {
  switch (env) {
    case "development":
      return {
        baseUrl: "/api",
      };
    case "staging":
      return {
        baseUrl: "/api",
      };
    case "production":
      return {
        baseUrl: "/api",
      };
    default:
      throw new Error(`未识别的环境类型：${env}`);
  }
}

export default getEnvConfig();
