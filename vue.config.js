const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const prod = process.env.NODE_ENV === "production";

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 可在这里改变全局变量
        },
        javascriptEnabled: true,
      },
    },
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [resolve("src/assets/style/index.less")], // 存放全局的less变量
    },
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "<% = name %>"; // 浏览器title
      return args;
    });
    if (process.env.npm_lifecycle_event === "analyze") {
      // 打包分析使用
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
    if (!prod) {
      config.module
        .rule("source")
        .test(/\.js$/)
        .pre()
        .use("source-map-loader")
        .loader("source-map-loader"); // 如果直接使用路径表示文件是不行的
    }
  },

  configureWebpack: {
    devtool: prod ? undefined : "source-map",
  },

  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  },

  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        target: "http://10.10.13.12:9090/", // 代理
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
};
