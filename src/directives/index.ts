import { App } from "vue";
const directives: {
  [index: string]: any;
} = {};
const directiveModule = require.context("./", true, /\.directive\.ts$/);
directiveModule.keys().forEach((_) => {
  const key = _.match(/\/([\s\S]+)\.directive\.ts$/)?.[1];
  if (key) {
    directives[key] = directiveModule(_).default;
  } else {
    console.error(`注册${_}指令失败`);
  }
});

export default {
  install(app: App) {
    for (const key in directives) {
      if (Object.prototype.hasOwnProperty.call(directives, key)) {
        app.directive(key, directives[key]);
      }
    }
  },
};
