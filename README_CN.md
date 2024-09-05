# Webpack 传统网页APP前端快速脚手架

**中文** | [English](./README.md)

使用最新版本的 webpack，针对传统html项目并借助 ejs、ts 和 scss 快速启动前端开发脚手架

## 优点特性

* 搭载最新版webpack，针对传统html页面开发进行优化，支持多页面开发
* 内置 ejs，分离页头和页脚，打包文件无需依赖服务器运行（前提是未使用绝对路径或ajax等工具）
* 支持 typescript 和 sass，也可提进行传统的 js 和 css编辑
* 支持 babel 和 postcss，可自由进行配置
* 极简化功能配置，方便进行扩展

## 安装使用

推荐使用 pnpm 或者 yarn 进行安装与管理

```bash

git clone https://github.com/darkwinoom/bootstrap-ts-webpack webpack-template
cd webpack-template

# 安装依赖
# yarn
pnpm i

# 运行启动：http://localhost:8801/
# yarn start
pnpm start

# 生产打包
# yarn build
pnpm build
```

## 目录结构

* `public/` - 存放html资源，可使用ejs模板，可通过 `webpack/webpack-configs.js` 配置管理
* `src/app/` - 项目源目录，通常放置css (sass)、js (ts) 文件，可通过 `webpack/webpack-configs.js` 配置管理
* `src/original/` - 引用资源目录，如图片、字体或其他第三方完整组件等，打包后原样复制到根目录
* `src/index.ts` - 全局入口，所有页面都会调用，可编写需要统一处理的内容

### 配置文件

> babel 与 postcss 可参考官方说明，webpack 配置可查看文件内注释说明

* `.babelrc` - babel 配置文件
* `postcss.config.js` - postcss 配置文件
* `webpack/webpack-configs.js` - webpack配置项，包括路径配置与 html-webpack-plugin 配置

## 使用说明

### 访问资源

如果需要访问如图片、字体、第三方组件等资源，可以将其放在 `src/original/` 中，通过根目录即可访问

假设有一张图片存放于：`src/original/static/img/logo.png` 那么在html中可以使用以下方式读取：

```html
<img src="static/img/logo.png" />
<!-- 如果是基于服务器，可使用绝对路径 -->
<img src="/static/img/logo.png" />
```

您可以查看项目打包后的路径确认是否正常工作，**存放时请避免文件路径与 `webpack/webpack-configs.js` 中配置的资源路径重名，否则可能会导致资源相互覆盖** 

### 多页面管理

配置位于 `webpack/webpack-configs.js`

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

添加页面后，除了需要在 `public/` 中创建指定html页面，还需要在 `src/app/` 中创建于 stripts 同名的 ts 文件

该文件仅会在当前页面中挂载执行。您也可以留空，留空后无需创建该文件

### Bootstrap使用

本系统默认使用Bootstrap4.6作为示例，并内置了部分基本页面样式示例，您可以根据示例运行启动或打包查看

使用方式为CDN，您也可以官网下载资源文件本地加载

请注意，这些内容都不是必须的，本系统不会依赖运行，您可以根据自己的需要移除并使用自己的工具框架

## 开发环境

* node 22.7.0
* pnpm 9.9.0