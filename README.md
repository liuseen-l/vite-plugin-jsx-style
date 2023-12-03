# vite-plugin-jsx-style

[![NPM version](https://img.shields.io/npm/v/vite-plugin-check-scoped?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-check-scoped)

支持在tsx，jsx中使用css.


## 📦 Install

```bash
pnpm add -D vite-plugin-jsx-style
```

## 🦄 Usage

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
## 📄 License

[MIT License](https://github.com/liuseen-l/vite-plugin-jsx-style/blob/main/LICENSE) © 2019-PRESENT [LiuSeen](https://github.com/liuseen-l)


## Features
  + 支持样式隔离