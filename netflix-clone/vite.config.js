import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // bek recommendation : base then put the remote rep in quotation 
  base: "/Netlfix-Clone-2024/",
});


// Bek
// export default defineConfig({ plugins: [react()], base: "/test-deploye/", });