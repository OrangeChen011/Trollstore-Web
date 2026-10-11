var app = new Framework7({
    el: "#app", theme: "ios", name: "CoolStore", id: "com.nanotek.CoolStore", popup: {
        push: !0, swipeToClose: !0
    }, sheet: {
        push: !0, swipeToClose: !0
    }, serviceWorker: {
        path: "./service-worker.js"
			}, routes: [{
            path: "/path/", content: 'content', options: {
                transition: "f7-circle"
							}}]}), mainView = app.views.create(".view-main");function hideIfBelowVersion(version) {
    var userAgent = window.navigator.userAgent,
        iOSVersion = parseFloat(
            ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(userAgent) || [0, ''])[1])
            .replace('undefined', '3_2').replace('_', '.').replace('_', '')
        ) || false;

    if (iOSVersion && iOSVersion < version) {
        var element = document.getElementById('ios17.4');
        if (element) {
            element.style.visibility = 'hidden';
        }
    }
}

hideIfBelowVersion(17.4);
function toggleDarkMode(){document.querySelector("html").classList.toggle("dark")}function applyDarkModeSetting(){const e=document.querySelector("html"),t=window.matchMedia("(prefers-color-scheme: dark)"),i=t=>{t.matches?e.classList.add("dark"):e.classList.remove("dark")};t.addListener(i),i(t)}
							applyDarkModeSetting();
							
							function loadIconFromLocalStorage() {
    var e = localStorage.getItem("customicon"); e && updateIcon(e)}if (document.addEventListener("DOMContentLoaded", (function() {
        document.querySelectorAll(".ptr-content").forEach((function(e) {
            e.addEventListener("ptr:refresh", (function(e) {
                window.location.reload()}))}))})), "serviceWorker"in navigator && navigator.serviceWorker.getRegistration().then((e=> {
        e || navigator.serviceWorker.register("service-worker.js").then((e=> {})).catch((e=> {}))})), window.addEventListener("load", (function() {
        loadIconFromLocalStorage()})), window.navigator.standalone) {
    var preloaderDialog = app.dialog.preloader(window.t ? window.t("dialog.installing") : "Installing Idid"); preloaderDialog.open(),
    setTimeout((function() {
			preloaderDialog.close()}), 2e3)}
function createItemHtml(e) {
    /* 注意：应用名称 e.title 是专有名词（来自 apps.json 或 IPA 的 Info.plist），
       不参与多语言翻译，始终按原文显示。 */
    if (e.custom) {
        return `\n    <li>\n        <div class="item-content">                  \n            <div class="item-media"><img loading="lazy" src="${e.icon}"></div>                  \n            <div class="item-inner">                      \n                <div class="item-title-row">                           \n                    <div class="item-title">${e.title}</div>                       \n                </div>                        \n                <div class="item-subtitle">${e.version} • ${e.id}</div>                      \n                <div class="item-footer">${e.sizeText || ""}</div>             \n            </div>\n        </div>\n    </li>\n  `;
    }
    return `\n    <li>\n\t\t<a class="item-link external" href="apple-magnifier://install?url=${e.get_link}">                
        <div class="item-content">                  
            <div class="item-media"><img loading="lazy" src="${e.icon}"></div>                  
            <div class="item-inner">                      
                <div class="item-title-row">                           
                    <div class="item-title">${e.title}</div>                       
                </div>                        
                <div class="item-subtitle">${e.version} • ${e.id}</div>                      
                <div class="item-footer"></div>             
            </div>
        </div>
    </a>\n    </li>\n  `;
}

function initVirtualList(e) {
    window._vlist = app.virtualList.create({
        el: ".virtual-list",
        items: e,
        renderItem: function (e, t) {
            return createItemHtml(e);
        },
        searchAll: function (e, t) {
            let i = [];
            for (let n = 0; n < t.length; n++)
                (t[n].title.toLowerCase().indexOf(e.toLowerCase()) >= 0 || "" === e.trim()) && i.push(n);
            return i;
        },
        height: 90
    });
    
		
}

