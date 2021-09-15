module.exports = {
  devServer: {
    port: 8081,
  },
  chainWebpack(config) {
    // rootDirectoryLevel 调整
    config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
      args[0].rootDirectoryLevel = 1;
      return args;
    });
    
    config.output
      .filename('[name].js');

    config.when(
      process.env.NODE_ENV === "production",
      (config) => {
        // 生产环境

        // devtool设置
        config.devtool("nosources-source-map");
      },
      () => {
        // 开发环境

        // devtool设置
        config.devtool("eval-source-map");
      }
    )
  }
}