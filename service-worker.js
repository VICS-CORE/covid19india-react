if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"695e0e939de3f99a1772fe6d69c82b5b","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"695e0e939de3f99a1772fe6d69c82b5b","url":"index.html"},{"revision":"9c28eeb098ec95d62496a2e672ab01db","url":"precache-manifest.9c28eeb098ec95d62496a2e672ab01db.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"0789fd35f74d85561dc51f92f036f0c8","url":"static/css/5.e6f51e71.chunk.css"},{"revision":"052ff4287f996dadcba3f40eda956f3d","url":"static/css/App.5031b4d1.chunk.css"},{"revision":"66cf1d0145021de7421a887a3cc4636d","url":"static/js/0.c26d1192.chunk.js"},{"revision":"98871bfa5d3a9cb6ab777c78ae91fcac","url":"static/js/1.097713e7.chunk.js"},{"revision":"823589ca7d647331b963430261624825","url":"static/js/2.bf822a9b.chunk.js"},{"revision":"1d8a7252081519b3bdbde9813fc1b0fc","url":"static/js/27.cf76c20b.chunk.js"},{"revision":"fd00783e7f864a1f95f7690f20c91181","url":"static/js/28.794c9723.chunk.js"},{"revision":"08d2706daf3eee9ed013632fefc29655","url":"static/js/29.38bae410.chunk.js"},{"revision":"f68ca76a3f84183fd9fc2590e24fc1bb","url":"static/js/3.aa5949d7.chunk.js"},{"revision":"0e0ee5ac1d7a038c36ce2a8564e3cc06","url":"static/js/30.10d98e4d.chunk.js"},{"revision":"6bf7a3eb330f8a66b2bbb6818fda6514","url":"static/js/31.a4ea3c2a.chunk.js"},{"revision":"332ec86552d947222c49d00f076c9cdb","url":"static/js/32.abf19555.chunk.js"},{"revision":"0354de7b258532d97704021b43ecb6f7","url":"static/js/33.ec0b780d.chunk.js"},{"revision":"0f0a7f1a29270f26fc1c78928a422c8e","url":"static/js/34.ec8db1a9.chunk.js"},{"revision":"4ff93c63de728a57fa6f5446c35dc169","url":"static/js/35.a19188fc.chunk.js"},{"revision":"2ca85fc80e557805f96c8b296d96a063","url":"static/js/4.7dbf955f.chunk.js"},{"revision":"388aae5916bedae437af07e121c32f2c","url":"static/js/5.47afd4b7.chunk.js"},{"revision":"3cb599b51a5ad2921b16b339cb81b251","url":"static/js/6.ecbb295f.chunk.js"},{"revision":"8fcd887866b4c6b6465f09544d835882","url":"static/js/7.536af272.chunk.js"},{"revision":"907327c143340ccff639e4d6c761a108","url":"static/js/Actions.c348fb4e.chunk.js"},{"revision":"57c16ce39e49dee2c16f7a7ef4a79c3f","url":"static/js/App.e7817a1d.chunk.js"},{"revision":"bb2ef7a7008b262599459b72469667bd","url":"static/js/Demographics.c2410717.chunk.js"},{"revision":"1a8c66656444d93fd5fa511eecf79674","url":"static/js/Essentials.b1d3b7a2.chunk.js"},{"revision":"c6299e4c6fb6a467de9b31b22591a338","url":"static/js/Footer.ab869ef7.chunk.js"},{"revision":"7a7b96f4f100f6b32ca65a817d987350","url":"static/js/Home.80b6911d.chunk.js"},{"revision":"f2f1de19f954e55473cdc444f4443b71","url":"static/js/LanguageSwitcher.2b52e8db.chunk.js"},{"revision":"04787ac6cebdfa881dfd47cd7879f7ad","url":"static/js/Level.967525bb.chunk.js"},{"revision":"c08ff3161c2bd0b7eebc0b5916ca60f0","url":"static/js/main.9c8fc851.chunk.js"},{"revision":"0a212a2d7dc0d32f853810f74db3e541","url":"static/js/MapExplorer.cc34fa9c.chunk.js"},{"revision":"9e62e966285a1b1dfca96e738f3ded93","url":"static/js/MapVisualizer.f848b81e.chunk.js"},{"revision":"7f0f80e7cc27d95e709d97722d648f98","url":"static/js/Minigraph.2f043ef8.chunk.js"},{"revision":"88367ebd687ba1112547d3c61b57561c","url":"static/js/Row.9ee03977.chunk.js"},{"revision":"36652bb548c90ee85e0c6d1e29954013","url":"static/js/runtime-main.e800c22f.js"},{"revision":"cbec2a145ed91bcb040ae7eb7e493f55","url":"static/js/State.aa445cf7.chunk.js"},{"revision":"85769402d97f8efe0899f6a2a96451b7","url":"static/js/Table.54cd7e91.chunk.js"},{"revision":"1aaa79dfd3cd39df719ca1e188f85a28","url":"static/js/TimeSeries.0100c71a.chunk.js"},{"revision":"9d7083c11cfbfd7255efab64e9eedfc7","url":"static/js/TimeSeriesExplorer.36c73905.chunk.js"},{"revision":"7ebafc9eba257b23feb5ef02218ffd8d","url":"static/js/Updates.b42308a3.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new RegExp('https://vics-core\\.github\\.io/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
