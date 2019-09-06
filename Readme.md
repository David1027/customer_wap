#Vue SSR 脚手架 Demo

目录结构说明

- components 组件
- assets  资源目录 
  用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。
- config  配置文件目录
- languages 多语言语言目录
- layouts  用于组织应用的布局组件。 
- middleware  中间件
- pages 页面文件
- plugins 插件目录
- static 静态目录 此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理
  举个例子: /static/robots.txt 映射至 /robots.txt
- store Vuex 状态目录
- utils 工具包

#路由部分

假设 pages 的目录结构如下：
```
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```
那么，Nuxt.js 自动生成的路由配置如下：
```
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```
#待完成部分:

- 登录状态生命周期问题
- 路由鉴权验证
- axios 发起请求测试 X

#其他说明

|别 名 | 目  录|
|------|-------|
|~ 或 |@	src目录|
|~~ 或 |@@	根目录|

####碎碎念:

- <no-ssr >包裹起来的组件在客户端中呈现


#详细文档

[点我](https://zh.nuxtjs.org/guide/async-data)
