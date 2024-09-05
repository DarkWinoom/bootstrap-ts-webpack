// webpack running configs
// notice: you should restart webpack-dev-server after modifying this file

const { join } = require('path')

module.exports = {
    dirs: {
        // source directory
        src: join(__dirname, '../src'),
        // output directory
        dist: join(__dirname, '../dist'),
        // html template directory
        public: join(__dirname, '../public')
    },
    // source files directory, such as: css, js, img, fonts
    // root dir is dirs.dist
    subDirs: {
        css: 'assets/css',
        js: 'assets/js',
        fonts: 'assets/fonts'
    },
    // configs:
    // - template: template html filename `public/[name].html`
    // - filename: output html filename `dist/[name].html`
    // - scripts: typescript filename `src/app/[name].ts`, set empty if not use
    // read more about html-webpack-plugin: https://github.com/jantimon/html-webpack-plugin#options
    pages: [
        {
            // Home Page
            template: 'index.ejs',
            filename: 'index.html',
            scripts: 'index',
        },
        {
            // About Page
            template: 'about.ejs',
            filename: 'about.html',
            scripts: 'about-vendor'
        }
    ]
}