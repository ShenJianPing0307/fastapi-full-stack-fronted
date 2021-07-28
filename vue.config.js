module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    host: "localhost",
    //代理设置
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }

      }
    }
  }
};