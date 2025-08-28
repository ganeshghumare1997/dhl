const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'homepage',
            filename: 'remoteEntry.js',
            exposes: {
                './HomepageApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, devConfig);
