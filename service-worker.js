"use strict";var precacheConfig=[["/portfolio-web/index.html","bdc434043b07b796a9c3251da1f88ab3"],["/portfolio-web/static/css/main.b48f72f7.css","a83746306b241916d079951b37667e46"],["/portfolio-web/static/js/main.d8a0f3a0.js","6a2fbd4b6994c5882e76775ba5b6588e"],["/portfolio-web/static/media/amex1.573f7b0a.png","573f7b0a509a665eacee9c5c1c4738e2"],["/portfolio-web/static/media/amex10.bcc8dc14.png","bcc8dc1401af19d5da4e93e3db5df280"],["/portfolio-web/static/media/amex5.e2396af2.png","e2396af20b976297b2abe59b14b82085"],["/portfolio-web/static/media/amex6.2eab002d.png","2eab002d5e6454bb5a7f479b9be804a3"],["/portfolio-web/static/media/amex9.ad4ed655.png","ad4ed655f64667785fdb3d0a603fc229"],["/portfolio-web/static/media/amexlogo.07bc54fe.png","07bc54fe610c57523760fccc8c13667f"],["/portfolio-web/static/media/chicago.3b0ea00d.jpg","3b0ea00d8caca79573789a877dcf9255"],["/portfolio-web/static/media/city-streets.d7c2d3aa.jpeg","d7c2d3aaf07b923ca18c6a107985b778"],["/portfolio-web/static/media/img_avatar1.cec4ccb3.png","cec4ccb30e41198c7b0a5e117c55eb2b"],["/portfolio-web/static/media/la.f2686b2a.jpg","f2686b2afdd63e515502de1b879abe0c"],["/portfolio-web/static/media/me_tamu.4b808dcb.jpg","4b808dcb3a78d942a1ff76d3ee112b6e"],["/portfolio-web/static/media/ny.0b75fe31.jpg","0b75fe318b19b6058540002261a4687a"],["/portfolio-web/static/media/quizzer_achievements.f98a80f6.png","f98a80f6ac6038de76196d662c996384"],["/portfolio-web/static/media/quizzer_achievements2.1c8e5315.png","1c8e5315cd616a10d6ab7ef8b6965da7"],["/portfolio-web/static/media/quizzer_avatar_customization.9cafe3d7.png","9cafe3d7b7e3dd93db663f9cf989e033"],["/portfolio-web/static/media/quizzer_bigo_feedback.24eee4a6.png","24eee4a6561a472889f58de257b434cb"],["/portfolio-web/static/media/quizzer_bigo_feedback2.f3d00774.png","f3d00774cbf3dbd8e8b0d0074c383f09"],["/portfolio-web/static/media/quizzer_bigo_question.29d95b83.png","29d95b834e847cb71a8c9eb581a1e9b0"],["/portfolio-web/static/media/quizzer_create_match.0173c6d8.png","0173c6d8720d6aa9ed745f6f9bc9b169"],["/portfolio-web/static/media/quizzer_home.adf9c903.png","adf9c903c7a091252b06e7cc65f82964"],["/portfolio-web/static/media/quizzer_mult_feedback.033e56c6.png","033e56c648bb20d9f03622adc4270ea9"],["/portfolio-web/static/media/quizzer_mult_question.3b1c03ba.png","3b1c03baf5759550f982fb7efab5ea74"],["/portfolio-web/static/media/quizzer_profile_screen.58763e38.png","58763e381d190b7ffedddb896e27681f"],["/portfolio-web/static/media/quizzer_profile_screen2.4d2a671e.png","4d2a671e3985b36264107ff8c518b890"],["/portfolio-web/static/media/quizzer_quiz_selection.6e535ae1.png","6e535ae1ae93d6bc61f4d126259ee6ae"],["/portfolio-web/static/media/quizzer_results.b44ea1b1.png","b44ea1b18ddc0cd86a2ad42154ae2304"],["/portfolio-web/static/media/raza_desktop_donate.cc4c6011.png","cc4c6011ccc15aed56f503cdcff1d216"],["/portfolio-web/static/media/raza_desktop_home.96cb509d.png","96cb509da4549a6a25fabc34183f114b"],["/portfolio-web/static/media/raza_desktop_shop.716f77fa.png","716f77fa14bde567e2e5da99c41e9401"],["/portfolio-web/static/media/raza_desktop_volunteer.315708fd.png","315708fd8cd10e6e86d42949e1b9d4de"],["/portfolio-web/static/media/raza_mobile0.72fe5c9f.png","72fe5c9f8079da5c3675eb7ce6042e88"],["/portfolio-web/static/media/raza_mobile1.e889037e.png","e889037e1fef7b712bab1782781ed4dd"],["/portfolio-web/static/media/raza_mobile5.c789efdc.png","c789efdc2087ebe82d71c15522df223b"],["/portfolio-web/static/media/raza_mobile7.8bcb4578.png","8bcb4578334e9c4e26985f83dcef0eeb"],["/portfolio-web/static/media/raza_mobile8.b52f0f42.png","b52f0f4232b4de5d6661f511e6598c80"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/portfolio-web/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});