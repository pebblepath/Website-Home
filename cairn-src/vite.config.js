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
    // Peel Firebase SDK + Lit into their own chunks so they cache
    // independently. First-load total stays the same; repeat visits +
    // parallel HTTP/2 streams benefit when only the app code changes.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/@firebase') || id.includes('node_modules/firebase')) {
            return 'firebase';
          }
          if (id.includes('node_modules/lit') || id.includes('node_modules/@lit')) {
            return 'lit';
          }
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
}));
