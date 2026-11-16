import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** GitHub Pages: `/Portfolio/`. Vercel & domaine racine: `/` (ou `VITE_BASE`). */
const deployBase =
  process.env.VITE_BASE ?? (process.env.VERCEL ? "/" : "/Portfolio/");

export default defineConfig({
  plugins: [react()],
  base: deployBase.endsWith("/") ? deployBase : `${deployBase}/`,
  server: {
    host: true,
    allowedHosts: true,
  },
});
