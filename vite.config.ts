import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean) as any,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
function componentTagger() {
  throw new Error("Function not implemented.");
}

