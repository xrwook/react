import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // server: {
  //   cors: false,
  //   proxy: {
  //     '/api': {
  //       target: "https://api.github.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       // SSL 인증서 검증 무시
  //       secure: false,
  //     },
  //     '^/fallback/.*': {
  //       target: 'https://api.github.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/fallback/, '')
  //     },
  //   },
  //   host: '127.0.0.1',
  //   hmr: {
  //       clientPort: 5173,
  //       host: 'localhost',
  //   },
  // },
});
