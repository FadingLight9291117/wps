const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./", // 静态资源使用相对路径
  assetsDir: "static",
  indexPath: "index.html",
  publicPath: "./",
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
