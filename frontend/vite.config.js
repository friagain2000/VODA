import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Render.com 루트 배포 시 base는 '/'여야 합니다.
  base: "/", 
  envDir: '..',
  plugins: [
    react(), 
    babel({ 
      presets: [reactCompilerPreset()] 
    }), 
    tailwindcss()
  ],
  // 빌드 결과물이 깔끔하게 나오도록 build 옵션 추가 (선택사항)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}))