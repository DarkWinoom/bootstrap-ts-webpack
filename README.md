# Webpack template for traditional website

[中文](./README_CN.md) | **English**

Using the latest version of webpack, quickly launch front-end development scaffolding for traditional HTML projects with the help of ejs, ts, and css.

## Features:

* Using the latest version of webpack, optimized for traditional HTML page development, and supports  multi-page development.
* Built-in EJS, separates header and footer, and packaged files do not require server operation (provided that absolute paths or tools like AJAX are not used).
* Supports TypeScript and SASS, and also allows traditional JS and CSS editing.
* Supports Babel and PostCSS, and can be freely configured.
* Simplified feature configuration for easy extension.

## Build Setup:

I recommend using **pnpm** or **yarn** for installation and management.

```bash
# Download repository:
git clone https://github.com/darkwinoom/bootstrap-ts-webpack webpack-template

# Go to the app:
cd webpack-template

# Install dependencies:
# yarn
pnpm i

# Server with hot reload at http://localhost:8801/
# yarn start
pnpm start

# Output will be at dist/ folder
# yarn build
pnpm build
```

## Project Structure:

- `public/` - stores HTML resources, can use EJS templates, and can be managed through `webpack/webpack-configs.js`.
* `src/app/` - project source directory, usually contains CSS (SASS) and JS (TS) files, and can be managed through `webpack/webpack-configs.js`.
* `src/original/` - directory for referenced resources such as images, fonts, or other third-party complete components, which are copied as-is to the root directory after packaging.
* `src/index.ts` - entry point, called by all pages, where you can write content that needs to be handled uniformly.

### Configuration Files

* `.babelrc` - babel configuration file.
* `postcss.config.js` - postCSS configuration file.
* `webpack/webpack-configs.js` - webpack configuration items, including path configuration and html-webpack-plugin configuration.

## Instructions

### Accessing Resources

If you need to access resources such as images, fonts, or third-party components, you can place them in the `src/original/` directory and access them through the root directory.

For example, if you have an image stored at: `src/original/static/img/logo.png`, you can read it in HTML using the following methods:

```html
<img src="static/img/logo.png" />
<!-- If based on a server, you can use an absolute path -->
<img src="/static/img/logo.png" />
```

You can check the path after the project is packaged to confirm if it works correctly. **When storing files, please avoid naming conflicts with resource paths configured in `webpack/webpack-configs.js`, as this may cause resources to overwrite each other**.

### Multi-Page Management

Configuration is located in `webpack/webpack-configs.js`

```js
module.exports = {
    // ...
    pages: [
        {
            // Home Page
            template: 'index.html',
            filename: 'index.html',
            scripts: 'index',
        },
        {
            // About Page
            template: 'about.html',
            filename: 'about.html',
            scripts: ''
        }
    ]
    // ...
}
```

After adding a page, in addition to creating the specified HTML page in `public/`, you also need to create a TS file with the same name as the script in `src/app/`.

This file will only be mounted and executed on the current page. You can also leave it empty, in which case you do not need to create this file.

### Using Bootstrap

This system uses Bootstrap 4.6 by default as an example and includes some basic page style examples. You can run or package the project based on these examples.

The usage method is via CDN, but you can also download the resource files for local loading.

Please note that these contents are not mandatory. The system does not depend on them to run, and you can remove them and use your own tools and frameworks as needed.

## Development Environment

* node 22.7.0
* pnpm 9.9.0