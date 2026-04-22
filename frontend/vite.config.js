import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // 배포 환경 및 루트 경로 실행을 위해 base를 "/"로 고정합니다.
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