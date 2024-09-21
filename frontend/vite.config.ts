import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: { target: 'es2022' },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
