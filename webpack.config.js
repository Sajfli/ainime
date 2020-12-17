/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.tsx',
    target: 'web',
    mode: 'development',

    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],

        modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "public", "index.html"),
        }),

        new MiniCssExtractPlugin()
    ],

    module: {
        rules: [

            {
              test: /\.(ts|tsx)$/,
              enforce: 'pre',
              use: [
                {
                  options:  {
                    eslintPath: require.resolve('eslint'),
                  },
                  loader: require.resolve('eslint-loader')
                },
              ],
              exclude: /node_modules/,
            },

            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },

            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },

            {
                test: /\.s?css$/,
                oneOf: [
                  {
                    test: /\.m\.s?css$/,
                    use: [
                      MiniCssExtractPlugin.loader,
                      {
                        loader: "css-loader",
                        options: {
                            modules: {
                                compileType: 'module',
                                localIdentName: '[name]_[local]_[hash:base64]'
                            },
                        }
                      },
                      "sass-loader"
                    ]
                  },
                  {
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                  }
                ]
              }

        ],
    },
}