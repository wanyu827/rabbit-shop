import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
        @import '@/assets/styles/variables.less';
        @import '@/assets/styles/mixins.less';`,
      },
    },
  },
});
