/* eslint-disable prefer-import/prefer-import-over-require */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

module.exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig();

    // Make SVGs inline
    {
        // Ensure that the Gatsby's default SVG handling doesn't mess with the following declarations
        const defaultImageLoader = config.module.rules.find((rule) => /\bsvg\b/.test(rule.test.toString()));

        defaultImageLoader.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: require.resolve('raw-loader'),
                },
                {
                    loader: require.resolve('svgo-loader'),
                    options: {
                        plugins: [
                            { removeTitle: true },
                            { removeDimensions: true },
                            { removeViewBox: false },
                            { cleanupIDs: false },
                        ],
                    },
                },
                // Uniquify classnames and ids so that they are unique and
                // don't conflict with each other
                {
                    loader: require.resolve('svg-css-modules-loader'),
                    options: {
                        transformId: true,
                    },
                },
            ],
        });
    }

    actions.replaceWebpackConfig(config);
};
