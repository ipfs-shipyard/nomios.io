/* eslint-disable prefer-import/prefer-import-over-require */

module.exports = (api) => {
    api.cache(false);

    // This config is being used just for the source code at /src
    // The dependencies are being compiled using the default CRA babel config
    // See: https://github.com/facebook/create-react-app/blob/7548281aa5a9096f09cd5c9447cb4c21fa96ed4d/packages/react-scripts/config/webpack.config.js#L413
    return require('babel-preset-moxy/end-project')(api, {
        modules: false,
        react: true,
        targets: ['browsers'],
    });
};
