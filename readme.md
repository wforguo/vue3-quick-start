# vue3-quick-start

English | [简体中文](https://github.com/wforguo/vue3-quick-start/blob/master/readme.zh-CN.md)

This template should help get you started developing with Vue 3 in Vite.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[start guide](https://forguo.cn/f2e/%E5%B7%A5%E7%A8%8B%E5%8C%96/Vue3%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA.html)

## vite config

See [Vite Configuration Reference](https://vitejs.dev/config/).

## start

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server. It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## debug

[eruda](https://github.com/liriliri/eruda)

Opening method [modify variables or opening method as needed]

Add after link: `?debug=true`

such as: [http://127.0.0.1:5000/?debug=true](http://127.0.0.1:5000/?debug=true)

## qiankun

[https://github.com/tengmaoqing/vite-plugin-qiankun](https://github.com/tengmaoqing/vite-plugin-qiankun)
