import { defineConfig, Plugin } from 'vite';
import { buildXDC, eruda, mockWebxdc } from "@webxdc/vite-plugins";

function glsl(): Plugin {
    return {
        name: 'glsl',
        transform(src, id) {
            if (/\.(vert|frag)$/.test(id)) {
                return { code: `export default ${JSON.stringify(src)};`, map: null };
            }
        },
    };
}

export default defineConfig({
    plugins: [glsl(), buildXDC(), eruda(), mockWebxdc()],
});
