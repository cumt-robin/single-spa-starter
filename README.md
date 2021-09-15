# Overview

这是一个测试`single-spa`的项目，可以让你从一个个鲜活的实例了解到微前端的真实面貌。

- 其中根目录是`Root Config`基座。
- `apps`目录下是各个子应用，你可以选择使用框架，比如 Vue, React，也可以不使用框架；
- 你可以自己搭建子应用，暴露出必要的生命周期钩子，给出合理的构建配置；也可以直接用封装好的 CLI 工具，比如`create-single-spa --framework vue`。
- Vue, React, Angular 都试了一下。
- 子应用不一定需要放在`apps`目录下，本项目只是一个演示。你可以把子应用放在任何一个目录，甚至是项目根目录之外的其他目录。因为基座和子应用不是通过目录关系关联，而是通过 http 访问相应资源的方式串起来。

# Root Config

- `index.ejs`是模板引擎。里面主要关注通过 importmap 引入的子应用入口文件。
- `single-spa-starter-root-config.ts`主要是执行应用的初始化，注册和启动等逻辑。
- `microfrontend-layout.html`是布局文件。主要负责子应用路由的配置。

# Applications

- app1: 没有用 create-single-spa --framework vue 搭建，自行组织了一下，主要是想体会下不用 create-single-spa 应该怎么处理子应用。
- app2：使用 create-single-spa --framework vue 搭建。
- app3：使用 create-single-spa --framework react 搭建。
- app4：使用 create-single-spa --framework angular 搭建。

# Development

开发环境下，只需要运行这条脚本就能把基座和子应用都运行起来。

```
npm run start:all
```

# Production

生产环境部署时，需要执行基座和子应用的打包脚本，具体见各个`package.json`文件的`scripts`部分。

- Root Config: `npm run build`
- app1: `npm run build`
- app2: `npm run build`
- app3: `npm run build`
- app4: `npm run build`

为了方便一键打包，可以选择直接执行：

```
npm run build:all
```

打包完成后，可以部署在本地 Nginx 进行测试。有条件的也可以直接上服务器部署。

本地部署 Nginx 时，可以参考 `/nginx/nginx.conf` 配置文件。如果不理解本地 Nginx 怎么玩，可以看看这篇[「前端必看」这篇Nginx反向代理技巧，助你准时下班陪女神](https://juejin.cn/post/6846687599508078600)。