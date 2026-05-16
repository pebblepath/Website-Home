import { defineConfig } from 'vite';

// Portal deploys to pebblepath.ai/portal — absolute base so /assets/...
// references resolve to /portal/assets/... in production while still
// working at localhost:5273/ in dev. Renamed from /cairn/ 2026-05-16;
// a query-preserving redirect at /cairn/ keeps old bookmarks, the
// already-shipped iOS "Open Cairn" link, and old ?join= invite links
// working. NOTE: import.meta.env.BASE_URL becomes '/portal/' so
// `manage-members-modal._inviteLink` auto-generates /portal/?join=…
// links — no manual change needed there.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portal/' : '/',
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
          // Sub-split Firebase by package so storage + functions load
          // lazily (only the trip form's preview path and profile-sheet
          // photo upload need them — most page-loads skip both chunks).
          if (id.match(/[\\/](?:@firebase|firebase)[\\/]storage/)) return 'firebase-storage';
          if (id.match(/[\\/](?:@firebase|firebase)[\\/]functions/)) return 'firebase-functions';
          if (id.includes('node_modules/@firebase') || id.includes('node_modules/firebase')) {
            return 'firebase-core';
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