async function loadApps() {
    try {
        const e = await fetch("apps.json"),
            t = (await e.json()).sort(((e, t) => e.title.localeCompare(t.title)));
        window._serverApps = t;
        renderAllApps();
    } catch (e) {
        console.error("Could not load apps:", e);
    }
}
function renderAllApps() {
    const custom = getLocalApps();
    const items = [...custom, ...(window._serverApps || [])];
    if (window._vlist) {
        window._vlist.replaceAllItems(items);
    } else {
        initVirtualList(items);
    }
    const i = document.getElementById("tweaksnumber");
    i && (i.textContent = items.length);
}
document.addEventListener("DOMContentLoaded",loadApps);"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then((e=>{e||navigator.serviceWorker.register("service-worker.js").then((e=>{})).catch((e=>{}))}));
function updateTabTitle() {
    document.querySelectorAll(".tab-link").forEach((function (e) {
        e.addEventListener("click", (function () {
            var key = this.getAttribute("data-tab-title-key"),
                label = key && window.t ? window.t(key) : this.getAttribute("data-tab-title"),
                t = document.querySelector(".navbar .title"),
                i = document.querySelector(".navbar .title-large-text");
            if (t) {
                t.textContent = label;
            }
            if (i) {
                i.textContent = label;
            }
        }))
    }));
}
updateTabTitle();

// 切换语言时同步刷新顶部导航标题
document.addEventListener("languagechange", function () {
    var active = document.querySelector(".tab-link.tab-link-active");
    var key = active && active.getAttribute("data-tab-title-key");
    var el = document.querySelector(".navbar .title");
    if (key && el && window.t) el.textContent = window.t(key);
});

function troll() {
	app.dialog.alert(window.t("dialog.trollText"), window.t("dialog.trollTitle"));
}
function uninstall() {
	app.dialog.alert(window.t("dialog.uninstallText"), window.t("dialog.uninstallTitle"));

}
function useinweb() {
	app.popup.close('#hs')

}
// 兼容：弹层已移除，保留空实现避免历史调用报错

/* ================= IPA 本地安装（右上角 + 号） ================= */

const LOCAL_IPA_KEY = "local_ipa_apps";
const DEFAULT_ICON = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" rx="13" fill="#b9c2cf"/><rect x="15" y="14" width="30" height="5" rx="2.5" fill="#fff" opacity=".92"/><rect x="15" y="25" width="30" height="5" rx="2.5" fill="#fff" opacity=".92"/><rect x="15" y="36" width="20" height="5" rx="2.5" fill="#fff" opacity=".92"/></svg>');

function pickIpa() {
	const inp = document.getElementById("ipaInput");
	if (inp) inp.click();
}

function getLocalApps() {
	try { return JSON.parse(localStorage.getItem(LOCAL_IPA_KEY)) || []; } catch (e) { return []; }
}
function saveLocalApps(a) {
	try { localStorage.setItem(LOCAL_IPA_KEY, JSON.stringify(a)); } catch (e) {}
}
function addLocalApp(a) {
	const list = getLocalApps();
	list.unshift(a);
	saveLocalApps(list);
	renderAllApps();
}
function fmtSize(n) {
	if (n >= 1073741824) return (n / 1073741824).toFixed(2) + " GB";
	if (n >= 1048576) return (n / 1048576).toFixed(1) + " MB";
	return Math.round(n / 1024) + " KB";
}

document.addEventListener("DOMContentLoaded", function () {
	const inp = document.getElementById("ipaInput");
	if (!inp) return;
	inp.addEventListener("change", function () {
		const f = inp.files && inp.files[0];
		inp.value = "";
		if (f) handleIpaFile(f);
	});
});

