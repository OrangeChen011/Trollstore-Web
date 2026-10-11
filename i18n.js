/* ============================================================
 * 多语言（i18n）：支持 18 种语言，默认简体中文
 * ============================================================ */
(function (global) {
	"use strict";

	/* 语言列表（顺序即设置页中的显示顺序） */
	var LANGUAGES = [
		{ code: "zh-Hans", name: "简体中文" },
		{ code: "zh-Hant", name: "繁體中文" },
		{ code: "en", name: "English" },
		{ code: "ja", name: "日本語" },
		{ code: "ko", name: "한국어" },
		{ code: "es", name: "Español" },
		{ code: "fr", name: "Français" },
		{ code: "de", name: "Deutsch" },
		{ code: "it", name: "Italiano" },
		{ code: "pt", name: "Português" },
		{ code: "ru", name: "Русский" },
		{ code: "ar", name: "العربية" },
		{ code: "hi", name: "हिन्दी" },
		{ code: "vi", name: "Tiếng Việt" },
		{ code: "th", name: "ไทย" },
		{ code: "id", name: "Bahasa Indonesia" },
		{ code: "tr", name: "Türkçe" },
		{ code: "nl", name: "Nederlands" }
	];

	var DEFAULT_LANGUAGE = "zh-Hans";
	var STORAGE_KEY = "app_language";

	var I18N = {
		/* ---------------- 简体中文 ---------------- */
		"zh-Hans": {
			"nav.apps": "应用",
			"nav.settings": "设置",
			"search.placeholder": "搜索",
			"common.cancel": "取消",
			"common.back": "返回",
			"settings.languageSection": "语言",
			"settings.language": "语言",
			"settings.utilities": "实用工具",
			"settings.respring": "注销",
			"settings.rebuildIconCache": "重建图标缓存",
			"settings.rebuildHint": "如果应用安装后没有立即出现，请在此处注销，之后它应该就会出现。",
			"settings.signing": "签名",
			"settings.ididInstalled": "Idid：已安装 (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid 已安装，它让 TrollStore 能够安装未签名的 IPA 文件。",
			"settings.persistence": "持久化",
			"settings.helperInstalled": "已安装 TrollStore 到「提示」",
			"settings.uninstallHelper": "卸载 TrollStore",
			"settings.persistenceHint": "当 iOS 重建图标缓存时，包括 TrollStore 在内的所有 TrollStore 应用都会被还原为「用户」状态，并可能消失或无法启动。如果发生这种情况，你可以使用安装到「提示」中的持久化助手来刷新应用注册，让它们恢复正常。",
			"settings.security": "安全",
			"settings.urlSchemeEnabled": "URL Scheme 已启用",
			"settings.showInstallConfirm": "显示安装确认提示",
			"settings.securityHint": "启用 URL Scheme 后，应用和网站可以通过 apple-magnifier://install?url=\"IPA_URL\" 触发 TrollStore 安装，并通过 apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" 启用 JIT。",
			"settings.advanced": "高级",
			"settings.donate": "捐赠",
			"settings.uninstall": "卸载 TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore 不是用来盗版的！",
			"dialog.trollTitle": "逗你玩的！",
			"dialog.trollText": "这不是真正的 TrollStore，它只是看起来像真正的 TrollStore，实际上是用来安装需要 TrollStore 才能安装的应用的商店。",
			"dialog.uninstallTitle": "如何卸载 CoolStore？",
			"dialog.uninstallText": "回到主屏幕，长按 CoolStore 图标，选择「删除书签」，然后在提示出现时点击删除。",
			"dialog.installing": "正在安装 Idid",
			"dialog.ipaErrorTitle": "安装失败",
			"dialog.ipaErrorText": "无法读取该 IPA 文件："
		},

		/* ---------------- 繁體中文 ---------------- */
		"zh-Hant": {
			"nav.apps": "應用",
			"nav.settings": "設定",
			"search.placeholder": "搜尋",
			"common.cancel": "取消",
			"common.back": "返回",
			"settings.languageSection": "語言",
			"settings.language": "語言",
			"settings.utilities": "實用工具",
			"settings.respring": "重新啟動",
			"settings.rebuildIconCache": "重建圖示快取",
			"settings.rebuildHint": "如果應用程式安裝後沒有立即出現，請在此重新啟動，之後它應該就會出現。",
			"settings.signing": "簽署",
			"settings.ididInstalled": "Idid：已安裝 (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid 已安裝，它讓 TrollStore 能夠安裝未簽署的 IPA 檔案。",
			"settings.persistence": "持久化",
			"settings.helperInstalled": "已將 TrollStore 安裝到「提示」",
			"settings.uninstallHelper": "解除安裝 TrollStore",
			"settings.persistenceHint": "當 iOS 重建圖示快取時，包括 TrollStore 本身在內的所有 TrollStore 應用程式都會被還原為「使用者」狀態，並可能消失或無法啟動。若發生這種情況，你可以使用安裝到「提示」中的持久化助手來重新整理應用程式註冊，讓它們恢復正常。",
			"settings.security": "安全性",
			"settings.urlSchemeEnabled": "URL Scheme 已啟用",
			"settings.showInstallConfirm": "顯示安裝確認提示",
			"settings.securityHint": "啟用 URL Scheme 後，應用程式與網站可以透過 apple-magnifier://install?url=\"IPA_URL\" 觸發 TrollStore 安裝，並透過 apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" 啟用 JIT。",
			"settings.advanced": "進階",
			"settings.donate": "贊助",
			"settings.uninstall": "解除安裝 TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore 不是用來盜版的！",
			"dialog.trollTitle": "騙到你啦！",
			"dialog.trollText": "這不是真正的 TrollStore，它只是看起來像真正的 TrollStore，實際上是用来安裝需要 TrollStore 才能安裝的應用程式的商店。",
			"dialog.uninstallTitle": "如何解除安裝 CoolStore？",
			"dialog.uninstallText": "回到主畫面，長按 CoolStore 圖示，選擇「刪除書籤」，然後在提示出現時點擊刪除。",
			"dialog.installing": "正在安裝 Idid",
			"dialog.ipaErrorTitle": "安裝失敗",
			"dialog.ipaErrorText": "無法讀取該 IPA 檔案："
		},

		/* ---------------- English ---------------- */
		"en": {
			"nav.apps": "Apps",
			"nav.settings": "Settings",
			"search.placeholder": "Search",
			"common.cancel": "Cancel",
			"common.back": "Back",
			"settings.languageSection": "LANGUAGE",
			"settings.language": "Language",
			"settings.utilities": "UTILITIES",
			"settings.respring": "Respring",
			"settings.rebuildIconCache": "Rebuild Icon cache",
			"settings.rebuildHint": "If an app does not immediately appear after installation, respring here and it should appear afterwards.",
			"settings.signing": "SIGNING",
			"settings.ididInstalled": "Idid: Installed (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid is installed and allows TrollStore to install unsigned IPA files.",
			"settings.persistence": "PERSISTENCE",
			"settings.helperInstalled": "TrollStore Installed into Tips",
			"settings.uninstallHelper": "Uninstall TrollStore",
			"settings.persistenceHint": "When iOS rebuilds the icon cache, all TrollStore apps including TrollStore itself will be reverted to \"User\" state and either disappear or no longer launch. If that happens, you can use the persistence helper installed into Tips to refresh the app registrations, which will make them work again.",
			"settings.security": "SECURITY",
			"settings.urlSchemeEnabled": "URL Scheme Enabled",
			"settings.showInstallConfirm": "Show Install Confirmation Alert",
			"settings.securityHint": "The URL Scheme, when enabled, will allow apps and websites to trigger TrollStore installations through the apple-magnifier://install?url=\"IPA_URL\" scheme and enable JIT through the apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" URL scheme",
			"settings.advanced": "Advanced",
			"settings.donate": "Donate",
			"settings.uninstall": "Uninstall TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore is NOT for piracy!",
			"dialog.trollTitle": "Trolled ya!",
			"dialog.trollText": "This is not real TrollStore, it just looks like the real TrollStore but it is just a store for apps that need to be installed with TrollStore.",
			"dialog.uninstallTitle": "How to Uninstall CoolStore?",
			"dialog.uninstallText": "Go to Home Screen, touch and hold the CoolStore icon, choose the option \"Delete Bookmark\" and then when the prompt appears click Delete.",
			"dialog.installing": "Installing Idid",
			"dialog.ipaErrorTitle": "Installation Failed",
			"dialog.ipaErrorText": "Unable to read this IPA file: "
		},

		/* ---------------- 日本語 ---------------- */
		"ja": {
			"nav.apps": "アプリ",
			"nav.settings": "設定",
			"search.placeholder": "検索",
			"common.cancel": "キャンセル",
			"common.back": "戻る",
			"settings.languageSection": "言語",
			"settings.language": "言語",
			"settings.utilities": "ユーティリティ",
			"settings.respring": "再スプリング",
			"settings.rebuildIconCache": "アイコンキャッシュを再構築",
			"settings.rebuildHint": "アプリがインストール直後に表示されない場合は、ここで再スプリングしてください。その後表示されるはずです。",
			"settings.signing": "署名",
			"settings.ididInstalled": "Idid：インストール済み (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid がインストールされており、TrollStore が未署名の IPA ファイルをインストールできるようにします。",
			"settings.persistence": "永続化",
			"settings.helperInstalled": "「ヒント」に TrollStore をインストール済み",
			"settings.uninstallHelper": "TrollStore をアンインストール",
			"settings.persistenceHint": "iOS がアイコンキャッシュを再構築すると、TrollStore 本体を含むすべての TrollStore アプリが「ユーザー」状態に戻り、消えたり起動しなくなったりします。その場合は「ヒント」にインストールされた永続化ヘルパーでアプリ登録を更新すると、再び動作するようになります。",
			"settings.security": "セキュリティ",
			"settings.urlSchemeEnabled": "URL Scheme 有効",
			"settings.showInstallConfirm": "インストール確認アラートを表示",
			"settings.securityHint": "URL Scheme を有効にすると、アプリや Web サイトが apple-magnifier://install?url=\"IPA_URL\" で TrollStore のインストールを実行でき、apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" で JIT を有効にできます。",
			"settings.advanced": "詳細",
			"settings.donate": "寄付",
			"settings.uninstall": "TrollStore をアンインストール",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore は海賊版のためのものではありません！",
			"dialog.trollTitle": "引っかかったね！",
			"dialog.trollText": "これは本物の TrollStore ではありません。本物の TrollStore に似ていますが、TrollStore でしかインストールできないアプリのためのストアです。",
			"dialog.uninstallTitle": "CoolStore のアンインストール方法",
			"dialog.uninstallText": "ホーム画面で CoolStore のアイコンを長押しし、「ブックマークを削除」を選び、確認が表示されたら「削除」をタップしてください。",
			"dialog.installing": "Idid をインストール中",
			"dialog.ipaErrorTitle": "インストールに失敗しました",
			"dialog.ipaErrorText": "この IPA ファイルを読み込めません："
		},

		/* ---------------- 한국어 ---------------- */
		"ko": {
			"nav.apps": "앱",
			"nav.settings": "설정",
			"search.placeholder": "검색",
			"common.cancel": "취소",
			"common.back": "뒤로",
			"settings.languageSection": "언어",
			"settings.language": "언어",
			"settings.utilities": "유틸리티",
			"settings.respring": "리스프링",
			"settings.rebuildIconCache": "아이콘 캐시 재구성",
			"settings.rebuildHint": "앱을 설치한 뒤 바로 나타나지 않으면 여기서 리스프링하세요. 그러면 정상적으로 표시됩니다.",
			"settings.signing": "서명",
			"settings.ididInstalled": "Idid: 설치됨 (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid가 설치되어 있으며, TrollStore가 서명되지 않은 IPA 파일을 설치할 수 있게 해줍니다.",
			"settings.persistence": "지속성",
			"settings.helperInstalled": "\"팁\"에 TrollStore 설치됨",
			"settings.uninstallHelper": "TrollStore 제거",
			"settings.persistenceHint": "iOS가 아이콘 캐시를 재구성하면 TrollStore 자체를 포함한 모든 TrollStore 앱이 \"사용자\" 상태로 되돌아가 사라지거나 실행되지 않을 수 있습니다. 이 경우 \"팁\"에 설치된 지속성 헬퍼로 앱 등록을 새로 고치면 다시 작동합니다.",
			"settings.security": "보안",
			"settings.urlSchemeEnabled": "URL Scheme 사용",
			"settings.showInstallConfirm": "설치 확인 알림 표시",
			"settings.securityHint": "URL Scheme을 사용하면 앱과 웹사이트가 apple-magnifier://install?url=\"IPA_URL\" 로 TrollStore 설치를 실행하고, apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" 로 JIT를 활성화할 수 있습니다.",
			"settings.advanced": "고급",
			"settings.donate": "후원",
			"settings.uninstall": "TrollStore 제거",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore는 불법 복제를 위한 것이 아닙니다!",
			"dialog.trollTitle": "속았지!",
			"dialog.trollText": "이것은 진짜 TrollStore가 아닙니다. 진짜 TrollStore처럼 보이지만, TrollStore로만 설치할 수 있는 앱을 위한 스토어일 뿐입니다.",
			"dialog.uninstallTitle": "CoolStore 제거 방법",
			"dialog.uninstallText": "홈 화면에서 CoolStore 아이콘을 길게 눌러 \"북마크 삭제\"를 선택한 뒤, 확인 창이 뜨면 삭제를 누르세요.",
			"dialog.installing": "Idid 설치 중",
			"dialog.ipaErrorTitle": "설치 실패",
			"dialog.ipaErrorText": "이 IPA 파일을 읽을 수 없습니다: "
		},

		/* ---------------- Español ---------------- */
		"es": {
			"nav.apps": "Apps",
			"nav.settings": "Ajustes",
			"search.placeholder": "Buscar",
			"common.cancel": "Cancelar",
			"common.back": "Atrás",
			"settings.languageSection": "IDIOMA",
			"settings.language": "Idioma",
			"settings.utilities": "UTILIDADES",
			"settings.respring": "Reiniciar interfaz",
			"settings.rebuildIconCache": "Reconstruir caché de iconos",
			"settings.rebuildHint": "Si una app no aparece inmediatamente tras la instalación, reinicia la interfaz aquí y debería aparecer.",
			"settings.signing": "FIRMA",
			"settings.ididInstalled": "Idid: instalado (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid está instalado y permite a TrollStore instalar archivos IPA sin firmar.",
			"settings.persistence": "PERSISTENCIA",
			"settings.helperInstalled": "TrollStore instalado en Tips",
			"settings.uninstallHelper": "Desinstalar TrollStore",
			"settings.persistenceHint": "Cuando iOS reconstruye la caché de iconos, todas las apps de TrollStore, incluido TrollStore, vuelven al estado \"Usuario\" y desaparecen o dejan de abrirse. Si eso ocurre, usa el asistente de persistencia instalado en Tips para actualizar los registros de apps y volverán a funcionar.",
			"settings.security": "SEGURIDAD",
			"settings.urlSchemeEnabled": "URL Scheme activado",
			"settings.showInstallConfirm": "Mostrar alerta de confirmación de instalación",
			"settings.securityHint": "Al activar el URL Scheme, las apps y sitios web podrán iniciar instalaciones de TrollStore mediante apple-magnifier://install?url=\"IPA_URL\" y habilitar JIT mediante apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Avanzado",
			"settings.donate": "Donar",
			"settings.uninstall": "Desinstalar TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>¡TrollStore NO es para la piratería!",
			"dialog.trollTitle": "¡Te engañé!",
			"dialog.trollText": "Este no es el verdadero TrollStore; solo se parece al TrollStore real, pero es una tienda para apps que necesitan instalarse con TrollStore.",
			"dialog.uninstallTitle": "¿Cómo desinstalar CoolStore?",
			"dialog.uninstallText": "Ve a la pantalla de inicio, mantén pulsado el icono de CoolStore, elige \"Eliminar marcador\" y, cuando aparezca el aviso, pulsa Eliminar.",
			"dialog.installing": "Instalando Idid",
			"dialog.ipaErrorTitle": "Error de instalación",
			"dialog.ipaErrorText": "No se puede leer este archivo IPA: "
		},

		/* ---------------- Français ---------------- */
		"fr": {
			"nav.apps": "Apps",
			"nav.settings": "Réglages",
			"search.placeholder": "Rechercher",
			"common.cancel": "Annuler",
			"common.back": "Retour",
			"settings.languageSection": "LANGUE",
			"settings.language": "Langue",
			"settings.utilities": "UTILITAIRES",
			"settings.respring": "Redémarrer l'interface",
			"settings.rebuildIconCache": "Reconstruire le cache d'icônes",
			"settings.rebuildHint": "Si une app n'apparaît pas immédiatement après l'installation, redémarrez l'interface ici et elle devrait apparaître.",
			"settings.signing": "SIGNATURE",
			"settings.ididInstalled": "Idid : installé (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid est installé et permet à TrollStore d'installer des fichiers IPA non signés.",
			"settings.persistence": "PERSISTANCE",
			"settings.helperInstalled": "TrollStore installé dans Tips",
			"settings.uninstallHelper": "Désinstaller TrollStore",
			"settings.persistenceHint": "Lorsqu'iOS reconstruit le cache d'icônes, toutes les apps TrollStore, y compris TrollStore elle-même, repassent à l'état « Utilisateur » et disparaissent ou ne se lancent plus. Si cela arrive, utilisez l'assistant de persistance installé dans Tips pour actualiser les enregistrements d'apps, et elles refonctionneront.",
			"settings.security": "SÉCURITÉ",
			"settings.urlSchemeEnabled": "URL Scheme activé",
			"settings.showInstallConfirm": "Afficher l'alerte de confirmation d'installation",
			"settings.securityHint": "Une fois activé, l'URL Scheme permet aux apps et sites web de déclencher des installations TrollStore via apple-magnifier://install?url=\"IPA_URL\" et d'activer JIT via apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Avancé",
			"settings.donate": "Faire un don",
			"settings.uninstall": "Désinstaller TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore n'est PAS destiné au piratage !",
			"dialog.trollTitle": "Bien eu !",
			"dialog.trollText": "Ce n'est pas le vrai TrollStore : il ressemble au vrai TrollStore, mais ce n'est qu'une boutique pour les apps qui doivent être installées avec TrollStore.",
			"dialog.uninstallTitle": "Comment désinstaller CoolStore ?",
			"dialog.uninstallText": "Allez sur l'écran d'accueil, maintenez l'icône CoolStore, choisissez « Supprimer le signet », puis cliquez sur Supprimer lorsque l'invite apparaît.",
			"dialog.installing": "Installation d'Idid",
			"dialog.ipaErrorTitle": "Échec de l'installation",
			"dialog.ipaErrorText": "Impossible de lire ce fichier IPA : "
		},

		/* ---------------- Deutsch ---------------- */
		"de": {
			"nav.apps": "Apps",
			"nav.settings": "Einstellungen",
			"search.placeholder": "Suchen",
			"common.cancel": "Abbrechen",
			"common.back": "Zurück",
			"settings.languageSection": "SPRACHE",
			"settings.language": "Sprache",
			"settings.utilities": "WERKZEUGE",
			"settings.respring": "Respring",
			"settings.rebuildIconCache": "Symbol-Cache neu aufbauen",
			"settings.rebuildHint": "Wenn eine App nach der Installation nicht sofort erscheint, führe hier einen Respring durch, danach sollte sie erscheinen.",
			"settings.signing": "SIGNIERUNG",
			"settings.ididInstalled": "Idid: installiert (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid ist installiert und ermöglicht TrollStore, unsignierte IPA-Dateien zu installieren.",
			"settings.persistence": "PERSISTENZ",
			"settings.helperInstalled": "TrollStore in „Tipps“ installiert",
			"settings.uninstallHelper": "TrollStore deinstallieren",
			"settings.persistenceHint": "Wenn iOS den Symbol-Cache neu aufbaut, werden alle TrollStore-Apps einschließlich TrollStore selbst in den Status „Benutzer“ zurückgesetzt und verschwinden oder starten nicht mehr. In diesem Fall kannst du mit dem in „Tipps“ installierten Persistenz-Helfer die App-Registrierungen aktualisieren, dann funktionieren sie wieder.",
			"settings.security": "SICHERHEIT",
			"settings.urlSchemeEnabled": "URL-Scheme aktiviert",
			"settings.showInstallConfirm": "Installationsbestätigung anzeigen",
			"settings.securityHint": "Wenn das URL-Scheme aktiviert ist, können Apps und Websites TrollStore-Installationen über apple-magnifier://install?url=\"IPA_URL\" auslösen und JIT über apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" aktivieren.",
			"settings.advanced": "Erweitert",
			"settings.donate": "Spenden",
			"settings.uninstall": "TrollStore deinstallieren",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore ist NICHT für Raubkopien gedacht!",
			"dialog.trollTitle": "Reingelegt!",
			"dialog.trollText": "Das ist nicht das echte TrollStore – es sieht nur so aus wie das echte TrollStore, ist aber nur ein Store für Apps, die mit TrollStore installiert werden müssen.",
			"dialog.uninstallTitle": "Wie deinstalliere ich CoolStore?",
			"dialog.uninstallText": "Gehe zum Home-Bildschirm, halte das CoolStore-Symbol gedrückt, wähle „Lesezeichen löschen“ und tippe dann im Dialog auf Löschen.",
			"dialog.installing": "Idid wird installiert",
			"dialog.ipaErrorTitle": "Installation fehlgeschlagen",
			"dialog.ipaErrorText": "Diese IPA-Datei kann nicht gelesen werden: "
		},

		/* ---------------- Italiano ---------------- */
		"it": {
			"nav.apps": "App",
			"nav.settings": "Impostazioni",
			"search.placeholder": "Cerca",
			"common.cancel": "Annulla",
			"common.back": "Indietro",
			"settings.languageSection": "LINGUA",
			"settings.language": "Lingua",
			"settings.utilities": "UTILITÀ",
			"settings.respring": "Riavvia interfaccia",
			"settings.rebuildIconCache": "Ricostruisci cache icone",
			"settings.rebuildHint": "Se un'app non compare subito dopo l'installazione, riavvia l'interfaccia qui e dovrebbe apparire.",
			"settings.signing": "FIRMA",
			"settings.ididInstalled": "Idid: installato (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid è installato e consente a TrollStore di installare file IPA non firmati.",
			"settings.persistence": "PERSISTENZA",
			"settings.helperInstalled": "TrollStore installato in Tips",
			"settings.uninstallHelper": "Disinstalla TrollStore",
			"settings.persistenceHint": "Quando iOS ricostruisce la cache delle icone, tutte le app di TrollStore, incluso TrollStore stesso, tornano allo stato \"Utente\" e possono sparire o non avviarsi più. In tal caso, usa l'helper di persistenza installato in Tips per aggiornare le registrazioni delle app e torneranno a funzionare.",
			"settings.security": "SICUREZZA",
			"settings.urlSchemeEnabled": "URL Scheme attivato",
			"settings.showInstallConfirm": "Mostra avviso di conferma installazione",
			"settings.securityHint": "Se attivato, l'URL Scheme consente ad app e siti web di avviare installazioni TrollStore tramite apple-magnifier://install?url=\"IPA_URL\" e di abilitare il JIT tramite apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Avanzate",
			"settings.donate": "Dona",
			"settings.uninstall": "Disinstalla TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore NON è per la pirateria!",
			"dialog.trollTitle": "Ti ho fregato!",
			"dialog.trollText": "Questo non è il vero TrollStore: sembra il vero TrollStore, ma è solo uno store per app che devono essere installate con TrollStore.",
			"dialog.uninstallTitle": "Come disinstallare CoolStore?",
			"dialog.uninstallText": "Vai alla schermata Home, tieni premuta l'icona di CoolStore, scegli \"Elimina segnalibro\" e, quando appare il messaggio, tocca Elimina.",
			"dialog.installing": "Installazione di Idid",
			"dialog.ipaErrorTitle": "Installazione non riuscita",
			"dialog.ipaErrorText": "Impossibile leggere questo file IPA: "
		},

		/* ---------------- Português ---------------- */
		"pt": {
			"nav.apps": "Apps",
			"nav.settings": "Ajustes",
			"search.placeholder": "Pesquisar",
			"common.cancel": "Cancelar",
			"common.back": "Voltar",
			"settings.languageSection": "IDIOMA",
			"settings.language": "Idioma",
			"settings.utilities": "UTILITÁRIOS",
			"settings.respring": "Reiniciar interface",
			"settings.rebuildIconCache": "Reconstruir cache de ícones",
			"settings.rebuildHint": "Se um app não aparecer imediatamente após a instalação, reinicie a interface aqui e ele deverá aparecer.",
			"settings.signing": "ASSINATURA",
			"settings.ididInstalled": "Idid: instalado (v2.1.5-procursus7-new)",
			"settings.ididHint": "O Idid está instalado e permite que o TrollStore instale arquivos IPA não assinados.",
			"settings.persistence": "PERSISTÊNCIA",
			"settings.helperInstalled": "TrollStore instalado no Tips",
			"settings.uninstallHelper": "Desinstalar o TrollStore",
			"settings.persistenceHint": "Quando o iOS reconstrói o cache de ícones, todos os apps do TrollStore, incluindo o próprio TrollStore, voltam ao estado \"Usuário\" e desaparecem ou deixam de abrir. Se isso acontecer, use o assistente de persistência instalado no Tips para atualizar os registros dos apps e eles voltarão a funcionar.",
			"settings.security": "SEGURANÇA",
			"settings.urlSchemeEnabled": "URL Scheme ativado",
			"settings.showInstallConfirm": "Mostrar alerta de confirmação de instalação",
			"settings.securityHint": "Quando ativado, o URL Scheme permite que apps e sites iniciem instalações do TrollStore via apple-magnifier://install?url=\"IPA_URL\" e ativem o JIT via apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Avançado",
			"settings.donate": "Doar",
			"settings.uninstall": "Desinstalar o TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>O TrollStore NÃO é para pirataria!",
			"dialog.trollTitle": "Te peguei!",
			"dialog.trollText": "Este não é o TrollStore verdadeiro; ele apenas se parece com o TrollStore real, mas é apenas uma loja para apps que precisam ser instalados com o TrollStore.",
			"dialog.uninstallTitle": "Como desinstalar o CoolStore?",
			"dialog.uninstallText": "Vá para a Tela de Início, toque e segure o ícone do CoolStore, escolha a opção \"Apagar marcador\" e, quando o aviso aparecer, toque em Apagar.",
			"dialog.installing": "Instalando o Idid",
			"dialog.ipaErrorTitle": "Falha na instalação",
			"dialog.ipaErrorText": "Não foi possível ler este arquivo IPA: "
		},

		/* ---------------- Русский ---------------- */
		"ru": {
			"nav.apps": "Программы",
			"nav.settings": "Настройки",
			"search.placeholder": "Поиск",
			"common.cancel": "Отмена",
			"common.back": "Назад",
			"settings.languageSection": "ЯЗЫК",
			"settings.language": "Язык",
			"settings.utilities": "УТИЛИТЫ",
			"settings.respring": "Перезапуск SpringBoard",
			"settings.rebuildIconCache": "Перестроить кэш значков",
			"settings.rebuildHint": "Если приложение не появилось сразу после установки, выполните перезапуск SpringBoard здесь, и оно должно появиться.",
			"settings.signing": "ПОДПИСЬ",
			"settings.ididInstalled": "Idid: установлен (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid установлен и позволяет TrollStore устанавливать неподписанные IPA-файлы.",
			"settings.persistence": "СОХРАНЕНИЕ",
			"settings.helperInstalled": "TrollStore установлен в «Советы»",
			"settings.uninstallHelper": "Удалить TrollStore",
			"settings.persistenceHint": "Когда iOS перестраивает кэш значков, все приложения TrollStore, включая сам TrollStore, возвращаются в состояние «Пользователь» и исчезают или перестают запускаться. В этом случае используйте помощника сохранения, установленного в «Советы», чтобы обновить регистрацию приложений, и они снова заработают.",
			"settings.security": "БЕЗОПАСНОСТЬ",
			"settings.urlSchemeEnabled": "URL Scheme включён",
			"settings.showInstallConfirm": "Показывать подтверждение установки",
			"settings.securityHint": "При включённой схеме URL приложения и сайты могут запускать установку через TrollStore по apple-magnifier://install?url=\"IPA_URL\" и включать JIT по apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Дополнительно",
			"settings.donate": "Поддержать",
			"settings.uninstall": "Удалить TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore НЕ предназначен для пиратства!",
			"dialog.trollTitle": "Обманул!",
			"dialog.trollText": "Это не настоящий TrollStore — он лишь похож на настоящий TrollStore, но это просто магазин приложений, которые нужно устанавливать через TrollStore.",
			"dialog.uninstallTitle": "Как удалить CoolStore?",
			"dialog.uninstallText": "Перейдите на главный экран, удерживайте значок CoolStore, выберите «Удалить закладку» и в появившемся запросе нажмите «Удалить».",
			"dialog.installing": "Установка Idid",
			"dialog.ipaErrorTitle": "Не удалось установить",
			"dialog.ipaErrorText": "Не удалось прочитать этот IPA-файл: "
		},

		/* ---------------- العربية ---------------- */
		"ar": {
			"nav.apps": "التطبيقات",
			"nav.settings": "الإعدادات",
			"search.placeholder": "بحث",
			"common.cancel": "إلغاء",
			"common.back": "رجوع",
			"settings.languageSection": "اللغة",
			"settings.language": "اللغة",
			"settings.utilities": "الأدوات",
			"settings.respring": "إعادة تشغيل الواجهة",
			"settings.rebuildIconCache": "إعادة بناء ذاكرة الرموز",
			"settings.rebuildHint": "إذا لم يظهر التطبيق فور تثبيته، فأعد تشغيل الواجهة من هنا وسيظهر بعد ذلك.",
			"settings.signing": "التوقيع",
			"settings.ididInstalled": "Idid: مثبّت (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid مثبّت ويسمح لـ TrollStore بتثبيت ملفات IPA غير الموقّعة.",
			"settings.persistence": "الاستمرارية",
			"settings.helperInstalled": "تم تثبيت TrollStore في «تلميحات»",
			"settings.uninstallHelper": "إلغاء تثبيت TrollStore",
			"settings.persistenceHint": "عندما يعيد iOS بناء ذاكرة الرموز، ستعود جميع تطبيقات TrollStore بما فيها TrollStore نفسه إلى حالة «المستخدم» وقد تختفي أو تتوقف عن العمل. إذا حدث ذلك، استخدم مساعد الاستمرارية المثبّت في «تلميحات» لتحديث سجلات التطبيقات، وستعمل مرة أخرى.",
			"settings.security": "الأمان",
			"settings.urlSchemeEnabled": "تم تمكين URL Scheme",
			"settings.showInstallConfirm": "إظهار تنبيه تأكيد التثبيت",
			"settings.securityHint": "عند التمكين، يتيح URL Scheme للتطبيقات والمواقع بدء تثبيت TrollStore عبر apple-magnifier://install?url=\"IPA_URL\" وتمكين JIT عبر apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "متقدّم",
			"settings.donate": "تبرّع",
			"settings.uninstall": "إلغاء تثبيت TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore ليس للقرصنة!",
			"dialog.trollTitle": "خُدعت!",
			"dialog.trollText": "هذا ليس TrollStore الحقيقي، إنه يشبه TrollStore الحقيقي لكنه مجرد متجر للتطبيقات التي يجب تثبيتها باستخدام TrollStore.",
			"dialog.uninstallTitle": "كيفية إلغاء تثبيت CoolStore؟",
			"dialog.uninstallText": "انتقل إلى الشاشة الرئيسية، واضغط مطوّلاً على أيقونة CoolStore، واختر «حذف الإشارة المرجعية»، ثم اضغط «حذف» عند ظهور التنبيه.",
			"dialog.installing": "جارٍ تثبيت Idid",
			"dialog.ipaErrorTitle": "فشل التثبيت",
			"dialog.ipaErrorText": "تعذّر قراءة ملف IPA هذا: "
		},

		/* ---------------- हिन्दी ---------------- */
		"hi": {
			"nav.apps": "ऐप्स",
			"nav.settings": "सेटिंग्स",
			"search.placeholder": "खोजें",
			"common.cancel": "रद्द करें",
			"common.back": "वापस",
			"settings.languageSection": "भाषा",
			"settings.language": "भाषा",
			"settings.utilities": "उपयोगिताएँ",
			"settings.respring": "रीस्प्रिंग",
			"settings.rebuildIconCache": "आइकन कैश पुनर्निर्मित करें",
			"settings.rebuildHint": "अगर इंस्टॉल के बाद ऐप तुरंत न दिखे, तो यहाँ रीस्प्रिंग करें, इसके बाद यह दिखना चाहिए।",
			"settings.signing": "साइनिंग",
			"settings.ididInstalled": "Idid: इंस्टॉल (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid इंस्टॉल है और TrollStore को बिना साइन किए IPA फ़ाइलें इंस्टॉल करने देता है।",
			"settings.persistence": "स्थायित्व",
			"settings.helperInstalled": "“Tips” में TrollStore इंस्टॉल",
			"settings.uninstallHelper": "TrollStore अनइंस्टॉल करें",
			"settings.persistenceHint": "जब iOS आइकन कैश पुनर्निर्मित करता है, तो TrollStore सहित सभी TrollStore ऐप्स “उपयोगकर्ता” स्थिति में लौट जाते हैं और गायब हो जाते हैं या लॉन्च नहीं होते। ऐसा होने पर “Tips” में इंस्टॉल स्थायित्व हेल्पर से ऐप रजिस्ट्रेशन रीफ़्रेश करें, इससे वे फिर काम करेंगे।",
			"settings.security": "सुरक्षा",
			"settings.urlSchemeEnabled": "URL Scheme सक्षम",
			"settings.showInstallConfirm": "इंस्टॉल पुष्टि अलर्ट दिखाएँ",
			"settings.securityHint": "सक्षम होने पर URL Scheme ऐप्स और वेबसाइटों को apple-magnifier://install?url=\"IPA_URL\" के ज़रिए TrollStore इंस्टॉल शुरू करने और apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" के ज़रिए JIT सक्षम करने देता है।",
			"settings.advanced": "उन्नत",
			"settings.donate": "दान करें",
			"settings.uninstall": "TrollStore अनइंस्टॉल करें",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore पायरेसी के लिए नहीं है!",
			"dialog.trollTitle": "फँस गए!",
			"dialog.trollText": "यह असली TrollStore नहीं है—यह असली TrollStore जैसा दिखता है, लेकिन यह केवल उन ऐप्स का स्टोर है जिन्हें TrollStore से इंस्टॉल करना होता है।",
			"dialog.uninstallTitle": "CoolStore को कैसे अनइंस्टॉल करें?",
			"dialog.uninstallText": "होम स्क्रीन पर जाएँ, CoolStore आइकन को दबाकर रखें, “बुकमार्क हटाएँ” चुनें, और प्रॉम्प्ट आने पर Delete दबाएँ।",
			"dialog.installing": "Idid इंस्टॉल हो रहा है",
			"dialog.ipaErrorTitle": "इंस्टॉलेशन विफल",
			"dialog.ipaErrorText": "यह IPA फ़ाइल पढ़ी नहीं जा सकी: "
		},

		/* ---------------- Tiếng Việt ---------------- */
		"vi": {
			"nav.apps": "Ứng dụng",
			"nav.settings": "Cài đặt",
			"search.placeholder": "Tìm kiếm",
			"common.cancel": "Hủy",
			"common.back": "Quay lại",
			"settings.languageSection": "NGÔN NGỮ",
			"settings.language": "Ngôn ngữ",
			"settings.utilities": "TIỆN ÍCH",
			"settings.respring": "Khởi động lại giao diện",
			"settings.rebuildIconCache": "Xây dựng lại bộ nhớ đệm biểu tượng",
			"settings.rebuildHint": "Nếu ứng dụng không xuất hiện ngay sau khi cài đặt, hãy khởi động lại giao diện tại đây, sau đó ứng dụng sẽ hiện ra.",
			"settings.signing": "CHỮ KÝ",
			"settings.ididInstalled": "Idid: đã cài (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid đã được cài đặt và cho phép TrollStore cài các tệp IPA chưa ký.",
			"settings.persistence": "LƯU TRỮ",
			"settings.helperInstalled": "Đã cài TrollStore vào Tips",
			"settings.uninstallHelper": "Gỡ TrollStore",
			"settings.persistenceHint": "Khi iOS xây dựng lại bộ nhớ đệm biểu tượng, mọi ứng dụng TrollStore kể cả TrollStore sẽ trở về trạng thái “Người dùng” và có thể biến mất hoặc không mở được. Khi đó, hãy dùng trình hỗ trợ lưu trữ đã cài vào Tips để làm mới đăng ký ứng dụng, chúng sẽ hoạt động trở lại.",
			"settings.security": "BẢO MẬT",
			"settings.urlSchemeEnabled": "Đã bật URL Scheme",
			"settings.showInstallConfirm": "Hiện cảnh báo xác nhận cài đặt",
			"settings.securityHint": "Khi bật, URL Scheme cho phép ứng dụng và trang web kích hoạt cài đặt TrollStore qua apple-magnifier://install?url=\"IPA_URL\" và bật JIT qua apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Nâng cao",
			"settings.donate": "Ủng hộ",
			"settings.uninstall": "Gỡ TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore KHÔNG dành cho việc sao chép lậu!",
			"dialog.trollTitle": "Bị lừa rồi!",
			"dialog.trollText": "Đây không phải TrollStore thật, nó chỉ trông giống TrollStore thật nhưng thực chất chỉ là cửa hàng cho các ứng dụng cần cài bằng TrollStore.",
			"dialog.uninstallTitle": "Cách gỡ CoolStore?",
			"dialog.uninstallText": "Vào Màn hình chính, nhấn giữ biểu tượng CoolStore, chọn “Xóa dấu trang”, rồi nhấn Xóa khi hộp thoại hiện ra.",
			"dialog.installing": "Đang cài Idid",
			"dialog.ipaErrorTitle": "Cài đặt thất bại",
			"dialog.ipaErrorText": "Không thể đọc tệp IPA này: "
		},

		/* ---------------- ไทย ---------------- */
		"th": {
			"nav.apps": "แอป",
			"nav.settings": "การตั้งค่า",
			"search.placeholder": "ค้นหา",
			"common.cancel": "ยกเลิก",
			"common.back": "ย้อนกลับ",
			"settings.languageSection": "ภาษา",
			"settings.language": "ภาษา",
			"settings.utilities": "เครื่องมือ",
			"settings.respring": "รีสปริง",
			"settings.rebuildIconCache": "สร้างแคชไอคอนใหม่",
			"settings.rebuildHint": "หากแอปไม่ปรากฏทันทีหลังติดตั้ง ให้รีสปริงที่นี่ แล้วแอปจะปรากฏขึ้น",
			"settings.signing": "การลงนาม",
			"settings.ididInstalled": "Idid: ติดตั้งแล้ว (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid ได้รับการติดตั้งและช่วยให้ TrollStore ติดตั้งไฟล์ IPA ที่ไม่ได้ลงนามได้",
			"settings.persistence": "ความคงอยู่",
			"settings.helperInstalled": "ติดตั้ง TrollStore ลงใน Tips แล้ว",
			"settings.uninstallHelper": "ถอนการติดตั้ง TrollStore",
			"settings.persistenceHint": "เมื่อ iOS สร้างแคชไอคอนใหม่ แอป TrollStore ทั้งหมดรวมถึง TrollStore เองจะกลับสู่สถานะ “ผู้ใช้” และอาจหายไปหรือเปิดไม่ขึ้น หากเกิดเหตุการณ์นี้ ให้ใช้ตัวช่วยความคงอยู่ที่ติดตั้งใน Tips เพื่อรีเฟรชการลงทะเบียนแอป แล้วแอปจะกลับมาใช้งานได้",
			"settings.security": "ความปลอดภัย",
			"settings.urlSchemeEnabled": "เปิดใช้ URL Scheme",
			"settings.showInstallConfirm": "แสดงการยืนยันก่อนติดตั้ง",
			"settings.securityHint": "เมื่อเปิดใช้ URL Scheme แอปและเว็บไซต์จะสามารถสั่งติดตั้งผ่าน TrollStore ด้วย apple-magnifier://install?url=\"IPA_URL\" และเปิดใช้ JIT ด้วย apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\"",
			"settings.advanced": "ขั้นสูง",
			"settings.donate": "สนับสนุน",
			"settings.uninstall": "ถอนการติดตั้ง TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore ไม่ได้มีไว้สำหรับการละเมิดลิขสิทธิ์!",
			"dialog.trollTitle": "โดนหลอกแล้ว!",
			"dialog.trollText": "นี่ไม่ใช่ TrollStore ตัวจริง มันเพียงแต่ดูคล้าย TrollStore จริง แต่เป็นเพียงสโตร์สำหรับแอปที่ต้องติดตั้งด้วย TrollStore",
			"dialog.uninstallTitle": "วิธีถอนการติดตั้ง CoolStore",
			"dialog.uninstallText": "ไปที่หน้าจอหลัก แตะค้างที่ไอคอน CoolStore เลือก «ลบบุ๊กมาร์ก» แล้วแตะ ลบ เมื่อมีข้อความแจ้ง",
			"dialog.installing": "กำลังติดตั้ง Idid",
			"dialog.ipaErrorTitle": "ติดตั้งไม่สำเร็จ",
			"dialog.ipaErrorText": "ไม่สามารถอ่านไฟล์ IPA นี้ได้: "
		},

		/* ---------------- Bahasa Indonesia ---------------- */
		"id": {
			"nav.apps": "Aplikasi",
			"nav.settings": "Pengaturan",
			"search.placeholder": "Cari",
			"common.cancel": "Batal",
			"common.back": "Kembali",
			"settings.languageSection": "BAHASA",
			"settings.language": "Bahasa",
			"settings.utilities": "UTILITAS",
			"settings.respring": "Respring",
			"settings.rebuildIconCache": "Bangun ulang cache ikon",
			"settings.rebuildHint": "Jika aplikasi tidak muncul segera setelah dipasang, lakukan respring di sini dan aplikasi akan muncul.",
			"settings.signing": "PENANDATANGANAN",
			"settings.ididInstalled": "Idid: terpasang (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid telah terpasang dan memungkinkan TrollStore memasang berkas IPA yang tidak ditandatangani.",
			"settings.persistence": "PERSISTENSI",
			"settings.helperInstalled": "TrollStore terpasang di Tips",
			"settings.uninstallHelper": "Copot TrollStore",
			"settings.persistenceHint": "Saat iOS membangun ulang cache ikon, semua aplikasi TrollStore termasuk TrollStore sendiri akan kembali ke status \"Pengguna\" dan menghilang atau tidak dapat dibuka. Jika itu terjadi, gunakan helper persistensi yang terpasang di Tips untuk menyegarkan pendaftaran aplikasi, lalu aplikasi akan berfungsi kembali.",
			"settings.security": "KEAMANAN",
			"settings.urlSchemeEnabled": "URL Scheme diaktifkan",
			"settings.showInstallConfirm": "Tampilkan konfirmasi pemasangan",
			"settings.securityHint": "Saat diaktifkan, URL Scheme memungkinkan aplikasi dan situs web memicu pemasangan TrollStore melalui apple-magnifier://install?url=\"IPA_URL\" dan mengaktifkan JIT melalui apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Lanjutan",
			"settings.donate": "Donasi",
			"settings.uninstall": "Copot TrollStore",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore BUKAN untuk pembajakan!",
			"dialog.trollTitle": "Kena kau!",
			"dialog.trollText": "Ini bukan TrollStore asli, hanya terlihat seperti TrollStore asli, tetapi sebenarnya hanyalah toko untuk aplikasi yang perlu dipasang dengan TrollStore.",
			"dialog.uninstallTitle": "Cara mencopot CoolStore?",
			"dialog.uninstallText": "Buka Layar Utama, tekan dan tahan ikon CoolStore, pilih \"Hapus Bookmark\", lalu ketuk Hapus saat perintah muncul.",
			"dialog.installing": "Memasang Idid",
			"dialog.ipaErrorTitle": "Pemasangan gagal",
			"dialog.ipaErrorText": "Tidak dapat membaca berkas IPA ini: "
		},

		/* ---------------- Türkçe ---------------- */
		"tr": {
			"nav.apps": "Uygulamalar",
			"nav.settings": "Ayarlar",
			"search.placeholder": "Ara",
			"common.cancel": "İptal",
			"common.back": "Geri",
			"settings.languageSection": "DİL",
			"settings.language": "Dil",
			"settings.utilities": "ARAÇLAR",
			"settings.respring": "Yeniden başlat",
			"settings.rebuildIconCache": "Simge önbelleğini yeniden oluştur",
			"settings.rebuildHint": "Bir uygulama kurulumdan sonra hemen görünmezse burada yeniden başlatın, ardından görünmelidir.",
			"settings.signing": "İMZALAMA",
			"settings.ididInstalled": "Idid: kurulu (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid kurulu ve TrollStore'un imzasız IPA dosyalarını kurmasını sağlar.",
			"settings.persistence": "KALICILIK",
			"settings.helperInstalled": "TrollStore \"İpuçları\"na kuruldu",
			"settings.uninstallHelper": "TrollStore'u kaldır",
			"settings.persistenceHint": "iOS simge önbelleğini yeniden oluşturduğunda, TrollStore'un kendisi dahil tüm TrollStore uygulamaları \"Kullanıcı\" durumuna döner ve kaybolur ya da açılmaz. Bu olursa, \"İpuçları\"na kurulan kalıcılık yardımcısıyla uygulama kayıtlarını yenileyin; yeniden çalışacaklardır.",
			"settings.security": "GÜVENLİK",
			"settings.urlSchemeEnabled": "URL Scheme etkin",
			"settings.showInstallConfirm": "Kurulum onayı uyarısını göster",
			"settings.securityHint": "Etkinleştirildiğinde URL Scheme, uygulama ve web sitelerinin apple-magnifier://install?url=\"IPA_URL\" ile TrollStore kurulumunu başlatmasına ve apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\" ile JIT'i açmasına izin verir.",
			"settings.advanced": "Gelişmiş",
			"settings.donate": "Bağış yap",
			"settings.uninstall": "TrollStore'u kaldır",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore korsanlık için DEĞİLDİR!",
			"dialog.trollTitle": "Yakalandın!",
			"dialog.trollText": "Bu gerçek TrollStore değil; yalnızca gerçek TrollStore'a benziyor, ama aslında TrollStore ile kurulması gereken uygulamalar için bir mağaza.",
			"dialog.uninstallTitle": "CoolStore nasıl kaldırılır?",
			"dialog.uninstallText": "Ana Ekrana gidin, CoolStore simgesini basılı tutun, \"Yer İmini Sil\" seçeneğini seçin ve uyarı çıktığında Sil'e dokunun.",
			"dialog.installing": "Idid kuruluyor",
			"dialog.ipaErrorTitle": "Kurulum başarısız",
			"dialog.ipaErrorText": "Bu IPA dosyası okunamıyor: "
		},

		/* ---------------- Nederlands ---------------- */
		"nl": {
			"nav.apps": "Apps",
			"nav.settings": "Instellingen",
			"search.placeholder": "Zoeken",
			"common.cancel": "Annuleer",
			"common.back": "Terug",
			"settings.languageSection": "TAAL",
			"settings.language": "Taal",
			"settings.utilities": "HULPMIDDELEN",
			"settings.respring": "Interface herstarten",
			"settings.rebuildIconCache": "Pictogramcache opnieuw opbouwen",
			"settings.rebuildHint": "Als een app niet direct na installatie verschijnt, herstart hier de interface en dan zou hij moeten verschijnen.",
			"settings.signing": "ONDERTEKENING",
			"settings.ididInstalled": "Idid: geïnstalleerd (v2.1.5-procursus7-new)",
			"settings.ididHint": "Idid is geïnstalleerd en laat TrollStore niet-ondertekende IPA-bestanden installeren.",
			"settings.persistence": "PERSISTENTIE",
			"settings.helperInstalled": "TrollStore geïnstalleerd in Tips",
			"settings.uninstallHelper": "TrollStore verwijderen",
			"settings.persistenceHint": "Wanneer iOS de pictogramcache opnieuw opbouwt, worden alle TrollStore-apps, inclusief TrollStore zelf, teruggezet naar de status \"Gebruiker\" en verdwijnen ze of starten ze niet meer. Gebeurt dat, gebruik dan de persistentie-helper in Tips om de app-registraties te vernieuwen; daarna werken ze weer.",
			"settings.security": "BEVEILIGING",
			"settings.urlSchemeEnabled": "URL Scheme ingeschakeld",
			"settings.showInstallConfirm": "Installatiebevestiging tonen",
			"settings.securityHint": "Als dit is ingeschakeld, kunnen apps en websites TrollStore-installaties starten via apple-magnifier://install?url=\"IPA_URL\" en JIT inschakelen via apple-magnifier://enable-jit?bundle-id=\"BUNDLE_ID\".",
			"settings.advanced": "Geavanceerd",
			"settings.donate": "Doneren",
			"settings.uninstall": "TrollStore verwijderen",
			"settings.footer": "TrollStore 1.2.0<br><br>© 2024 orangechen011<br><br>TrollStore is NIET bedoeld voor piraterij!",
			"dialog.trollTitle": "Erin geluisd!",
			"dialog.trollText": "Dit is niet de echte TrollStore; het lijkt alleen op de echte TrollStore, maar het is slechts een store voor apps die met TrollStore moeten worden geïnstalleerd.",
			"dialog.uninstallTitle": "Hoe verwijder ik CoolStore?",
			"dialog.uninstallText": "Ga naar het beginscherm, houd het CoolStore-pictogram ingedrukt, kies \"Bladwijzer verwijderen\" en tik op Verwijderen wanneer de melding verschijnt.",
			"dialog.installing": "Idid installeren",
			"dialog.ipaErrorTitle": "Installatie mislukt",
			"dialog.ipaErrorText": "Kan dit IPA-bestand niet lezen: "
		}
	};

	var current = DEFAULT_LANGUAGE;

	function storageGet() {
		try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
	}
	function storageSet(v) {
		try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
	}
	function isSupported(code) { return Object.prototype.hasOwnProperty.call(I18N, code); }

	/* 初始化语言：本地存储 > 默认（简体中文） */
	function initLanguage() {
		var saved = storageGet();
		current = isSupported(saved) ? saved : DEFAULT_LANGUAGE;
		return current;
	}
	function getLanguage() { return current; }

	/* 取翻译文本 */
	function t(key) {
		var pack = I18N[current] || I18N[DEFAULT_LANGUAGE];
		if (pack && pack[key] != null) return pack[key];
		var d = I18N[DEFAULT_LANGUAGE];
		if (d && d[key] != null) return d[key];
		var e = I18N.en;
		return e && e[key] != null ? e[key] : key;
	}

	function languageName(code) {
		for (var i = 0; i < LANGUAGES.length; i++) {
			if (LANGUAGES[i].code === code) return LANGUAGES[i].name;
		}
		return code;
	}

	/* 应用语言到整个页面 */
	function applyLanguage(code) {
		if (!isSupported(code)) code = DEFAULT_LANGUAGE;
		current = code;
		storageSet(code);

		if (document.documentElement) document.documentElement.setAttribute("lang", code);

		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var v = t(el.getAttribute("data-i18n"));
			if (v != null) el.innerHTML = v;
		});
		document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
			el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
		});
		document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
			el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
		});

		/* 设置页里的当前语言名 */
		var cur = document.getElementById("currentLanguage");
		if (cur) cur.textContent = languageName(code);

		/* 顶部导航标题跟随当前标签 */
		var active = document.querySelector(".tab-link.tab-link-active");
		var key = active && active.getAttribute("data-tab-title-key");
		var navTitle = document.querySelector(".navbar .title");
		if (key && navTitle) navTitle.textContent = t(key);

		document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: code } }));
	}

	function setLanguage(code) {
		if (!isSupported(code)) return;
		applyLanguage(code);
	}

	/* ---------------- 语言选择器（设置页 → 语言） ---------------- */
	var picker = null;

	function openLanguagePicker() {
		var f7 = global.app;
		if (!f7 || !f7.popup) return;
		if (picker) {
			try { picker.destroy(); } catch (e) {}
			picker = null;
		}
		var html = '<div class="view"><div class="page">' +
			'<div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner">' +
			'<div class="left"><a href="#" class="link popup-close">' + t("common.back") + '</a></div>' +
			'<div class="title">' + t("settings.language") + '</div>' +
			'<div class="right"></div></div></div>' +
			'<div class="page-content">' +
			'<div class="list list-strong list-dividers inset" style="margin-top:12px"><ul id="langList"></ul></div>' +
			'</div></div></div>';

		picker = f7.popup.create({ content: html });
		var root = picker.el || document;
		var ul = root.querySelector("#langList");
		ul.innerHTML = LANGUAGES.map(function (l) {
			var mark = l.code === current
				? '<i class="f7-icons" style="font-size:20px;color:#007aff">checkmark</i>'
				: "";
			return '<li><a href="#" class="item-link item-content" data-lang="' + l.code + '">' +
				'<div class="item-inner"><div class="item-title">' + l.name + '</div>' +
				'<div class="item-after">' + mark + '</div></div></a></li>';
		}).join("");
		ul.querySelectorAll("[data-lang]").forEach(function (a) {
			a.addEventListener("click", function (e) {
				e.preventDefault();
				applyLanguage(this.getAttribute("data-lang"));
				if (picker) picker.close();
			});
		});
		picker.open();
	}

	/* ---------------- 初始化 ---------------- */
	initLanguage();
	/* i18n.js 位于页面末尾，此时界面元素已全部解析，可立即应用语言 */
	applyLanguage(current);
	/* 兜底：若脚本被移到 <head>，等 DOM 就绪后再应用一次 */
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", function () { applyLanguage(current); });
	}

	/* 导出到全局 */
	global.LANGUAGES = LANGUAGES;
	global.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
	global.t = t;
	global.getLanguage = getLanguage;
	global.setLanguage = setLanguage;
	global.applyLanguage = applyLanguage;
	global.languageName = languageName;
	global.openLanguagePicker = openLanguagePicker;
})(window);
