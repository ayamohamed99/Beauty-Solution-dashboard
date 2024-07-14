'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "efea0feb61e66be3636b75a8e8045cb3",
"assets/AssetManifest.bin.json": "4303fac3afad8ed1072fd36855687b92",
"assets/AssetManifest.json": "895cb2857dfb9ad96d55420ec73c2fb9",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-ExtraBold.ttf": "066a37467c3af47d359507f7c7976071",
"assets/assets/fonts/Tajawal-ExtraLight.ttf": "cce1763b8395a41d57dfdf63a2e97e62",
"assets/assets/fonts/Tajawal-Light.ttf": "b6f8ed4fd29cc11d562ce730712aeaae",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/gifs/waring.gif": "018104076ade0f9e84dc437d59a5e228",
"assets/assets/icons/abo_fesl.svg": "4051508f782c4ef79be5c22a04b16ac9",
"assets/assets/icons/add.svg": "b40fd49d1545f8a90532f23f2fdda104",
"assets/assets/icons/add_insurance.svg": "b98e06cbc6fd625fbfdef55588d2a2f6",
"assets/assets/icons/arrow_down.svg": "4280893069434f76ff3ba6014cedfecb",
"assets/assets/icons/arrow_up.svg": "5151a5d671201a4aaca7abb64063fe85",
"assets/assets/icons/Avtar.svg": "03800aa8c05a36751eda0b2e903e6b35",
"assets/assets/icons/back_arow_right.svg": "30664b6a3011b92f2eb02f5e6517920c",
"assets/assets/icons/bi_camera-fill.svg": "5fd9ad9d68190534be3ec4c688c82fa9",
"assets/assets/icons/calender.svg": "c25322114c47707c1bf753b04fcb6af6",
"assets/assets/icons/car_insurance.svg": "aa19d0c56f4a6c09ed1d0f445f808447",
"assets/assets/icons/checkIcon.svg": "3f5a23c605cdd32c58eca0c70419a450",
"assets/assets/icons/currency.svg": "5fedf9b7923f93a92c09cfad3a3a45b1",
"assets/assets/icons/download-done.svg": "e682b86d2d836205934556c8e6d9c17b",
"assets/assets/icons/download.svg": "ebb1f287a99604ab055bc122a57534ee",
"assets/assets/icons/download_icon_black.svg": "a96649bab10af4eef44f2d7aa629cb82",
"assets/assets/icons/dropDown-Down.svg": "4280893069434f76ff3ba6014cedfecb",
"assets/assets/icons/dropdown_arrow.svg": "4280893069434f76ff3ba6014cedfecb",
"assets/assets/icons/empty_star.svg": "12e8843190ece57b88acb867dabb2612",
"assets/assets/icons/error.svg": "11a81023f1882d3ca20cede66264c2a5",
"assets/assets/icons/family.svg": "69b5668f111acdde679b0f30bc0817ae",
"assets/assets/icons/family_insurance.svg": "c2e119a6b47f86e9ca890ee4afa8c367",
"assets/assets/icons/fav.svg": "948fa98b84cbf94f316af3c1784815e8",
"assets/assets/icons/filter_price.svg": "b5e06a5901f76886e7aa6b36a38b6307",
"assets/assets/icons/Full_star.svg": "3705f078060b1a0b8031c173855eeaea",
"assets/assets/icons/healthcare.svg": "6d06c60aa1e956c8d0cd100eb3d3039d",
"assets/assets/icons/healthcare_insurance.svg": "6d06c60aa1e956c8d0cd100eb3d3039d",
"assets/assets/icons/home.svg": "9ffadc51daaf2d82a6b9158cd1643ee0",
"assets/assets/icons/logo.svg": "54c129721c1deb6f2639e8b156413d5b",
"assets/assets/icons/notifications.svg": "e1d5105c18ae809f619c9cb663adf50c",
"assets/assets/icons/plus.svg": "cf3309622b3fba4f86469509cda64795",
"assets/assets/icons/profile.svg": "6d000c3f3c1b10d6ac49698b621252c7",
"assets/assets/icons/profile_gray.svg": "271c46dfcf120e8771b8632ea125162a",
"assets/assets/icons/protection.svg": "fd5af167fdecc922417b42cc4a5aab96",
"assets/assets/icons/rightArrow.svg": "dcab58c6b95505f23c0d975290dac440",
"assets/assets/icons/search.svg": "8bf5f9da562a410463fe98032b031080",
"assets/assets/icons/searchIcon.svg": "b84d565110b62ebee92d721339f715ff",
"assets/assets/icons/service.svg": "4e327d839546a53a1a76bf639cb9747b",
"assets/assets/icons/shareIcon.svg": "ee86682911e59e8a5881518793568d99",
"assets/assets/icons/solar_logout-2-bold.svg": "552f7637c5cc7cd334f930e47bc54a33",
"assets/assets/icons/swap_arrow.svg": "38f6465a222f15939f70645be6eaedb9",
"assets/assets/icons/translate.svg": "d10b59024fa5e42a885c84233a12525d",
"assets/assets/icons/travelinsurance.svg": "eca31b3c4812ae4d3c4b3c830d169ca5",
"assets/assets/icons/travel_insurance.svg": "e0ee00fb6a5d18a358d54a1656b1ff31",
"assets/assets/icons/unFav.svg": "5b9f716f3325223a342a5cb36dff2dda",
"assets/assets/icons/Vector.svg": "618598bd25426d4d4d1d663ccd60fe16",
"assets/assets/icons/videoSVG.svg": "d26243af0580779d59e83fdc0cc6eead",
"assets/assets/images/app_bar_bg_down.png": "55ca8b56f127e1e3f30783f3334e07c7",
"assets/assets/images/app_bar_bg_up.png": "210520ea819e2779935a7e5463029249",
"assets/assets/images/avtar.png": "336a25e9ab907a90ec5cf591ab446359",
"assets/assets/images/backgrond.png": "43dd2d49bb07992d38b1b8c372e94d5c",
"assets/assets/images/Bill.png": "4e6a810aab0c6dbae4958142ae0d59e6",
"assets/assets/images/billsBlack.png": "55391a0b3b1a8aea1f4ad324a74d5c89",
"assets/assets/images/BMW-Logo.png": "e254a87f6a0c56c05774ec1f54f1f0fe",
"assets/assets/images/camera.png": "b5b442d01a10a49d2c8cd191b1c90464",
"assets/assets/images/car.png": "057c08cb8caaae4fe0535a407becd45c",
"assets/assets/images/Cars.png": "99af54d3dcfb53d046f474b3eb7b5ae2",
"assets/assets/images/car_card.png": "902901bac550cc7d1033dc0708b26193",
"assets/assets/images/Combo%2520Chart.png": "a533849bba211a07d01bc63929dbbd28",
"assets/assets/images/cutBox.png": "7dacdff2483737926fd50c606f270fca",
"assets/assets/images/defualt_img.png": "986f86307f799b37d47f5e84732f0435",
"assets/assets/images/Documents.png": "e312ed42a2be5dbbc6e8b0bdfdfff218",
"assets/assets/images/expireDoc.png": "297854186b96bba59b80c86fb9eb9b54",
"assets/assets/images/family.png": "d23dbe15b33880b8ab36b39ada199bf6",
"assets/assets/images/gradienYellow.png": "c250eaf9cfd6c6c783a37412a6a257fb",
"assets/assets/images/Headset.png": "da468d4831d223f3bc57fe700e20d5a8",
"assets/assets/images/healthcare.png": "e339db1d15f9794f72c51da2f4d662ac",
"assets/assets/images/login_bg.png": "df6f3c135a8851acb4c042af4d5c0057",
"assets/assets/images/logo.png": "998fbdb7b15a0c92fa923b7c22abcda9",
"assets/assets/images/More%2520Info.png": "5fe90b4a37d0c3ff68e48f6e991bbeec",
"assets/assets/images/offerImage.png": "c866d36a154d75821565ceb519e9b2ac",
"assets/assets/images/payments_methods.png": "4e65fc44212e21a3facfea1451b9ee1d",
"assets/assets/images/price_offer.png": "b19782147a618a4bbd8c29b9cef3a1ec",
"assets/assets/images/Promocodes.png": "2f3104e611dbc35c7817bd8ab47eb400",
"assets/assets/images/rakeezBannar.png": "d8b662ec3485821da6ff82bde6e5bd48",
"assets/assets/images/rlogo.png": "4db68f2c7ed995994fd2220559a50a18",
"assets/assets/images/travel-insurance.png": "a106662731571e6a6733e37732f870d3",
"assets/assets/images/validDoc.png": "5dc58da88cc040835e7bdeeee3766ac5",
"assets/assets/images/whyrakeez.png": "832725bdd4241aa819535acc13cd65b9",
"assets/assets/images/widgetimage.png": "32ec846ad35d90c7f285c6f0f7cc43c2",
"assets/assets/jsons/lang/ar.json": "59ff55af30eaa5cb7a846c5c7e655247",
"assets/assets/jsons/lang/en.json": "b7183a602fdaeb3af9e454abfa343daa",
"assets/assets/jsons/lottifiles/notification.json": "7bc7ad3096f82ecd88849e92fb041a65",
"assets/assets/jsons/lottifiles/serviceCommingSoon.json": "e186d5a45bcae79b012b9cdfe59998a2",
"assets/assets/jsons/lottifiles/splash_lottie.json": "c385cadbc192968a982f780c46b6db1d",
"assets/assets/svgs/logo.svg": "2e1c937375c58e1eb64a804852c7e11f",
"assets/assets/svgs/logo_bg.svg": "dce12f5a177273bd4c217fca151b4c98",
"assets/FontManifest.json": "acf10beef469aebe9cbc21a8e32721f0",
"assets/fonts/MaterialIcons-Regular.otf": "c1a44b71f653257795aedbde7befc521",
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
"flutter_bootstrap.js": "27f9a240e468191a61ce27f19fa5c879",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d780a9374577b3631859be4757d88305",
"/": "d780a9374577b3631859be4757d88305",
"main.dart.js": "cf75cae1cce4000d017d670c6e143c53",
"manifest.json": "2e6301ae9ba28fc0d4528ab0abd828ce",
"version.json": "d5cd40fe24f8bbb475e23e6b9befe5c9"};
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
