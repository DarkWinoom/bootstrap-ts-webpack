const configs = require('./webpack-configs')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        path: configs.dirs.dist,
        filename: `${configs.subDirs.js}/[name].js`,
        clean: true
    },
});
