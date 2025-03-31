import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_gs1jerrl.mjs';
import { manifest } from './manifest_DnZKuZ1e.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-message.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/career.astro.mjs');
const _page6 = () => import('./pages/casos-de-exito.astro.mjs');
const _page7 = () => import('./pages/changelog.astro.mjs');
const _page8 = () => import('./pages/contactanos.astro.mjs');
const _page9 = () => import('./pages/features.astro.mjs');
const _page10 = () => import('./pages/integrations.astro.mjs');
const _page11 = () => import('./pages/nosotros.astro.mjs');
const _page12 = () => import('./pages/planes.astro.mjs');
const _page13 = () => import('./pages/preguntas-frecuentes.astro.mjs');
const _page14 = () => import('./pages/privacy-policy.astro.mjs');
const _page15 = () => import('./pages/reviews.astro.mjs');
const _page16 = () => import('./pages/terms-conditions.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-message.ts", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/career.astro", _page5],
    ["src/pages/casos-de-exito.astro", _page6],
    ["src/pages/changelog.astro", _page7],
    ["src/pages/contactanos.astro", _page8],
    ["src/pages/features.astro", _page9],
    ["src/pages/integrations.astro", _page10],
    ["src/pages/nosotros.astro", _page11],
    ["src/pages/planes.astro", _page12],
    ["src/pages/preguntas-frecuentes.astro", _page13],
    ["src/pages/privacy-policy.astro", _page14],
    ["src/pages/reviews.astro", _page15],
    ["src/pages/terms-conditions.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "138190be-f874-4037-83a8-ccfa79a7b717",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
