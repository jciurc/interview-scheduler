// const {
//   styleLoader,
//   fontLoader,
// } = require('../webpack/pieces');

// /**
//  * See: https://getstorybook.io/docs/react-storybook/configurations/custom-webpack-config
//  */
// module.exports = function(storybookConfig) {
//   // Set an absolute public path. Required for reasons of JS-imported styles
//   // See: http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
//   Object.assign(storybookConfig.output, {
//     publicPath: 'http://localhost:6006/',
//   });

//   // Enable JS-imported styles/fonts
//   storybookConfig.module.loaders.push(
//     styleLoader,
//     fontLoader,
//   );

//   return storybookConfig;
// };

const path = require("path");

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [path.resolve(__dirname, "../src"), ...config.resolve.modules],
    }
  };
};



// sassLoader: {
//   includePaths: path.resolve(__dirname, '../src/styles')
// }