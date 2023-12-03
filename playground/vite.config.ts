import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import InnerStylePlugin from '../src';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    InnerStylePlugin(),
    react()
  ],
  esbuild: false
})
