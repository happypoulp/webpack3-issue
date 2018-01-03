const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (settings) => {
    return {
        entry: {
            app: [
                path.join(process.cwd(), "src/index.js"),
            ],
        },
        output: {
            filename: "[name]-[chunkhash].js",
            path: path.join(process.cwd(), "build"),
            publicPath: "/",
        },
        devServer: {
            contentBase: "./build",
            disableHostCheck: true,
            historyApiFallback: true,
            host: "127.0.0.1",
            port: 8181,
            hot: false,
        },
        resolve: {
            symlinks: false,
            modules: [path.join(process.cwd(), "src"), "node_modules"],
        },
        module: {},
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "index.html",
                inject: true,
                minify: false,
            }),
        ],
    }
}