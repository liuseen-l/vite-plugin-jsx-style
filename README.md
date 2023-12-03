# vite-plugin-jsx-style

[![NPM version](https://img.shields.io/npm/v/vite-plugin-jsx-style?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-jsx-style)

支持在tsx，jsx中使用css.


## Install

```bash
pnpm add -D vite-plugin-jsx-style
```

## Usage

Let's use a React project as an example

> vite.config.ts
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

> in project
```tsx
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div data-dwa className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

{
  `
<style>
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .card[data-dwa] {
    color: yellow;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .card {
    padding: 2em;
    color: red
  }

  .read-the-docs {
    color: #888;
  }

  </style>
`}
```

## Features
- 支持scss，less等预处理器 √
- 支持样式隔离

## Todo
- [x] 支持scss,less等预处理器
- [ ] 样式隔离

## 📄 License

[MIT License](https://github.com/liuseen-l/vite-plugin-jsx-style/blob/main/LICENSE) © 2019-PRESENT [LiuSeen](https://github.com/liuseen-l)

