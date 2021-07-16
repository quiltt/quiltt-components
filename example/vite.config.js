import reactRefresh from '@vitejs/plugin-react-refresh'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..', '.', 'src'],
    },
  },
  plugins: [reactRefresh()],
  publicDir: './public',
})
