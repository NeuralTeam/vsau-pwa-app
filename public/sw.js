if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>a(e,n),o={module:{uri:n},exports:c,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4580f5a692d8dec0de62dc037f303a07"},{url:"/_next/static/2cVGmeCwBWBOZ71pZQlWr/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/2cVGmeCwBWBOZ71pZQlWr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13b76428-24f8ced979318ab8.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/413-44284a4a74006de2.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/596-ba4aa5699359b7df.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/977-8ff131d0030ab925.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/app/layout-279675de133e931a.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/app/page-68cc9d0a87ff53f0.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/app/settings/page-c96c47f60ac19f2e.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/fd9d1056-d8f5e6ec3ff59217.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/main-app-61fc2d14276b59f8.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/main-c7bfa3285df6e6a7.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b50c6c3bdd235a20.js",revision:"2cVGmeCwBWBOZ71pZQlWr"},{url:"/_next/static/css/6f1122f925d5865f.css",revision:"6f1122f925d5865f"},{url:"/_next/static/css/9f0ded727da80c04.css",revision:"9f0ded727da80c04"},{url:"/_next/static/media/Overpass-Black.8ec352c4.woff",revision:"8ec352c4"},{url:"/_next/static/media/Overpass-Black.8fb9fc18.woff2",revision:"8fb9fc18"},{url:"/_next/static/media/Overpass-BlackItalic.b0f1d1af.woff",revision:"b0f1d1af"},{url:"/_next/static/media/Overpass-BlackItalic.b957715a.woff2",revision:"b957715a"},{url:"/_next/static/media/Overpass-Bold.5ae020ab.woff2",revision:"5ae020ab"},{url:"/_next/static/media/Overpass-Bold.a5d337df.woff",revision:"a5d337df"},{url:"/_next/static/media/Overpass-BoldItalic.939b74c6.woff2",revision:"939b74c6"},{url:"/_next/static/media/Overpass-BoldItalic.ad551bd8.woff",revision:"ad551bd8"},{url:"/_next/static/media/Overpass-ExtraBold.89f2ef50.woff",revision:"89f2ef50"},{url:"/_next/static/media/Overpass-ExtraBold.8bf7bc5d.woff2",revision:"8bf7bc5d"},{url:"/_next/static/media/Overpass-ExtraBoldItalic.a0b7b174.woff",revision:"a0b7b174"},{url:"/_next/static/media/Overpass-ExtraBoldItalic.c86b9949.woff2",revision:"c86b9949"},{url:"/_next/static/media/Overpass-ExtraLight.225f6af4.woff",revision:"225f6af4"},{url:"/_next/static/media/Overpass-ExtraLight.e4ee47c7.woff2",revision:"e4ee47c7"},{url:"/_next/static/media/Overpass-ExtraLightItalic.76c8112a.woff2",revision:"76c8112a"},{url:"/_next/static/media/Overpass-ExtraLightItalic.b27c5e8f.woff",revision:"b27c5e8f"},{url:"/_next/static/media/Overpass-Italic.3a9e86ea.woff2",revision:"3a9e86ea"},{url:"/_next/static/media/Overpass-Italic.d28631ad.woff",revision:"d28631ad"},{url:"/_next/static/media/Overpass-Light.48138cba.woff2",revision:"48138cba"},{url:"/_next/static/media/Overpass-Light.fb628d0a.woff",revision:"fb628d0a"},{url:"/_next/static/media/Overpass-LightItalic.32dd719d.woff2",revision:"32dd719d"},{url:"/_next/static/media/Overpass-LightItalic.e666b799.woff",revision:"e666b799"},{url:"/_next/static/media/Overpass-Medium.2ba744a0.woff2",revision:"2ba744a0"},{url:"/_next/static/media/Overpass-Medium.384fed9b.woff",revision:"384fed9b"},{url:"/_next/static/media/Overpass-SemiBold.cac6e356.woff",revision:"cac6e356"},{url:"/_next/static/media/Overpass-SemiBold.ea2513f1.woff2",revision:"ea2513f1"},{url:"/_next/static/media/Overpass-SemiBoldItalic.1b2dc867.woff2",revision:"1b2dc867"},{url:"/_next/static/media/Overpass-SemiBoldItalic.f044b35a.woff",revision:"f044b35a"},{url:"/_next/static/media/Overpass-Thin.01e17b97.woff2",revision:"01e17b97"},{url:"/_next/static/media/Overpass-Thin.5c2a63b2.woff",revision:"5c2a63b2"},{url:"/_next/static/media/Overpass-ThinItalic.a4d24a6d.woff2",revision:"a4d24a6d"},{url:"/_next/static/media/Overpass-ThinItalic.f05ec0bb.woff",revision:"f05ec0bb"},{url:"/favicon.ico",revision:"e8340e59bb1f34d05503dada68baaea7"},{url:"/logo16.png",revision:"16ac6e3d4e552cf8dace9268dea5e476"},{url:"/logo180.png",revision:"d244386349cd2f527d35e4b5ff0e0a38"},{url:"/logo192.png",revision:"92565d2b4ee86362187a5973eedb1598"},{url:"/logo256.png",revision:"9dbea1fb289a756b7e05e25a0395e523"},{url:"/logo384.png",revision:"0ac523542a1c64943998c352bc77456e"},{url:"/logo512.png",revision:"1e8be01d4190f3822ab07e89d2084f76"},{url:"/manifest.json",revision:"5eac0d95731e3f78cd2f782a103489e4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
