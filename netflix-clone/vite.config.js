import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // bek recommendation : base then put the remote rep in quotation 
  base: "/Netflix-Clone-2024/",
});


// Bek
// export default defineConfig({ plugins: [react()], base: "/test-deploye/", });


// vite.config.js
// export default {
//   base: '/repository-name/',  // Replace with your repository's name
//   build: {
//     outDir: 'dist'
//   }
// }