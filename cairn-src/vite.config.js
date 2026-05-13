import { defineConfig } from 'vite';

// Cairn deploys to pebblepath.ai/cairn — use absolute base so /assets/...
// references in CSS (e.g. Ponari font) resolve to /cairn/assets/... in
// production while still working at localhost:5273/ in dev.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cairn/' : '/',
  server: {
    port: 5273,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}));
