import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import JsxStyle from '../src';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    JsxStyle(),
    react()
  ],
})