async function handleIpaFile(file) {
	try {
		const zip = await JSZip.loadAsync(file);
		const names = Object.keys(zip.files).filter(n => !zip.files[n].dir);
		const infoPath = names.find(n => /^Payload\/[^\/]+\.app\/Info\.plist$/i.test(n));
		if (!infoPath) throw new Error("未找到 Info.plist");
		const infoBytes = await zip.files[infoPath].async("uint8array");
		const info = await parsePlist(infoBytes);
		// 名称取自 IPA 内 Info.plist，保持原语言（不参与多语言翻译）
		const title = (info && (info.CFBundleDisplayName || info.CFBundleName)) || file.name.replace(/\.ipa$/i, "");
		const version = (info && (info.CFBundleShortVersionString || info.CFBundleVersion)) || "";
		const bid = (info && info.CFBundleIdentifier) || "local.ipa";
		const icon = await extractIcon(zip, names, infoPath, info || {});
		addLocalApp({ title: title, version: version, id: bid, icon: icon, sizeText: fmtSize(file.size) });
	} catch (e) {
		app.dialog.alert(window.t("dialog.ipaErrorText") + (e && e.message ? e.message : "unknown error"), window.t("dialog.ipaErrorTitle"));
	}
}

/* ---------- plist 解析（二进制 / XML） ---------- */

function parsePlist(bytes) {
	const head = new TextDecoder().decode(bytes.slice(0, 8));
	if (head.startsWith("bplist00")) return parseBinaryPlist(bytes);
	return parseXmlPlist(new TextDecoder("utf-8").decode(bytes));
}

function parseXmlPlist(xml) {
	const doc = new DOMParser().parseFromString(xml, "text/xml");
	const root = doc.getElementsByTagName("plist")[0] && doc.getElementsByTagName("plist")[0].firstElementChild;
	if (!root) throw new Error("plist 格式错误");
	return plistNodeToValue(root);
}
function plistNodeToValue(node) {
	switch (node.tagName) {
		case "dict": {
			const kids = Array.from(node.children), o = {};
			for (let i = 0; i + 1 < kids.length; i += 2) o[kids[i].textContent] = plistNodeToValue(kids[i + 1]);
			return o;
		}
		case "array": return Array.from(node.children).map(plistNodeToValue);
		case "integer": return parseInt(node.textContent, 10);
		case "real": return parseFloat(node.textContent);
		case "true": return true;
		case "false": return false;
		default: return node.textContent;
	}
}

function parseBinaryPlist(data) {
	if (data.length < 40) throw new Error("plist 太小");
	const dv = new DataView(data.buffer, data.byteOffset, data.byteLength);
	const tOff = data.length - 32;
	const offIntSize = data[tOff + 6], refSize = data[tOff + 7];
	const numObjs = Number(dv.getBigUint64(tOff + 8));
	const topObj = Number(dv.getBigUint64(tOff + 16));
	const tabOff = Number(dv.getBigUint64(tOff + 24));
	const offs = new Array(numObjs);
	for (let i = 0; i < numObjs; i++) {
		let v = 0;
		const p = tabOff + i * offIntSize;
		for (let j = 0; j < offIntSize; j++) v = v * 256 + data[p + j];
		offs[i] = v;
	}
	function readIntAt(p) {
		const m = data[p];
		if ((m >> 4) !== 1) return { v: m & 0xf, next: p + 1 };
		const size = 1 << (m & 0xf);
		let v = 0;
		for (let j = 0; j < size; j++) v = v * 256 + data[p + 1 + j];
		return { v: v, next: p + 1 + size };
	}
	function readRefs(p, count) {
		const r = [];
		for (let j = 0; j < count; j++) {
			let v = 0;
			for (let k = 0; k < refSize; k++) v = v * 256 + data[p + j * refSize + k];
			r.push(v);
		}
		return r;
	}
	function parseObj(idx) {
		const pos = offs[idx];
		if (pos === undefined) throw new Error("plist 对象越界");
		const marker = data[pos], t = marker >> 4, info = marker & 0xf;
		switch (t) {
			case 0x0:
				if (info === 8) return false;
				if (info === 9) return true;
				return null;
			case 0x1: {
				const size = 1 << info;
				let v = 0;
				for (let j = 0; j < size; j++) v = v * 256 + data[pos + 1 + j];
				if (size === 8 && v >= 2 ** 63) v -= 2 ** 64;
				return v;
			}
			case 0x2: return info === 2 ? dv.getFloat32(pos + 1) : dv.getFloat64(pos + 1);
			case 0x3: return new Date((dv.getFloat64(pos + 1) + 978307200) * 1000);
			case 0x4: {
				const l = info === 0xf ? readIntAt(pos + 1) : { v: info, next: pos + 1 };
				return data.slice(l.next, l.next + l.v);
			}
			case 0x5: {
				const l = info === 0xf ? readIntAt(pos + 1) : { v: info, next: pos + 1 };
				let s = "";
				for (let j = 0; j < l.v; j++) s += String.fromCharCode(data[l.next + j]);
				return s;
			}
			case 0x6: {
				const l = info === 0xf ? readIntAt(pos + 1) : { v: info, next: pos + 1 };
				return new TextDecoder("utf-16be").decode(new Uint8Array(data.buffer, data.byteOffset + l.next, l.v * 2));
			}
			case 0x8: {
				const size = 1 << info;
				let v = 0;
				for (let j = 0; j < size; j++) v = v * 256 + data[pos + 1 + j];
				return v;
			}
			case 0xd: {
				const l = info === 0xf ? readIntAt(pos + 1) : { v: info, next: pos + 1 };
				const keys = readRefs(l.next, l.v), vals = readRefs(l.next + l.v * refSize, l.v);
				const o = {};
				for (let j = 0; j < l.v; j++) o[parseObj(keys[j])] = parseObj(vals[j]);
				return o;
			}
			case 0xa: {
				const l = info === 0xf ? readIntAt(pos + 1) : { v: info, next: pos + 1 };
				return readRefs(l.next, l.v).map(parseObj);
			}
			default: return null;
		}
	}
	return parseObj(topObj);
}

