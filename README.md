# vite-plugin-jsx-style

[![NPM version](https://img.shields.io/npm/v/vite-plugin-jsx-style?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-jsx-style)

支持在tsx，jsx中使用css.


## Install

```bash
pnpm add -D vite-plugin-jsx-style
```

## Usage

Let's use a VUE project as an example

```typescript

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import JsxStyle from 'vite-plugin-jsx-style';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    JsxStyle(),
    react()
  ],
})
```

## Features
- 支持scss，less等预处理器
- 支持样式隔离

## Todo
- [ ] 支持scss,less等预处理器
- [ ] 样式隔离

## 📄 License

[MIT License](https://github.com/liuseen-l/vite-plugin-jsx-style/blob/main/LICENSE) © 2019-PRESENT [LiuSeen](https://github.com/liuseen-l)

