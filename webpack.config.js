const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "styles.css"
        }),
        new HtmlWebpackPlugin({
            title: 'My web-site',
            // minify: {
            //     collapseWhitespace: true
            // },
            template: './src/index.html'
        }),
    ],
};