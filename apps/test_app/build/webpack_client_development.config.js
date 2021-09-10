const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        app: "./src/test_app.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("dist/"), // `path` has to be absolute path
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["@babel/preset-react", {runtime: "automatic", importSource: "@emotion/react"}]],
                            plugins: [
                                "@emotion/babel-plugin"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("src/index.html"),
            inject: true,
            filename: "index.html"
        })
    ],
    resolve: {
        extensions: [".js"],
    }
};
