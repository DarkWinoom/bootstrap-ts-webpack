
const configs = require('./webpack-configs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: 'web',
    entry: {
        main: `${configs.dirs.src}/main.ts`,
        ...configs.pages.reduce((acc, page) => {
            if (page.scripts) {
                acc[page.scripts] = configs.dirs.src + '/app/' + page.scripts + '.ts'
            }
            return acc
        }, {})
        //index: `${configs.dirs.src}/app/index.ts`,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // fonts
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: `${configs.subDirs.fonts}/[name].[ext]`
                }
            },
            // images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.ejs$/i,
                use: ['html-loader', 'template-ejs-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            // no need since I use `tsconfig` & `jsconfig`
            '@': configs.dirs.src
        },
        extensions: ['.ts', '.js'],
    },
    plugins: [
        ...configs.pages.map(
            page =>
                new HtmlWebpackPlugin({
                    //title: page.title,
                    template: configs.dirs.public + '/' + page.template,
                    filename: page.filename,
                    chunks: page.scripts ? ['main', page.scripts] : ['main'],
                    // default:
                    // favicon: configs.dirs.src + '/misc/favicon.ico',
                    minify: false,
                })
        ),
        new MiniCssExtractPlugin({
            filename: `${configs.subDirs.css}/[name].css`,
            chunkFilename: '[id].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${configs.dirs.src}/original`,
                    to: `${configs.dirs.dist}`
                }
            ]
        })
    ],
    optimization: {
        runtimeChunk: 'single',
    },
};
