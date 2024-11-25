import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', //browsers can handle the latest ES features
    modulePreload: false
  },
  plugins: [
      react(),
      federation({
        name: 'app',
        remotes: {
          remoteApp: 'http://localhost:5001/assets/remoteEntry.js'
        },
        shared: ['react', 'react-dom']
      })
  ],
})
