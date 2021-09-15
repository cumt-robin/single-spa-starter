const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "single-spa-starter",
    projectName: "app3",
    webpackConfigEnv,
    argv,
  });

  // 不与其他项目共享 react, react-dom
  defaultConfig.externals = []

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 8083
    }
  });
};
