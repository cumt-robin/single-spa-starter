# Overview

这是一个测试`single-spa`的项目。

- 其中根目录是`root-config`基座。
- `apps`目录下是各个子应用，你可以选择使用框架，比如 Vue, React，也可以不使用框架；
- 你可以自己搭建子应用，暴露出必要的生命周期钩子，给出合理的构建配置；也可以直接用封装好的 CLI 工具，比如`create-single-spa --framework vue`。
- Vue, React, Angular 都试了一下。

# Root Config

- `index.ejs`是模板引擎。里面主要关注通过 importmap 引入的子应用入口文件。
- `kulu-root-config.ts`主要是执行应用的初始化，注册和启动等逻辑。
- `microfrontend-layout.html`是布局文件。主要负责子应用路由的配置。

# Applications

- app1: 没有用 create-single-spa --framework vue 搭建，自行组织了一下，主要是想体会下不用 create-single-spa 应该怎么处理子应用。
- app2：使用 create-single-spa --framework vue 搭建。
- app3：使用 create-single-spa --framework react 搭建。
- app4：使用 create-single-spa --framework angular 搭建。
