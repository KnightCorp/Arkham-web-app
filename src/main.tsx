import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Buffer } from "buffer";
// import { Readable } from "stream";

// if (typeof globalThis.Buffer === "undefined") {
//   globalThis.Buffer = Buffer;
// }

// if (typeof globalThis.Readable === "undefined") {
//   globalThis.Readable = Readable;
// }

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
