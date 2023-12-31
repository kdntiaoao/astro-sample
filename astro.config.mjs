import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  base: 'test',
  outDir: './dist/test',
  integrations: [react(), vue(), tailwind(), mdx()],
})