/* ---------- 图标提取（含 CgBI 压缩 PNG 解码） ---------- */

function be32(b, p) { return ((b[p] << 24) | (b[p + 1] << 16) | (b[p + 2] << 8) | b[p + 3]) >>> 0; }

function hasCgBI(b) {
	for (let p = 8; p < Math.min(b.length - 8, 64);) {
		const len = be32(b, p);
		const type = String.fromCharCode(b[p + 4], b[p + 5], b[p + 6], b[p + 7]);
		if (type === "CgBI") return true;
		if (type === "IDAT") return false;
		p += 12 + len;
	}
	return false;
}

async function inflateRaw(bytes) {
	const ds = new DecompressionStream("deflate-raw");
	const stream = new Blob([bytes]).stream().pipeThrough(ds);
	return new Uint8Array(await new Response(stream).arrayBuffer());
}

function loadImage(url) {
	return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error("图片加载失败")); i.src = url; });
}

function drawScaled(src, w, h) {
	const MAX = 120;
	const s = Math.min(1, MAX / Math.max(w, h));
	const c = document.createElement("canvas");
	c.width = Math.max(1, Math.round(w * s));
	c.height = Math.max(1, Math.round(h * s));
	c.getContext("2d").drawImage(src, 0, 0, c.width, c.height);
	return c.toDataURL("image/png");
}

