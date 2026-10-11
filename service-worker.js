//Copying or selling this code is strictly prohibited
//Written by @Outland3r2007
const CACHE_NAME = "tweakra1n";
// 全部改为相对路径（"./" 会解析到 service-worker.js 所在目录），
// 这样部署在 GitHub Pages 的 /仓库名/ 子路径下也能正常工作。
// 同时移除了原列表中并不存在的 app.html 与 manifest.json。
const ASSETS = [
	"./",
	"./css/styles.css",
	"./core.js",
	"./i18n.js",
	"./apps.json",
	"./assets/default.png",
	"https://cdn.jsdelivr.net/npm/framework7@8/framework7-bundle.min.js",
	"https://cdn.jsdelivr.net/npm/framework7-icons@5.0.5/css/framework7-icons.css"
];
// 用 allSettled：个别资源 404 时不会导致整个 install 失败
self.addEventListener("install", (s => {
	s.waitUntil(
		caches.open(CACHE_NAME)
			.then((c => Promise.allSettled(ASSETS.map((u => c.add(u))))))
			.then((() => self.skipWaiting()))
	);
})),
self.addEventListener("activate", (s => {
	s.waitUntil(self.clients.claim());
})),
self.addEventListener("fetch", (s => {
	const r = s.request;
	if (r.method !== "GET") return;
	s.respondWith(
		fetch(r).then((e => {
			if (e.ok && /^https?:/.test(r.url)) {
				const t = e.clone();
				caches.open(CACHE_NAME).then((c => c.put(r, t)));
			}
			return e;
		})).catch((() => caches.match(r)))
	);
}));
