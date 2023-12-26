'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "541053ea7c4f4e5cd978a14b0ee9bd1d",
"assets/AssetManifest.bin.json": "8a218a9cbb9a671b6713ef1160fdc5d5",
"assets/AssetManifest.json": "2286b06fb7b14fcf7f3668bf9deffca4",
"assets/assets/fonts/Vazir-Medium-FD.ttf": "aa97dbbc3fbdc264efee758ea886a811",
"assets/assets/fonts/Vazir-Regular-FD.ttf": "4c422fdc7d0ec0fa637f119814513523",
"assets/assets/icons/2323swe.png": "7b3b2d05aab6beb5bea98512575e2a35",
"assets/assets/icons/915sddsd94.png": "ee2dc8e639e520d0584f7f44254addcf",
"assets/assets/icons/albert-olrich.jpg": "102590a6b0939dbeecbeb57a929f6d53",
"assets/assets/icons/banner.jpg": "d0a30b13f30ac97471aa2684a8d526f1",
"assets/assets/icons/calendar.svg": "87a9a5bbb5e7d388f8f325705e256a85",
"assets/assets/icons/calendar2.svg": "24f03e8062d24d34bf1c5050ea7d97a6",
"assets/assets/icons/camera-plus.png": "e3dee45d7a25b2e2210e78fd26a6d05a",
"assets/assets/icons/circle-caret-down.svg": "a35dc3a5b0fcbeb8ed4059130d380a0f",
"assets/assets/icons/employee.svg": "2cce2252462c6bf60e5988adda6dbefe",
"assets/assets/icons/file.svg": "408b81d3af29a7040bc3e3dd2cb377df",
"assets/assets/icons/fix.png": "695631fbc57c69c0afc572702ebc1bfe",
"assets/assets/icons/garanty.png": "670170cd7e7739228c147ff951d07513",
"assets/assets/icons/Google_Maps_Logo.png": "35f50b062b85073b3a262cd1f3dea0ba",
"assets/assets/icons/icon1.png": "98c167e527667bc4cd2c6f0311d01180",
"assets/assets/icons/icon2.png": "8f176daf9e06d8a24e0f06ad4053d3aa",
"assets/assets/icons/install.png": "9a38c0f3965cbfb4ed7024e5301fac0c",
"assets/assets/icons/kavir-logo3.jpg": "56b37ba64222730b852a6d05630d0ac6",
"assets/assets/icons/kossher.png": "ab2fbb800e13a31c8b897e91eb6f7402",
"assets/assets/icons/location-arrow.svg": "8642754883b260f0964ef26c5acd6e2d",
"assets/assets/icons/logo.png": "c9965ca4cb1da5882b69ad123925bc77",
"assets/assets/icons/logo2.png": "df7588df2c1d1b727fc5b828227606e2",
"assets/assets/icons/magnifying.svg": "00545d17774e47377dcd7df62e8af491",
"assets/assets/icons/mm.png": "8f72b71cbc486ce45946908210668195",
"assets/assets/icons/motor.png": "287b1b78099a44c05649950c11011848",
"assets/assets/icons/motor2.png": "03e3a060cb1df2dcb25325f7e72d2536",
"assets/assets/icons/niroomotor-logo.jpg": "bc5eb975f22ef8e004f72ee271f0cc8b",
"assets/assets/icons/niroomotor.jpg": "1fd1d57f3c0b80667a4b1ac50909dbb4",
"assets/assets/icons/offer.png": "195985363d2f5c4d363223945f8afa31",
"assets/assets/icons/palette.svg": "a686a6cea79e134fa217caf0c449428d",
"assets/assets/icons/pelak.jpg": "a6d99103cfbc656a5f268628a793b0bd",
"assets/assets/icons/profile-icon.png": "19f5b9c80b79816a53e7c2834e013894",
"assets/assets/icons/register.png": "99126e41f0887ed725af582dac8b0507",
"assets/assets/icons/rish.jpg": "216b185ec463f0dc2c26d9715331c5be",
"assets/assets/icons/service.png": "fe13b8b95185d09ef116f468892d2782",
"assets/assets/icons/start-vector.png": "3ed48d29fa51bff1e128179237b0118f",
"assets/assets/icons/type.png": "439e2a7d8da19ab45245fb55d4cabfb2",
"assets/assets/icons/user.png": "69af08dad7cc7d8fe9a214e9807a53c3",
"assets/assets/icons/vector.png": "8a4dfcf7a76e71437046d60de2e4e953",
"assets/assets/icons/vector354.png": "cce8d31cc66c1c7a4c97ebd3ce3dbc6b",
"assets/assets/icons/warning.svg": "33ec9f379cbbc4259d9be999b73aa202",
"assets/assets/icons/yamaha.png": "880e48570007b371a91e123ab65ce3c5",
"assets/FontManifest.json": "df2f2308ccb87ddbc79ffc3a6d974c31",
"assets/fonts/MaterialIcons-Regular.otf": "f86b4190fa046ddf0ce604377f0b61ed",
"assets/NOTICES": "6276ff9ac1a061edea1c4e397dcd20a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/day_night_time_picker/assets/moon.png": "71137650ab728a466a50fa4fa78fb2b9",
"assets/packages/day_night_time_picker/assets/sun.png": "5fd1657bcb73ce5faafde4183b3dab22",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c3a335e3dbd03ac574ed6b4f4be277c4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "115a2abc34db4f106302d86706e1034f",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "0d5012adc985fe1d45a41cf4ecd02ffa",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "c21ae7a8d1c48bd9615ea67a20e6992b",
"icons/Icon-512.png": "c8596ec9d1b6c08d9786cec33bbcedaa",
"icons/Icon-maskable-192.png": "c21ae7a8d1c48bd9615ea67a20e6992b",
"icons/Icon-maskable-512.png": "c8596ec9d1b6c08d9786cec33bbcedaa",
"index.html": "cc07c413f7c6d325c0909e56bd9d4d5a",
"/": "cc07c413f7c6d325c0909e56bd9d4d5a",
"main.dart.js": "0acfd174083911f3b8f2d9b7822ac604",
"manifest.json": "55d0941ca73ed6adf60eec4070b7b53c",
"version.json": "89319ff4235a3c8ad5245920dee485e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
