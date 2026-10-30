import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    watch: {
      ignored: ['**/*.zip', '**/dist/**', '**/.git/**'],
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons') || id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react-router')) return 'vendor-router';
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) return 'vendor-react';
            return 'vendor';
          }
        }
      },
    },
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    target: 'esnext',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom', 'lucide-react'],
  },
})
