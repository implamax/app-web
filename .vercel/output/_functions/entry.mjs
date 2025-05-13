import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D3RurXie.mjs';
import { manifest } from './manifest_Gv7Qar48.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-message.astro.mjs');
const _page3 = () => import('./pages/casos-de-exito.astro.mjs');
const _page4 = () => import('./pages/contactanos.astro.mjs');
const _page5 = () => import('./pages/nosotros.astro.mjs');
const _page6 = () => import('./pages/planes.astro.mjs');
const _page7 = () => import('./pages/preguntas-frecuentes.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-message.ts", _page2],
    ["src/pages/casos-de-exito.astro", _page3],
    ["src/pages/contactanos.astro", _page4],
    ["src/pages/nosotros.astro", _page5],
    ["src/pages/planes.astro", _page6],
    ["src/pages/preguntas-frecuentes.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b3f813ac-bf98-4ba3-9e42-33c3c6d2a40c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