async function pngToDataURL(bytes) {
	if (!hasCgBI(bytes)) {
		const url = URL.createObjectURL(new Blob([bytes], { type: "image/png" }));
		try {
			const img = await loadImage(url);
			return drawScaled(img, img.naturalWidth, img.naturalHeight);
		} finally { URL.revokeObjectURL(url); }
	}
	// Apple CgBI 压缩 PNG：raw deflate + BGRA 预乘（可能为 Adam7 交错）
	let pos = 8, w = 0, h = 0, colorType = 6, bitDepth = 8, interlace = 0, idat = [], crushed = false;
	let plte = null, trns = null;
	while (pos + 8 <= bytes.length) {
		const len = be32(bytes, pos);
		const type = String.fromCharCode(bytes[pos + 4], bytes[pos + 5], bytes[pos + 6], bytes[pos + 7]);
		if (type === "IHDR") {
			h = be32(bytes, pos + 8); w = be32(bytes, pos + 12);
			bitDepth = bytes[pos + 16]; colorType = bytes[pos + 17]; interlace = bytes[pos + 20];
		}
		if (type === "PLTE") plte = bytes.slice(pos + 8, pos + 8 + len);
		if (type === "tRNS") trns = bytes.slice(pos + 8, pos + 8 + len);
		if (type === "CgBI") crushed = true;
		if (type === "IDAT") idat.push(bytes.slice(pos + 8, pos + 8 + len));
		pos += 12 + len;
		if (type === "IEND") break;
	}
	if (!crushed || !w || !h || !idat.length) throw new Error("PNG 解析失败");
	if (bitDepth !== 8) throw new Error("不支持的位深 " + bitDepth);
	const bpp = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 4 ? 2 : 1;
	const stride = w * bpp;
	const raw = new Uint8Array(idat.reduce((s, c) => s + c.length, 0));
	let o = 0; idat.forEach(c => { raw.set(c, o); o += c.length; });
	const dec = await inflateRaw(raw);

	// 标准 PNG 反过滤（万一某行带 filter 字节）
	function unfilterRows(src, rows, rstride, fsize) {
		const out = new Uint8Array(rows * rstride);
		for (let y = 0; y < rows; y++) {
			const ft = src[y * fsize];
			const rin = y * fsize + 1, rout = y * rstride;
			for (let x = 0; x < rstride; x++) {
				const a = x >= bpp ? out[rout + x - bpp] : 0;
				const b = y > 0 ? out[rout - rstride + x] : 0;
				const c2 = (x >= bpp && y > 0) ? out[rout - rstride + x - bpp] : 0;
				let v = src[rin + x];
				if (ft === 1) v = (v + a) & 0xff;
				else if (ft === 2) v = (v + b) & 0xff;
				else if (ft === 3) v = (v + ((a + b) >> 1)) & 0xff;
				else if (ft === 4) { const p = a + b - c2, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c2); v = (v + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c2)) & 0xff; }
				out[rout + x] = v;
			}
		}
		return out;
	}

	let rows;
	if (interlace === 1) {
		// Adam7 交错：逐 pass 取出像素并散回完整图像
		const passes = [[0, 0, 8, 8], [4, 0, 8, 8], [0, 4, 4, 8], [2, 0, 4, 4], [0, 2, 2, 4], [1, 0, 2, 2], [0, 1, 1, 2]];
		let noF = 0, withF = 0;
		for (const [x0, y0, dx, dy] of passes) {
			const pw = Math.ceil((w - x0) / dx), ph = Math.ceil((h - y0) / dy);
			if (pw > 0 && ph > 0) { noF += ph * pw * bpp; withF += ph * (pw * bpp + 1); }
		}
		const filtered = Math.abs(dec.length - withF) < Math.abs(dec.length - noF);
		let off = 0;
		rows = new Uint8Array(h * stride);
		for (const [x0, y0, dx, dy] of passes) {
			const pw = Math.ceil((w - x0) / dx), ph = Math.ceil((h - y0) / dy);
			if (pw <= 0 || ph <= 0) continue;
			const pstride = pw * bpp;
			let pdata = dec.subarray(off, off + ph * (filtered ? pstride + 1 : pstride));
			if (filtered) pdata = unfilterRows(pdata, ph, pstride, pstride + 1);
			off += ph * (filtered ? pstride + 1 : pstride);
			for (let py = 0; py < ph; py++) {
				for (let pxi = 0; pxi < pw; pxi++) {
					const x = x0 + pxi * dx, y = y0 + py * dy;
					const si = py * pstride + pxi * bpp, di = y * stride + x * bpp;
					for (let k = 0; k < bpp; k++) rows[di + k] = pdata[si + k];
				}
			}
		}
	} else if (dec.length >= h * (stride + 1) && dec.length % (stride + 1) === 0) {
		// 带 filter 字节的普通行
		rows = unfilterRows(dec, h, stride, stride + 1);
	} else {
		if (dec.length < h * stride) throw new Error("PNG 数据不完整");
		rows = dec;
	}

	const c = document.createElement("canvas");
	c.width = w; c.height = h;
	const ctx = c.getContext("2d");
	const imgData = ctx.createImageData(w, h);
	const px = imgData.data;
	for (let i = 0; i < w * h; i++) {
		const si = i * bpp, di = i * 4;
		if (colorType === 6) {
			const b = rows[si], g = rows[si + 1], r = rows[si + 2], a = rows[si + 3];
			if (a === 0) { px[di] = px[di + 1] = px[di + 2] = px[di + 3] = 0; }
			else {
				px[di] = Math.min(255, Math.round(r * 255 / a));
				px[di + 1] = Math.min(255, Math.round(g * 255 / a));
				px[di + 2] = Math.min(255, Math.round(b * 255 / a));
				px[di + 3] = a;
			}
		} else if (colorType === 2) {
			px[di] = rows[si + 2]; px[di + 1] = rows[si + 1]; px[di + 2] = rows[si]; px[di + 3] = 255;
		} else if (colorType === 3) {
			const idx = rows[si] * 3;
			px[di] = plte ? plte[idx] : 0; px[di + 1] = plte ? plte[idx + 1] : 0; px[di + 2] = plte ? plte[idx + 2] : 0;
			px[di + 3] = trns && rows[si] < trns.length ? trns[rows[si]] : 255;
		} else if (colorType === 4) {
			const g = rows[si], a = rows[si + 1];
			px[di] = px[di + 1] = px[di + 2] = a === 0 ? 0 : Math.min(255, Math.round(g * 255 / a)); px[di + 3] = a;
		} else {
			px[di] = px[di + 1] = px[di + 2] = rows[si]; px[di + 3] = 255;
		}
	}
	ctx.putImageData(imgData, 0, 0);
	return drawScaled(c, w, h);
}

