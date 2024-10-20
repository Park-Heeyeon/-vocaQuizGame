import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias 설정: @를 사용해 src 디렉터리의 파일들을 경로에서 간단히 가져올 수 있습니다.
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
