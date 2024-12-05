import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({
      process: true,
      buffer: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      process: "process/browser",
      buffer: "buffer",
      url: "url",
      https: "https-browserify",
      http: "stream-http",
      stream: "stream-browserify",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
    include: [
      "buffer",
      "url",
      "https-browserify",
      "stream-http",
      "stream-browserify",
      "process",
      "http",
      "https",
      "stream",
    ],
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          buffer: "Buffer",
        },
      },
      external: [],
    },
    minify: false,
  },
});
