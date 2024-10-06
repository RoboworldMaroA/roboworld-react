import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//Deploy version to C-Panel whshost.com
export default defineConfig({
  base: 'https://roboworld.react.marekaugustyn.whshost.com/',
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: 'src'}],
  },
});
