import { defineConfig } from 'vite';
import { buildXDC, eruda, mockWebxdc } from "@webxdc/vite-plugins";

export default defineConfig({
    plugins: [buildXDC(), eruda(), mockWebxdc()],
});
