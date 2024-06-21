"use strict";(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[724],{3724:(e,o,n)=>{n.d(o,{default:()=>V});const r={back:"返回",next:"下一步",enable:"啟用",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"日誌",reverseProxy:"反向 Proxy",reverseProxyLower:"反向 Proxy",restrict:"限制",path:"路徑"};var t=n(6101);const i={title:`${r.nginx}Config`,description:`設定高效能、安全、穩定的 ${r.nginx} 伺服器最簡單的方法。`,singleColumnMode:"單欄模式",splitColumnMode:"雙欄模式",perWebsiteConfig:"網站設定",addSite:"新增網站",globalConfig:"全域設定",setup:"使用設定",configFiles:"設定檔",copied:"已複製"},a={downloadConfig:"下載配置",copyBase64:"複製 Base64"},l={backToTop:"返回頁首",thisToolIs:"本工具",openSourceOnGitHub:"於 GitHub 上開源",underThe:"並採用",mit:"MIT",license:"授權條款！",weWelcomeFeedbackAndContributions:"我們歡迎您提供回饋和貢獻。",originallyCreatedBy:"初始作者",balintSzekeres:"Bálint Szekeres",maintainedBy:"維護者",digitalOcean:"DigitalOcean"},s={enableEncryptedSslConnection:`${r.enable}加密的 ${r.ssl} 連線`,http2:`${r.http}/2`,enableHttp2Connections:`${r.enable} ${r.http}/2 連線`,http3:`${r.http}/3`,enableHttp3Connections:`${r.enable} ${r.http}/3 連線`,forceHttps:`強制使用 ${r.https}`,hsts:"HSTS",enableStrictTransportSecurity:`${r.enable} HSTS（強制安全傳輸），需要 HTTPS 連線`,enableIncludeSubDomains:`${r.enable} includeSubDomains 指令，所有子網域須啟用 HTTPS 連線`,enablePreload:`${r.enable} preload 指令，強制瀏覽器使用 HTTPS 連線`,certificationType:"憑證類型",customCertificate:"自訂憑證",letsEncryptEmail:`${r.letsEncrypt} 電子郵件地址`,http3IsANonStandardModule:"HTTP/3 並不是標準的 NGINX 模組，請查閱 ",http3NginxQuicReadme:"NGINX QUIC 說明",http3OrThe:" 或者 ",http3CloudflareQuicheProject:"Cloudflare quiche 專案",http3ForBuildingNginxWithHttp3:"以了解如何建置支援 HTTP/3 的 NGINX !"},p={byDomain:"在此網域",enableForThisDomain:`為此網域${r.enable}`,arguments:"arguments",level:"logging level",forRedirects:"for redirects"},c={phpIsDisabled:`${r.php} 已停用。`,phpCannotBeEnabledWithReverseProxy:`${r.php} 無法與${r.reverseProxy} 同時啟用。`,phpCannotBeEnabledWithPython:`${r.php} 無法與 ${r.python} 同時啟用。`,enablePhp:`${r.enable} ${r.php}`,wordPressRules:`${r.wordPress} 規則`,enableWordPressRules:`${r.enable} ${r.wordPress} 專屬規則`,drupalRules:`${r.drupal} 規則`,enableDrupalRules:`${r.enable} ${r.drupal} 專屬規則`,magentoRules:`${r.magento} 規則`,enableMagentoRules:`${r.enable} ${r.magento} 專屬規則`,joomlaRules:`${r.joomla} 規則`,enableJoomlaRules:`${r.enable} ${r.joomla} 專屬規則`,phpServer:`${r.php} 伺服器`,phpBackupServer:`${r.php} 備份伺服器`,tcp:"TCP",hhvmSocket:"HHVM 通訊端",php70Socket:"7.0 通訊端",php71Socket:"7.1 通訊端",php72Socket:"7.2 通訊端",php73Socket:"7.3 通訊端",php74Socket:"7.4 通訊端",php80Socket:"8.0 通訊端",php81Socket:"8.1 通訊端",php82Socket:"8.2 通訊端",phpSocket:"PHP 通訊端",custom:"自訂",disabled:"停用"},d={presets:"預設",itLooksLikeYouCustomisedTheConfig:"您似乎調整過此網域的設定。選擇新的預設可能會重置或更改一些您自訂的設定。",frontend:"前端",nodeJs:"Node.js",singlePageApplication:"SPA"},g={pythonIsDisabled:`${r.python} 已停用。`,pythonCannotBeEnabledWithReverseProxy:`${r.python} 無法與${r.reverseProxy} 同時啟用。`,pythonCannotBeEnabledWithPhp:`${r.python} 無法與 ${r.php} 同時啟用。`,enablePython:`${r.enable} ${r.python}`,djangoRules:`${r.django} 規則`,enableDjangoRules:`${r.enable} ${r.django} 專屬規則`},u={reverseProxyIsDisabled:`${r.reverseProxy} 已停用。`,reverseProxyCannotBeEnabledWithPhp:`${r.reverseProxy} 在啟用 ${r.php} 時無法啟用。`,reverseProxyCannotBeEnabledWithPython:`${r.reverseProxy} 在啟用 ${r.python} 時無法啟用。`,enableReverseProxy:`${r.enable}${r.reverseProxyLower}`,proxyHostHeader:"Proxy Host header"},b={fallbackRouting:"後援路由",fallbackRoutingPhpPath:`後援路由 ${r.php} 路徑`,legacyPhpRouting:`傳統 ${r.php} 路由`,enableLegacyRouting:`${r.enable}傳統路由`,routing:"路由設定"},h={domain:"網域",documentRoot:"檔案根目錄",oneOrMoreOtherDomainsAreAlsoNamed:"發現了重複的網域",thisWillCauseIssuesWithConfigGeneration:"產生設定時將發生錯誤。",wwwSubdomain:"www 子網域",cdnSubdomain:"CDN 子網域",redirectSubdomains:"重新導向子網域",server:"服務",listen:"監聽"},$={disableForThisDomain:"在此網站上停用",responseCode:"響應程式碼"},m="洋蔥",y={onion:m,onionLocation:`${m}位置`,provideAnOnionLocationToSetOnionLocationHeader:"提供一個洋蔥位址，來為您的網站設定 Onion-Location 標頭。",letsVisitorsKnownOnionServicesIsAvailable:"這可以讓訪客知道您的網站有可用於 Tor 瀏覽器的洋蔥服務版本。",learnMoreAboutOnionServices:"瞭解有關洋蔥服務的更多資訊",onionLocationExpectedToEndWithOnion:"洋蔥位址通常以 .onion 結尾。"},C={https:s,logging:p,php:c,presets:d,python:g,reverseProxy:u,routing:b,server:h,restrict:$,onion:y},f="Mozilla",v="IPv4",S="IPv6",P={sslProfile:`${r.ssl} 設定檔`,httpsMustBeEnabledOnOneSite:`必須在至少一個網站上啟用 ${r.https} 才能調整全域 ${r.https} 設定。`,portReuse:"連接埠複用",enableReuseOfPort:`${r.enable}連接埠複用來為每個 worker 產生監聽通訊端`,ocspDnsResolvers:"OCSP DNS 解析器",cloudflareResolver:"Cloudflare 解析器",googlePublicDns:"Google 公共 DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`${r.letsEncrypt} Web 根目錄`,letsEncryptCertRoot:`${r.letsEncrypt} 憑證目錄`,mozillaModern:`${f} Modern`,mozillaIntermediate:`${f} Intermediate`,mozillaOld:`${f} Old`,ipv4Only:`僅 ${v}`,ipv6Only:`僅 ${S}`,ipv4AndIpv6:`${v} & ${S}`},x={enableFileNotFoundErrorLogging:`${r.enable}｢找不到檔案｣錯誤日誌：`,logformat:"log_format",level:"logging level",enableCloudflare:"將 Cloudflare 請求標頭加入預設日誌格式",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},T={nginxConfigDirectory:`${r.nginx} 設定目錄`,mb:"MB"},D={disableHtmlCaching:"Disable HTML caching",enableDisableHtmlCaching:"disable HTML caching",gzipCompression:"Gzip 壓縮",enableGzipCompression:`${r.enable} Gzip 壓縮`,brotliCompression:"Brotli 壓縮",enableBrotliCompression:`${r.enable} brotli 壓縮`,brotliIsANonStandardModule:"Brotli 不是標準的 NGINX 模組，請參考 ",brotliGoogleNgxBrotliProject:"Google 的 ngx_brotli 專案",brotliForBuildingNginxWithBrotli:" 來了解如何建置支援 Brotli 的 NGINX!",expirationForAssets:"資源有效期",expirationForMedia:"媒體資源有效期",expirationForSvgs:"SVG 有效期",expirationForFonts:"字體有效期",performance:"效能"},k={pythonServer:`${r.python} 服務`,pythonMustBeEnabledOnOneSite:`必須在至少一個網站上啟用 ${r.python} 才能調整全域 ${r.python} 設定。`},w="傳統 X-Forwarded-* 標頭",N={reverseProxyMustBeEnabledOnOneSite:`必須在至少一個網站上啟用${r.reverseProxy} 才能調整全域${r.reverseProxy} 設定。`,seconds:"秒",passOn:`轉發${w}`,remove:`主動刪除${w}`},I={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`使用 ${r.wordPress} 時，通常需在 CSP 中加入 <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code>，以使管理面板正常運作。`,security:"安全性"},O={modularizedStructure:"模組化結構",enableModularizedConfigFiles:`${r.enable}模組化的設定檔案`,symlinkVhost:"符號連結 vhost",enableSymLinksFrom:`${r.enable}符號連結`,to:"到",shareConfiguration:"分享設定",resetConfiguration:"重置設定",resetGlobalConfig:"重置全域設定",resetAllDomains:"重置所有網域",removeAllDomains:"移除所有網域",resetAllDomainsConfig:"重置所有網域",resetDomainConfig:"重置網域設定",removeDomain:"移除網域",yesImSure:"是，我確定",noCancel:"取消",tools:"工具",resetGlobalConfigBody:"您確定要重置全域設定中的所有設定嗎？",resetAllDomainsConfigBody:"您確定要重置所有網域的設定嗎？",removeAllDomainsBody:"您確定要移除所有網域的設定嗎？",areYouSureYouWantToResetAllConfigurationOptionsForThe:"您確定要重置",domain:"網域的所有設定嗎？",areYouSureYouWantToRemoveThe:"您確定要移除",domainConfiguration:"的網域設定嗎？"},F="Docker",R="Dockerfile",B={docker:F,dockerfile:R,dockerCompose:`${F} Compose`,applyDockerTweaks:`套用 ${F} 調校`,applyDockerTweaksForNginx:`套用在 ${F} 中執行 ${r.nginx} 所需的設定調校`,applyDockerTweaksExplainer:`將 ${r.nginx} 使用者設為 <code class="slim">nginx</code>，將 pid 設為<code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`產生 ${R} 以使用 ${F} 來執行 ${r.nginx}`,includeDockerCompose:`產生 docker-compose 以使用 docker-compose 來執行 ${r.nginx}`},E={https:P,logging:x,nginx:T,performance:D,python:k,reverseProxy:N,security:I,tools:O,docker:B},H="Certbot",A={commentOutSslDirectivesInConfiguration:`註解掉設定中的 ${r.ssl} 相關指令：`,sslOffDeprecationWarning:`This command will add a temporary <code class="slim">ssl off</code> directive to ensure that ${r.ssl} directives are not active. This may cause ${r.nginx} to emit a warning, which is safe to ignore. The directive will be removed once ${H} is configured.`,reloadYourNginxServer:`重新載入您的 ${r.nginx} 伺服器：`,obtainSslCertificatesFromLetsEncrypt:`使用 ${H} 從 ${r.letsEncrypt} 取得 ${r.ssl} 憑證：`,uncommentSslDirectivesInConfiguration:`在設定中取消註解 ${r.ssl} 相關指令：`,configureCertbotToReloadNginxOnCertificateRenewal:`設定 ${H}，當 ${r.nginx} 成功更新憑證時重新載入：`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${H} 無須設定。`,certbot:H},L={downloadTheGeneratedConfig:"<b>下載</b>產生的設定：",andUploadItToYourServers:"然後<b>上傳</b>到您的伺服器的",directory:"目錄。",or:"或",copyBase64StringOfCompressedConfig:"複製壓縮過的設定的 base64 字串",pasteItInYourServersCommandLineAndExecute:"，將其貼到伺服器的命令列並執行。",navigateToYourNginxConfigurationDirectoryOnYourServer:`前往您的 ${r.nginx} 伺服器的<b>設定資料夾</b>：`,createABackupOfYourCurrentNginxConfiguration:`建立${r.nginx} 目前設定的<b>備份</b>：`,extractTheNewCompressedConfigurationArchiveUsingTar:"使用 tar <b>解壓縮</b>新的設定：",download:"下載"},G={letsGoLive:"好戲上場！",reloadNginxToLoadInYourNewConfiguration:`重新載入 ${r.nginx} 以套用新設定：`,goLive:"上線！"},M={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"在您的伺服器上執行此命令來產生<b>迪菲-赫爾曼密鑰</b>：",createACommonAcmeChallengeDirectoryForLetsEncrypt:`建立一個通用的 <b>ACME-challenge</b> 目錄（用於 <b>${r.letsEncrypt}</b>)：`,noAdditionalStepsAreNeededToSetUpSslForNginx:`您的 ${r.nginx} 設定已完成 ${r.ssl} 設定，無須任何操作。`,sslInit:`${r.ssl} 初始化`},W={certbot:A,download:L,goLive:G,ssl:M},Y={lookingForAPlaceToDeploy:"👋 在尋找部署新設定的地方？",tryOutDigitalOceansDroplet:"試試 DigitalOcean 推出的 LEMP Droplet，適用於 NGINX。"},j={wantToContributeChanges:"👋 想要請求新功能，貢獻更動，或將本工具翻譯成新的語言嗎？",getInvolvedOnGitHub:"在 GitHub 上共襄盛舉"},z={droplet:Y,contribute:j},X={app:i,setup:a,footer:l,domainSections:C,globalSections:E,setupSections:W,callouts:z},V={common:r,languages:t["default"],templates:X}}}]);