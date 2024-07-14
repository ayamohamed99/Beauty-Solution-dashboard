'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7639cee88a00d961668c9a9d447b6985",
"version.json": "d5cd40fe24f8bbb475e23e6b9befe5c9",
"index.html": "f3b6c6a962436268ddac56da43922991",
"/": "f3b6c6a962436268ddac56da43922991",
"main.dart.js": "ba47102ca2f876ea0666cb5fc10d764b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6f553bd345b29af1c10905d59bddcd37",
"assets/AssetManifest.json": "674efe0763d7027d0b88e82040704193",
"assets/NOTICES": "e8a11dc0a64c4f3ec15fa59303c5b567",
"assets/FontManifest.json": "acf10beef469aebe9cbc21a8e32721f0",
"assets/AssetManifest.bin.json": "8e88d048cafaec0baf5656e777ad7c70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6ad35ab6008f57369830a28b042fc5c3",
"assets/fonts/MaterialIcons-Regular.otf": "c1a44b71f653257795aedbde7befc521",
"assets/assets/jsons/lottifiles/serviceCommingSoon.json": "e186d5a45bcae79b012b9cdfe59998a2",
"assets/assets/jsons/lottifiles/notification.json": "7bc7ad3096f82ecd88849e92fb041a65",
"assets/assets/jsons/lottifiles/splash_lottie.json": "c385cadbc192968a982f780c46b6db1d",
"assets/assets/jsons/lang/en.json": "0acdc467a55285f7f0fededd0c4a7c09",
"assets/assets/jsons/lang/ar.json": "55d08ae0ef174e06cfa54ea913f2f3b6",
"assets/assets/images/Cars.png": "99af54d3dcfb53d046f474b3eb7b5ae2",
"assets/assets/images/travel-insurance.png": "a106662731571e6a6733e37732f870d3",
"assets/assets/images/app_bar_bg_down.png": "55ca8b56f127e1e3f30783f3334e07c7",
"assets/assets/images/login_bg.png": "df6f3c135a8851acb4c042af4d5c0057",
"assets/assets/images/validDoc.png": "5dc58da88cc040835e7bdeeee3766ac5",
"assets/assets/images/whyrakeez.png": "832725bdd4241aa819535acc13cd65b9",
"assets/assets/images/app_bar_bg_up.png": "210520ea819e2779935a7e5463029249",
"assets/assets/images/Headset.png": "da468d4831d223f3bc57fe700e20d5a8",
"assets/assets/images/backgrond.png": "43dd2d49bb07992d38b1b8c372e94d5c",
"assets/assets/images/healthcare.png": "e339db1d15f9794f72c51da2f4d662ac",
"assets/assets/images/family.png": "d23dbe15b33880b8ab36b39ada199bf6",
"assets/assets/images/BMW-Logo.png": "e254a87f6a0c56c05774ec1f54f1f0fe",
"assets/assets/images/cutBox.png": "7dacdff2483737926fd50c606f270fca",
"assets/assets/images/Promocodes.png": "2f3104e611dbc35c7817bd8ab47eb400",
"assets/assets/images/payments_methods.png": "4e65fc44212e21a3facfea1451b9ee1d",
"assets/assets/images/defualt_img.png": "986f86307f799b37d47f5e84732f0435",
"assets/assets/images/Combo%2520Chart.png": "a533849bba211a07d01bc63929dbbd28",
"assets/assets/images/car_card.png": "902901bac550cc7d1033dc0708b26193",
"assets/assets/images/expireDoc.png": "297854186b96bba59b80c86fb9eb9b54",
"assets/assets/images/offerImage.png": "c866d36a154d75821565ceb519e9b2ac",
"assets/assets/images/price_offer.png": "b19782147a618a4bbd8c29b9cef3a1ec",
"assets/assets/images/Documents.png": "e312ed42a2be5dbbc6e8b0bdfdfff218",
"assets/assets/images/gradienYellow.png": "c250eaf9cfd6c6c783a37412a6a257fb",
"assets/assets/images/logo.png": "998fbdb7b15a0c92fa923b7c22abcda9",
"assets/assets/images/car.png": "057c08cb8caaae4fe0535a407becd45c",
"assets/assets/images/avtar.png": "336a25e9ab907a90ec5cf591ab446359",
"assets/assets/images/More%2520Info.png": "5fe90b4a37d0c3ff68e48f6e991bbeec",
"assets/assets/images/rlogo.png": "4db68f2c7ed995994fd2220559a50a18",
"assets/assets/images/rakeezBannar.png": "d8b662ec3485821da6ff82bde6e5bd48",
"assets/assets/images/billsBlack.png": "55391a0b3b1a8aea1f4ad324a74d5c89",
"assets/assets/images/camera.png": "b5b442d01a10a49d2c8cd191b1c90464",
"assets/assets/images/Bill.png": "4e6a810aab0c6dbae4958142ae0d59e6",
"assets/assets/images/widgetimage.png": "32ec846ad35d90c7f285c6f0f7cc43c2",
"assets/assets/gifs/waring.gif": "018104076ade0f9e84dc437d59a5e228",
"assets/assets/svgs/logo_bg.svg": "bf5145b321c9489d23c70d5a03a2afc6",
"assets/assets/svgs/logo.svg": "60f8bbf06293195d72a1a9714638c1f5",
"assets/assets/icons/download_icon_black.svg": "3059fab408c70b23350d3b6bc1ef2e4a",
"assets/assets/icons/search.svg": "216f7e37ea96a1a3b645389caa961273",
"assets/assets/icons/rightArrow.svg": "cbed8edc849f73fd5eb5895eeedda643",
"assets/assets/icons/swap_arrow.svg": "261f1a5fdc8d88f5bd384274db72fc8d",
"assets/assets/icons/translate.svg": "3502dd11f83129b78b0cb1430c5e1ad5",
"assets/assets/icons/home.svg": "ea3a6dc1be66be976e5d8f585653a9bf",
"assets/assets/icons/healthcare.svg": "3adf69478fe75445ad2644e433e402d7",
"assets/assets/icons/family.svg": "4734161bb50bab367e0ac01c6a9c2156",
"assets/assets/icons/healthcare_insurance.svg": "3adf69478fe75445ad2644e433e402d7",
"assets/assets/icons/unFav.svg": "fe4c688c509d3db43cb1db34607963e7",
"assets/assets/icons/add_insurance.svg": "a6acd4c94ec8b9f07005a80187cc3dd0",
"assets/assets/icons/Vector.svg": "9b412c6938e5aaf60dda87bb8208f2cb",
"assets/assets/icons/filter_price.svg": "b5bb81f016086068820d6ea76831f42d",
"assets/assets/icons/service.svg": "7e07086034bc604386f0365f423ab6e4",
"assets/assets/icons/abo_fesl.svg": "dad3702070450717cceb1990fa6ccacb",
"assets/assets/icons/shareIcon.svg": "ee86682911e59e8a5881518793568d99",
"assets/assets/icons/calender.svg": "a4e489439f345aaaa0049a27ed20d215",
"assets/assets/icons/travel_insurance.svg": "dd7c77da9e6b483535913804e02967ec",
"assets/assets/icons/searchIcon.svg": "ee86682911e59e8a5881518793568d99",
"assets/assets/icons/download.svg": "ebb1f287a99604ab055bc122a57534ee",
"assets/assets/icons/arrow_up.svg": "8a947c0373e6d5c3d629e20254210f69",
"assets/assets/icons/download-done.svg": "e682b86d2d836205934556c8e6d9c17b",
"assets/assets/icons/bi_camera-fill.svg": "d524b071ed0cf4950d6d27831fe0aaf3",
"assets/assets/icons/Full_star.svg": "2f9bd3553fc40d8de36f4b60da60e317",
"assets/assets/icons/profile_gray.svg": "d3aa798b4ab3d0bf2ac517650305c669",
"assets/assets/icons/plus.svg": "c25cca52ae15b59b006207a2f3dabc2e",
"assets/assets/icons/dropDown-Down.svg": "42ba4f3c4c896dbeebe40751de3b2956",
"assets/assets/icons/add.svg": "c26ad381ea9269d3e772f38c53169541",
"assets/assets/icons/empty_star.svg": "b26146e9c7b2bb4a3b40b7677bc222e4",
"assets/assets/icons/arrow_down.svg": "42ba4f3c4c896dbeebe40751de3b2956",
"assets/assets/icons/fav.svg": "97e964fac04392a620ca45ba34f663d5",
"assets/assets/icons/back_arow_right.svg": "096293a70523be9f332651f87f4ee409",
"assets/assets/icons/car_insurance.svg": "d36fddef23ff24388993e915f0ee72fc",
"assets/assets/icons/Avtar.svg": "4a4715998752aaf8fb4e69d6f968a4e5",
"assets/assets/icons/checkIcon.svg": "e70f8fb49ca9de3c47d4db2583e97540",
"assets/assets/icons/protection.svg": "71ef9c7a4f5c950ea2efeb1473aa0443",
"assets/assets/icons/currency.svg": "f203024b7ed13921f45a04f7ebfd84a5",
"assets/assets/icons/dropdown_arrow.svg": "42ba4f3c4c896dbeebe40751de3b2956",
"assets/assets/icons/profile.svg": "05ce06d2f8fee06af8ec20ced7004291",
"assets/assets/icons/solar_logout-2-bold.svg": "552f7637c5cc7cd334f930e47bc54a33",
"assets/assets/icons/notifications.svg": "1b23359cdf2b79255be57e7413a69353",
"assets/assets/icons/error.svg": "715a1b9671e3bcc0ce42c742532ca64e",
"assets/assets/icons/logo.svg": "4ef528b128072ae6a712840e982212c5",
"assets/assets/icons/travelinsurance.svg": "c9f0a614f0e1e6e815c8c6964510bea2",
"assets/assets/icons/family_insurance.svg": "648068a778a7583c3aaaa4ba122b4334",
"assets/assets/icons/videoSVG.svg": "803c44dbf9f33a9a7313177a029a508f",
"assets/assets/fonts/Tajawal-ExtraBold.ttf": "066a37467c3af47d359507f7c7976071",
"assets/assets/fonts/Tajawal-Light.ttf": "b6f8ed4fd29cc11d562ce730712aeaae",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-ExtraLight.ttf": "cce1763b8395a41d57dfdf63a2e97e62",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
