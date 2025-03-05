// imports ---------------
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {fileURLToPath, URL} from 'url'
export default defineConfig({
  base: "/cutspace/",
  plugins: [vue()],
  resolve: {
    alias: [
      // alias for comfortable
      // for "src"
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      // for "components"
      {find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url))},
      // for "assets"
      {find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url))},
    ]
  }
})
