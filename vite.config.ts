import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const deployBase = process.env.VITE_BASE ?? "/Portfolio/";

export default defineConfig({
  plugins: [react()],
  base: deployBase.endsWith("/") ? deployBase : `${deployBase}/`,
  server: {
    host: true,
    allowedHosts: true,
  },
});
