import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    vue(),
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  outDir: './dist/test',
  base: '/test',
})
