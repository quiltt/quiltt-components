import reactRefresh from '@vitejs/plugin-react-refresh'

import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 9000,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..', '.', 'src', 'public'],
    },
  },
  plugins: [reactRefresh()],
  publicDir: './public',
})
