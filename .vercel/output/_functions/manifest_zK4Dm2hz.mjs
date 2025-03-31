import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_2_fJCN2i.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CO8XiqJE.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/betolguin/implamax/app-web/","cacheDir":"file:///home/betolguin/implamax/app-web/node_modules/.astro/","outDir":"file:///home/betolguin/implamax/app-web/dist/","srcDir":"file:///home/betolguin/implamax/app-web/src/","publicDir":"file:///home/betolguin/implamax/app-web/public/","buildClientDir":"file:///home/betolguin/implamax/app-web/dist/client/","buildServerDir":"file:///home/betolguin/implamax/app-web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"casos-de-exito/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/casos-de-exito","isIndex":false,"type":"page","pattern":"^\\/casos-de-exito\\/?$","segments":[[{"content":"casos-de-exito","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/casos-de-exito.astro","pathname":"/casos-de-exito","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contactanos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contactanos","isIndex":false,"type":"page","pattern":"^\\/contactanos\\/?$","segments":[[{"content":"contactanos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactanos.astro","pathname":"/contactanos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"nosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"planes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/planes","isIndex":false,"type":"page","pattern":"^\\/planes\\/?$","segments":[[{"content":"planes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/planes.astro","pathname":"/planes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"preguntas-frecuentes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/preguntas-frecuentes","isIndex":false,"type":"page","pattern":"^\\/preguntas-frecuentes\\/?$","segments":[[{"content":"preguntas-frecuentes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/preguntas-frecuentes.astro","pathname":"/preguntas-frecuentes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/send-message","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-message\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-message","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-message.ts","pathname":"/api/send-message","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/betolguin/implamax/app-web/src/components/Hero.astro",{"propagation":"in-tree","containsHead":false}],["/home/betolguin/implamax/app-web/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/betolguin/implamax/app-web/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/betolguin/implamax/app-web/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/home/betolguin/implamax/app-web/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/home/betolguin/implamax/app-web/src/pages/casos-de-exito.astro",{"propagation":"none","containsHead":true}],["/home/betolguin/implamax/app-web/src/pages/contactanos.astro",{"propagation":"none","containsHead":true}],["/home/betolguin/implamax/app-web/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/home/betolguin/implamax/app-web/src/pages/planes.astro",{"propagation":"none","containsHead":true}],["/home/betolguin/implamax/app-web/src/pages/preguntas-frecuentes.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send-message@_@ts":"pages/api/send-message.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/casos-de-exito@_@astro":"pages/casos-de-exito.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/preguntas-frecuentes@_@astro":"pages/preguntas-frecuentes.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/contactanos@_@astro":"pages/contactanos.astro.mjs","\u0000@astro-page:src/pages/planes@_@astro":"pages/planes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/betolguin/implamax/app-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B2nYQPdd.mjs","\u0000@astrojs-manifest":"manifest_zK4Dm2hz.mjs","/home/betolguin/implamax/app-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.7pUXG82z.js","/home/betolguin/implamax/app-web/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.BTNPhFEc.js","/home/betolguin/implamax/app-web/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.PmlkOMDo.js","/home/betolguin/implamax/app-web/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/betolguin/implamax/app-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\"[data-animate]\").forEach((t,e)=>{const n=t.getAttribute(\"data-animate\"),a=t.getAttribute(\"data-delay\")||e*100;t.style.animationDelay=`${a}ms`,setTimeout(()=>{t.classList.add(n),t.classList.add(\"animated\")},10)});const i=document.querySelectorAll(\"[data-parallax]\");if(i.length>0){const t=()=>{i.forEach(e=>{const n=e.getAttribute(\"data-parallax\")||.1,a=-(window.scrollY*n);e.style.transform=`translateY(${a}px)`})};window.addEventListener(\"scroll\",t)}document.querySelectorAll('a[href^=\"#\"]:not([href=\"#\"])').forEach(t=>{t.addEventListener(\"click\",e=>{e.preventDefault();const n=t.getAttribute(\"href\"),a=document.querySelector(n);if(a){const l=a.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:l,behavior:\"smooth\"})}})}),document.querySelectorAll(\"[data-page-transition]\").forEach(t=>{const e=t.getAttribute(\"data-page-transition\");t.classList.add(`transition-${e}`)})});document.addEventListener(\"astro:before-preparation\",({from:o,to:i,direction:s})=>{if(o&&i){const r=new URL(o).pathname,t=new URL(i).pathname,e=r.split(\"/\").filter(Boolean).length,n=t.split(\"/\").filter(Boolean).length;let a=\"same\";n>e?a=\"deeper\":n<e&&(a=\"shallower\"),localStorage.setItem(\"navigationDirection\",a)}});document.addEventListener(\"astro:page-load\",()=>{const o=localStorage.getItem(\"navigationDirection\");o&&(document.documentElement.setAttribute(\"data-navigation\",o),setTimeout(()=>{localStorage.removeItem(\"navigationDirection\")},1e3))});"],["/home/betolguin/implamax/app-web/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","localStorage.getItem(\"darkMode\")===null&&(window.matchMedia(\"(prefers-color-scheme: dark)\").matches?(localStorage.setItem(\"darkMode\",\"true\"),document.documentElement.classList.add(\"dark\")):localStorage.setItem(\"darkMode\",\"false\"));document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"page-wrapper\");e&&e.classList.add(\"page-loaded\")});document.addEventListener(\"astro:before-swap\",()=>{const e=document.getElementById(\"page-wrapper\");e&&e.classList.remove(\"page-loaded\")});"],["/home/betolguin/implamax/app-web/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const r=document.querySelector(\"#contact-form\");r&&r.addEventListener(\"submit\",async o=>{o.preventDefault();const t=o.target,a=new FormData(t),s={name:a.get(\"name\"),email:a.get(\"email\"),message:a.get(\"message\")},e=t.querySelector(\"button[type='submit']\");e&&(e.disabled=!0,e.textContent=\"Enviando...\");try{const n=await fetch(\"/api/send-message\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(s)}),i=await n.json();n.ok?(alert(\"Mensaje enviado con éxito, te contáctaremos a la brevedad.\"),t.reset()):alert(`Error: ${i.error}`)}catch{alert(\"Hubo un error al enviar el mensaje.\")}finally{e&&(e.disabled=!1,e.textContent=\"Enviar\")}});"]],"assets":["/_astro/_slug_.BXLOBj2h.css","/camila-picture.png","/favicon.svg","/logo-azul.png","/logo-blanco.png","/puc-logo.png","/uandes-logo.png","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/page.BCFd37Sx.js","/_astro/page.BCFd37Sx.js","/404.html","/blog/index.html","/casos-de-exito/index.html","/contactanos/index.html","/nosotros/index.html","/planes/index.html","/preguntas-frecuentes/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"UUQG3wa9B66oUVy7ANVBcVcj57lY02rPtpJHzqaBTk4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
