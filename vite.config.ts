import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    // Pre-bundle these on dev startup so they're instant
    include: ['react', 'react-dom', '@supabase/supabase-js'],
    exclude: ['lucide-react'],
  },

  build: {
    // Target modern browsers for smaller output
    target: 'es2020',

    // Raise chunk size warning threshold (our bundle is intentionally big)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching:
        // vendor libs rarely change → long-lived cache
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            if (id.includes('@supabase'))                           return 'supabase-vendor';
            if (id.includes('lucide'))                             return 'icons-vendor';
            return 'vendor';
          }
        },
      },
    },

    // Minify with esbuild (default, fastest)
    minify: 'esbuild',

    // Source maps off in prod — smaller files, no code leaks
    sourcemap: false,
  },

  server: {
    port: 5173,
    host: true, // expose on local network for mobile testing
  },

  preview: {
    port: 4173,
    host: true,
  },
});
