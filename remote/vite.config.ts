import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  plugins: [
    react(), 
    federation({
      name: 'remote', 
      filename: 'remoteEntry.js', 
      exposes: { 
        './Button': './src/Button',
        './store': './src/store'
      },
      // any library that the module we are sharing is dependent on 
      shared: ['react', 'react-dom', 'jotai']
  })
  ],
})
