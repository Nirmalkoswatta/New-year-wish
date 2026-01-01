import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
const repoName = 'New-year-wish'
const basePath = process.env.GITHUB_PAGES ? `/${repoName}/` : './'

export default defineConfig({
  base: basePath,
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
