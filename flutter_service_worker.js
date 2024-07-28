'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ef7a21dc27bddd5c41f92ab32e8ce2eb",
"assets/AssetManifest.bin.json": "381ac05cce66fd535979842bf40ecc59",
"assets/AssetManifest.json": "b9680e4d1028ee6c21f2e1bf882ee029",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-ExtraBold.ttf": "066a37467c3af47d359507f7c7976071",
"assets/assets/fonts/Tajawal-ExtraLight.ttf": "cce1763b8395a41d57dfdf63a2e97e62",
"assets/assets/fonts/Tajawal-Light.ttf": "b6f8ed4fd29cc11d562ce730712aeaae",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/gifs/waring.gif": "018104076ade0f9e84dc437d59a5e228",
"assets/assets/icons/Beauty%2520Solution%2520LOGO%25201.svg": "d472f6f67f9acf0223f9cea128223a20",
"assets/assets/images/Beauty-Station-LOGO%25201.png": "61158d854a66c52b395639fc17858868",
"assets/assets/images/Beauty-Station-LOGO-2.png": "7277869931bafa700f6e9b099142da2e",
"assets/assets/images/Beauty-Station-LOGO.png": "1cca18678310f200f5a8ec80508126ce",
"assets/assets/jsons/lang/ar.json": "59ff55af30eaa5cb7a846c5c7e655247",
"assets/assets/jsons/lang/en.json": "b7183a602fdaeb3af9e454abfa343daa",
"assets/FontManifest.json": "acf10beef469aebe9cbc21a8e32721f0",
"assets/fonts/MaterialIcons-Regular.otf": "d53d8c11bf1aec9b9ab7cab80e1ae04d",
"assets/NOTICES": "9ef7a4d3e055b6c2ba93b4044768beaa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "f3f08cbc0d6dbb8cf667352ed7cc037c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"images/android-icon-144x144.png": "5182f8cf7f3409cdfa16b49fac3125ee",
"images/android-icon-192x192.png": "de93bd29fa86ac7bef22a2a7f8278612",
"images/android-icon-36x36.png": "58350869f665702ce50aa8f92569ea8d",
"images/android-icon-48x48.png": "b62389519c5583cc6b51a7ab4f1370d3",
"images/android-icon-72x72.png": "35c3b76f37c63471956c4d74ddde9f59",
"images/android-icon-96x96.png": "232c24bc4ef6e1b60d6ec491b7ee73ec",
"images/apple-icon-114x114.png": "f51277e685d679fefe26c78be7ffaf40",
"images/apple-icon-120x120.png": "35c407b81ffb63b14ce49b044763b2df",
"images/apple-icon-144x144.png": "5182f8cf7f3409cdfa16b49fac3125ee",
"images/apple-icon-152x152.png": "5db1f750228d1c5b2bbe05af64d093ff",
"images/apple-icon-180x180.png": "7d13765a1290deaaf410219b9e2fd263",
"images/apple-icon-57x57.png": "6680e71c47cad1a3101279ab49c494d3",
"images/apple-icon-60x60.png": "c9e742b720f5a15ff64574275c14f8a4",
"images/apple-icon-72x72.png": "35c3b76f37c63471956c4d74ddde9f59",
"images/apple-icon-76x76.png": "02a2433445b21870a044ab03a1335bf6",
"images/apple-icon-precomposed.png": "eca225431d2d6fbefec45ee0b8d79d0d",
"images/apple-icon.png": "eca225431d2d6fbefec45ee0b8d79d0d",
"images/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"images/favicon-16x16.png": "99c05970499055b2d19fbb3d82842c0a",
"images/favicon-32x32.png": "36720f58373ff7d71c2338c082666563",
"images/favicon-96x96.png": "e3cc8936dab2de25f8bc492c21e528fb",
"images/favicon.ico": "9908259a67fbe33c00eb54b7711ab390",
"images/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"images/ms-icon-144x144.png": "5182f8cf7f3409cdfa16b49fac3125ee",
"images/ms-icon-150x150.png": "b0055f4b125ee132a516ca33d0bfecdb",
"images/ms-icon-310x310.png": "78515d7e4edcf03caa44595d606d0e87",
"images/ms-icon-70x70.png": "dba2d751a276db308a7ae868a96a4672",
"index.html": "f824fb93876df5d6008a3fca00e010ac",
"/": "f824fb93876df5d6008a3fca00e010ac",
"main.dart.js": "4b940a8693f6801c677db23be3182ba6",
"manifest.json": "dd44ea7523c34316c53d65f7a834875b",
"version.json": "0d3983109f9d3a451ced967998d80d3f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
