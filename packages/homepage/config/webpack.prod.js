const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/homepage/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'homepage',
            filename: 'remoteEntry.js',
            exposes: {
                './HomepageApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);
