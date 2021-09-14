module.exports = {
  devServer: {
    port: 8081,
  },
  chainWebpack(config) {
    // setPublicPath 第二个参数支持 rootDirectoryLevel
    // config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
    //   args[0].rootDirectoryLevel = 2;
    //   return args;
    // });
  }
}