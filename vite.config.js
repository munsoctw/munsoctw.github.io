import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MUN-Society-Taiwan/",
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/test/setup.js',
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
})
