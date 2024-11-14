<div align="center">
    <img width="200px" height="200px" src="./public/logo.svg" />
   	<br />
    <h1 style="margin: 10px">
        Kor
    </h1>
    <p>Vite + React + TypeScript 开发模板</p>
</div>

## 特点 🐳

-   ⚡️ [React](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)
-   🗂 [基于文件的路由](./src/pages)
-   🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
-   🧰 [TypeScript](https://www.typescriptlang.org/) 支持

## 安装

此项目使用 [pnpm](https://pnpm.io/), 请确保你已经安装了最新的 pnpm

```bash
pnpm install
```

## 开发

```bash
pnpm dev
```

## 构建

```bash
pnpm build
```

## 部署

```bash
pnpm preview
```

## 一些说明

### 文件路由

目录结构即路由。

eg:

src/pages/index.tsx => /<br>
src/pages/about.tsx => /about<br>
src/pages/users/index.tsx => /users<br>
src/pages/users/profile.tsx => /users/profile<br>
src/pages/users/[id].tsx => /users/:id<br>
src/pages/[user]/settings.tsx => /:user/settings<br>
src/pages/[...notFound].tsx => 404 路由(确保唯一, 不然天知道会匹配到哪个)

通过 [fileRouter.tsx](./src/router/fileRouter.tsx) 实现

注意!
这方法很简便,说下我觉得可以优化的地方。文档说动态导入打包就会成很多chunk,路由多了那么载入上百个chunk是常态。全都用globEager也不太好，文件过大,遇到那种不活跃路径没有可优化。解决不活跃的路由需求分片这种问题最好就又得加配置,从文件声明上下手不太好。第二个点就是import这种vite提供的替换方法是否高效。没看过源码，是否有缓存,监听到文件路径发生改变再单独的去替换变化的路径进行替换。还是说次次都遍历。反正那个pages的插件算是把我整蒙了。太慢了。而且问题也多。所以觉得不行可以改为手动配置路由。
