module.exports = {
    devServer: {
      port: 8082,
    },
    chainWebpack(config) {
      // rootDirectoryLevel 调整
      config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
        args[0].rootDirectoryLevel = 1;
        return args;
      });

      config.output
      .filename('[name].js');
    }
  }