async function extractIcon(zip, names, infoPath, info) {
	try {
		const appDir = infoPath.replace(/Info\.plist$/i, "");
		const lowerMap = {};
		names.forEach(n => { lowerMap[n.toLowerCase()] = n; });
		const cand = [];
		const push = n => { if (n) cand.push(String(n)); };
		const icons = info.CFBundleIcons || {};
		if (icons.CFBundlePrimaryIcon) {
			(icons.CFBundlePrimaryIcon.CFBundleIconFiles || []).forEach(push);
			push(icons.CFBundlePrimaryIcon.CFBundleIconName);
		}
		const ipad = info["CFBundleIcons~ipad"] || {};
		if (ipad.CFBundlePrimaryIcon) {
			(ipad.CFBundlePrimaryIcon.CFBundleIconFiles || []).forEach(push);
			push(ipad.CFBundlePrimaryIcon.CFBundleIconName);
		}
		push(info.CFBundleIconFile);
		push(info.CFBundleIconName);
		let best = null;
		for (const c of cand) {
			const base = c.replace(/\.png$/i, "");
			for (const suf of ["@3x~iphone.png", "@2x~iphone.png", "@3x.png", "@2x.png", "~iphone.png", ".png"]) {
				const full = (appDir + base + suf).toLowerCase();
				if (lowerMap[full]) { best = lowerMap[full]; break; }
			}
			if (best) break;
		}
		if (!best) {
			// 兜底：在 .app 目录里找 AppIcon*.png，优先 @2x/@3x
			const matches = names.filter(n => /^Payload\/[^\/]+\.app\/[^\/]*appicon[^\/]*\.png$/i.test(n));
			if (matches.length) {
				matches.sort((a, b) => (/@3x/i.test(b) - /@3x/i.test(a)) || (/@2x/i.test(b) - /@2x/i.test(a)) || a.localeCompare(b));
				best = matches[0];
			}
		}
		if (!best) return DEFAULT_ICON;
		const bytes = await zip.files[best].async("uint8array");
		return await pngToDataURL(bytes);
	} catch (e) {
		return DEFAULT_ICON;
	}
}

