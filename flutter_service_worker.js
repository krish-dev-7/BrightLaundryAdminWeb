'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "620d30ec2631a19d4b264c8c5f1ca75e",
".git/config": "66defe22fa9bee1a89c61a08de7801f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3e320dc8470fb2464c69ec0a4f23581",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f05b1c23475c86dc911aee7d229a6fa",
".git/logs/refs/heads/master": "8f05b1c23475c86dc911aee7d229a6fa",
".git/logs/refs/remotes/origin/master": "3a9bf4b2c7b2b37832af24468fbd4014",
".git/objects/02/6ef41ed6a20696e1ff0f3bdc78f8adf20b5a33": "71cee23a1e1862405492d6669c499e54",
".git/objects/03/1364f3696cb67ab8baba36e4874f941e8be090": "72b65776e5b106ecbf4fe76fe6224ea2",
".git/objects/03/5d100fa505009994ac374c4bcf96c61125a637": "2a852686499d2f1859a02f54d1897071",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0a/7a2ef3e7b79cb5b2dcd77f3c8df21caf590697": "d9ca0949842365dded607e43c4ddb175",
".git/objects/0a/c72f42e290deebf3178fab935ee63dee6498c8": "d24c645cc50822088985705b70c0bac4",
".git/objects/0c/1dad6b232b8af563883cf7420b127e1123ba45": "abe5d3274d0c8f76c611d67a0f88b760",
".git/objects/0d/267e80e6de21d99766c99d96399a9eb27c3b20": "6b082b4b8234c11981165e2e089f414c",
".git/objects/0e/503d240bfae74e77b82366d86449ee8f48729e": "84d659e2b62016b080d336d78bd3dc47",
".git/objects/13/d6ff8a753da2393d0ae24d4fafae2a4497c1f1": "3ea92e6ec612cc3b619a5997d50ad286",
".git/objects/13/ffa2b78a56ac26a3ea37cc46f8156b6f96b56b": "507fea5467197ee8818667f56355935c",
".git/objects/15/c643e94644f57cb0ff90dc19d0305e3c9db933": "79f150834feb99df495f134c2c7070a3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/82a1d92ccabd6911be6e348b0b67e9c4704b17": "fac320ef0795914967db7161b22df136",
".git/objects/24/7bf1d3b8808dd2c9040bffbef9309b29761ac1": "bc73dd93653c96e9a0d50cfe80fa096e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/bdc31a05ac931a286597e2fc0eaa87b43b3492": "e7deb8f7ef39b6965b2198bf9259f50d",
".git/objects/2b/d9541ae56676beb9a47ec6a5cf68c541c6e6f9": "12af40f27f4fe2fef0f8da2459b34c49",
".git/objects/2f/52cb5c3ca51443de0b3b6342b8f7dcb3a3f822": "d07cf4d7f3a4a5d7e7c32333b226b0a9",
".git/objects/31/07199007873c824dc24105d0bfd6d8d9690ca2": "d3bc4bd86ca081bdaeddd4d80824a1fa",
".git/objects/31/8acf8065ccefe7b594264092b8d9e9e984a905": "9196a15a6ac5c0db7d733a430ce68cd6",
".git/objects/34/190370175d05481ed6d3bf6dcc784e5ec36d01": "8f6be6db90c25046c5a53142e4bbd880",
".git/objects/3a/12ae34c83f2002f4d489f985488c9edaa3cbda": "b06bc0422742dd94a228795504ee747f",
".git/objects/3b/aeb1e61e415db3738e91b3098171c0ee1e1db8": "361ebd386267849aedb569361f4b57a1",
".git/objects/3f/aaa6cb9381c9ffd11b358078b86e0b5ef62da2": "35d46b6efcb1be9b86d28d07edc9d48f",
".git/objects/42/a829dad633359f2dec4044c096b7956546e0e1": "8e29eec0413c5f9fd0905f1f5dc0ca7f",
".git/objects/45/0873c635f99d848625878ecd51d81e2f543335": "d6bc410026899b51063f8621bdf6c059",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/83223dbc6aa468351fd936d9a0bfcc39f0dec8": "e8e9d3ba0a2ee7b33565988c3b0dcedf",
".git/objects/49/df55177b08d9a8204b0065f16c8f07955c19df": "7fbbd68d8054dfe2b5cb876f43eb5bff",
".git/objects/53/225b99cf90c436cbdb8cd4ae3f2e3fbdb592d0": "cb0c77437109b500ecc63e9bbec8d4fa",
".git/objects/5b/994749a5245b1efac8395678cadb835a075b9c": "8c9d7a3209b5037c53729958b6b74cce",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/62/b752e34c902c2d5be114427100dea1ec0b3d70": "df44e2352562973c00bf93c167ffddda",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/9ed843c5babd7dffc7f18d025b63245ed143d3": "f7f48321c1f755f1f243de9e473b0d2e",
".git/objects/69/331ed3df537cc594b1c3e0f9fba51ab8ca2695": "aa908b840588c66c3b7424ddb00804ff",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9cefa3700c3d59c84592c02edfbbfff88f82fc": "1071ae474cebaecf58e60977140f6145",
".git/objects/6d/525a3e68882c8075171cc8c33025885659a8c7": "d47b218d4bfd5c4532291f269eaf305d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/37f53ccb5d8887189d3284f436e5b84f81c66e": "2c51b24261b572e3816f0046eac89889",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/3fdc65b3d2db14e5246e1843b9791f9a7c682f": "cde8c7e7736a87aacfbbe773b5ec495d",
".git/objects/7b/5a9339f19a8ff5350f4f081fe90a1b2817f2f3": "d6ce1db4e06a8599f61983e3fc614741",
".git/objects/7d/5e7b02ea315c840e319d337707800522997428": "e276213ed7684bf681fe9ece9170b3eb",
".git/objects/7f/90e4300b0bf2041296994bcbc373c512511e83": "0b433b649e7d5a2eb3a5b1c1b3cb3b40",
".git/objects/80/084f6c7e5644b26eb9ea5fbe58e7ff6c5e0119": "80175d807456ff817c9a62a5daade62f",
".git/objects/83/8f2cc770aad3a8100e452798d321a77e7c1ec2": "4dc433f5a1dd9fd1de0f2c9e80b09382",
".git/objects/84/5fe6399765e8cb53d4eeaeda42f83f74ffa425": "e9de773dc90c84b62b0337067f587f6f",
".git/objects/85/5954e8b336b75b86132a50b56ddeb50c36abc1": "6a50e04b78d11d340262183cb7ec7686",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/606cab1acb50313d6e5691266e30229de8f04b": "601541f08d99fe479bd440b7929f1105",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/ae64c4a8381c3709a39f635ebe794d1864bee3": "cc7960fd5b87f847e04bdb662c48ab5c",
".git/objects/93/62f064a142d117ff412f578a8dcb0afea8fe21": "66cc0853ba58db965d7817d0e69d0556",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/2fb8acb8454b29f5bb78448c8be2c0aabd26f4": "f6244798545a444921fc869150ce5292",
".git/objects/a1/f641a47e6bd91e661f83c077808452e3658589": "085ba2668ca29764be666a965c30a825",
".git/objects/a8/699fb3ede42b731c869ec57b6df53e7d34e2ad": "08d6112ba666a93a056cf4517ff6c83b",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/a9/f718499d8cc8e1ef3c5a7415bfa5b0e3d57dc1": "4203d4f765c3e571254d617abcb5e86f",
".git/objects/ad/620bb6b7804acfd03d03bb0b55e10b5bc0ea3d": "2d16336e5b17462365d04c3bdc70f9f4",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/f867231773e7badd643a11f010b2b007caa5de": "1d92e293fa67f8265c1841b6b48ea0f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ab79d21670c85135dab4a38852114d0c00e12c": "a17f3ad03f9a04489dfcfdfaaa52bf12",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/c28e50c0ec00fe2dafde1830aad381c062fa25": "c47db0f57d859001c05daecfda5f3a07",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/6415cec4f6727da5081769ec5b8a5f24f0c896": "2945737c93752c508fecec96c1fc5f5b",
".git/objects/cb/9fbb1057a286c38bd9fbc4663b447c5ae37c78": "efbcc624445aa337aefd9d19b10f22e3",
".git/objects/cf/da57d65885c4c966ecde7f20598aa189ff93b6": "65e5436b8f250a66d25a6f95a85e6f4b",
".git/objects/d0/da6cfd26c03f43d373fab6ab201794aef3c7d5": "4471449ae6e8eb74f6cbc9a388e50ae7",
".git/objects/d0/eaec0a78a1afc392fec1ddc4bfe0c3fc093ecb": "23546f28c79b8c4e3a763c72ceab8930",
".git/objects/d3/ffab82b1eb6f974f6a09c18024a7f290f519e7": "8d1bbcc82f51fa84840c980e3f9ece3f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/bf7473eea57fd2066f81a6425bf1728929fda5": "3089b4a411fd6e5421dc5eec92bca43c",
".git/objects/db/d7c399771759187a84925ea70014ebd9ce9dc9": "06f51db1b83344b7b9111be29d6a3a69",
".git/objects/dd/5c673ff1a3ccb0a5ac98b279d526119bc2a04a": "95a1fdceda5ee42267dd6222a9e95a7c",
".git/objects/e6/99695374aa607b6d73a675d176b9cb4e839689": "5819977e17cd55ce2825e19e5f1b6ab2",
".git/objects/e6/f4cc19e3b365008ad8431b56d631e062803f15": "91a9d882a06f7c6b059bec01624f4eab",
".git/objects/e7/492d84d825e30da86b1d3a1a97147caa6b8e9e": "340ed83eddcbca173b65991508b21bd0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/9036f4619925880d3a9fe58db01970288400da": "d86967d3a4250c80cc1f2c383e8e7ba2",
".git/objects/fb/f09ad671e2800cf300704bc8d38a453002752b": "b6fd6ee95f5ed99f06448f61b34ae117",
".git/objects/fd/84cbed9972003f5a03fe07fbff12a116a423e6": "1850b64bb65b37c79ec05952e46248b2",
".git/refs/heads/master": "9fc039f88be53bf500fcc691e82700c8",
".git/refs/remotes/origin/master": "9fc039f88be53bf500fcc691e82700c8",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "443d7bc6e7d21e1cf2589ff4301c7768",
"assets/NOTICES": "db4ed93196a4b87d29b22e9216a0b404",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"conf/app.conf": "27b9f8f06e2c2ba98a11a9a2b7d808b2",
"conf/nginx.conf": "6fd1f0c6d710b273aab3c81e895158ff",
"Dockerfile": "155c44087e9124b2b719d66f53494780",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b19c2ceb0a24f55fce9ad4b3520f892e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3022ce2cf5f8d238facbfc100e7fef8d",
"/": "3022ce2cf5f8d238facbfc100e7fef8d",
"main.dart.js": "410bf82a73a4b2c9c69b44e93b6b7c80",
"manifest.json": "dbb5c0f63418e3dcf3eb74c91de24971",
"version.json": "ddcb702dfaa4c8512f5455da4a47ce30"};
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
