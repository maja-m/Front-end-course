const path = require('path');       //biblioteka (wbudowana) path pozwala korzystać ze ścieżek względnych (relative)
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractStyles = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        main: './src/app.js'      //główny plik js, zarządza resztą, twój
    },
    output: {
        path: path.resolve('dist'),            //to będzie folder docelowy, do którego będą zebrane wszystkie importy; dostanei to klient
        filename: '[name].js'           //name to main
    },
    module: {
        rules: [
            {
                test: /\.css$/,  //albo new RegExp('\.css$') jeśli spełnia, to ma użyć
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractStyles.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
            }
        ]
    },
    plugins: [
        extractStyles,
        new htmlWebpackPlugin({
            template: './src/index.html'
        })//,
        // new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }
}