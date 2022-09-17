const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './client/index.html'
    })],
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            // match the output 'publicPath'
            publicPath: '/',
          },
          proxy: {
            '/api/**': {
              target: 'http://localhost:3000/',
              secure: false,
            },
          },
    }
};