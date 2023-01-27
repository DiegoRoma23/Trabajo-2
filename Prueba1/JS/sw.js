const STATIC_CACHE = "static";
//Se declara un vector con la ubicación y el 
const APP_SHELL =[
    "/",
    "/../index.html",
    "/../scc/style.css",
    "/functions.js",
    "/main.js",
    "/scrip1.js",
    "/scrip2.js",
    "/images/beerjs-logo.png",
];

self.addEventListener("Install", (e) => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cachesStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fetch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .cache(console.log)
            );
});