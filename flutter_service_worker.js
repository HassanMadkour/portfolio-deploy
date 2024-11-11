'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "660abb900d7fcffcc4576f9e75dc0738",
"assets/AssetManifest.bin.json": "3e672dc4b0b2487bac8ac18388c33997",
"assets/AssetManifest.json": "2f962cc53db4ce5bf7e5c62b47fbe2d0",
"assets/assets/images/book_app/image1.png": "b465c02722faa2000b0f8254e2b33e51",
"assets/assets/images/book_app/image2.png": "72bec43226bed0674f54d428dd8b4bfa",
"assets/assets/images/book_app/image3.png": "ec0fc5e464b92f495e534d67860ce04a",
"assets/assets/images/book_app/image4.png": "bc50879b3a03b6cd08b8db5ad087f847",
"assets/assets/images/elevator_app.png": "2a8428ec9187a6ced260155dfcf90089",
"assets/assets/images/news_app/image0.png": "8ac8a0cc2351c0dc9f30f9c8c35ff6e2",
"assets/assets/images/news_app/image1.png": "d84b9cac9e37221b9e3f326310ad8673",
"assets/assets/images/news_app/image2.png": "dd1b77a8c22ea58eb72492cd0b6b2e99",
"assets/assets/images/note_app/image1.png": "492cb72ddd57a3534b615def3cdd8809",
"assets/assets/images/note_app/image2.png": "9fe2a65cdde20072b9c515a1155de9da",
"assets/assets/images/note_app/image3.png": "85e0608063caf533468a223ba5994056",
"assets/assets/images/profile.jpg": "3bf48aed28abfc07405690e10ee30ae8",
"assets/assets/images/responsive_dashboard/image1.png": "ee321135f8610c56d3fbbaddc29806de",
"assets/assets/images/responsive_dashboard/image2.png": "299b55614c86b652a01aaafc33a5e102",
"assets/assets/images/responsive_dashboard/image3.png": "df4fc2cf71363fd594c029a717618ff8",
"assets/assets/images/responsive_dashboard/image4.png": "17f12aa16c0182cbb9fb8d8fbb4957fe",
"assets/assets/images/responsive_dashboard/image5.png": "1b5bff372196a2c943ea70b9c1dc31f8",
"assets/assets/images/responsive_dashboard/image6.jpg": "7fe8fe729fb1cb60718608e0c08bb65d",
"assets/assets/images/restaurant_app.jpg": "42d56e54034f30c97bc95f694ba74f77",
"assets/assets/images/restaurant_app.png": "7475e4bbf5a6db85c1f3c7f80fa47fbe",
"assets/assets/images/weather_app/image1.png": "6d814a60691b25dee74f5798ec24cbce",
"assets/assets/images/weather_app/image2.png": "ec5fa06b1359e5c9f51a9d9db6f6da1f",
"assets/assets/images/weather_app/image3.png": "4c749010f501a07e2762fd2fafafd3ec",
"assets/assets/videos/1.mp4": "7f19ba87a58cc9b90ac4e0472c949ee5",
"assets/assets/videos/book_app/book_app.mp4": "548bbc702a36e9bc95504f7218920770",
"assets/assets/videos/news_app/news_app.mp4": "885a1088935b478839ded42247a3b250",
"assets/assets/videos/note_app/note_app.mp4": "7c163fc0b7ab175479719ff160417f8f",
"assets/assets/videos/responsive_dashboard/Responsive_app.mp4": "2e8bcfcfc1ccacbedb617844a5aa1cef",
"assets/assets/videos/weather_app/weather_app.mp4": "aed44716660aebd1a20cbbd9de1833fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a1dca7b5fd155fef6147cbedbfa12a11",
"assets/NOTICES": "274f1ee588180bda680c0718e0d6cf4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "283fbf175841d599b4c0d80e3709eb96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d547d56129e94ffbfc17a30a08e65320",
"/": "d547d56129e94ffbfc17a30a08e65320",
"main.dart.js": "a85944929b78210278564c508de221f9",
"manifest.json": "d454795ec90f470ee481df70d1276310",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
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
