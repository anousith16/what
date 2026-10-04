import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" ทำให้ใช้กับ GitHub Pages ได้โดยไม่ต้องใส่ชื่อ repo
export default defineConfig({
  plugins: [react()],
  base: "./",
});
