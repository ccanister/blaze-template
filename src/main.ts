import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Plugin from "./plugins";
import Directive from "./directives";
import { startupService } from "./utils/startup.service";
import { initSchema, ModalHelper } from "@blazes/theme";
import { isDevelopment } from "./utils/env";

if (isDevelopment()) {
  require("../mock"); // mock数据用，正式环境删除
}
const app = createApp(App).use(Plugin).use(Directive).use(router);
startupService
  .load()
  .then(() => {
    app.mount("#app");
  })
  .catch((error) => {
    console.error(`挂载失败：${error}`);
  });

initSchema();
ModalHelper.appContext = app._context;
