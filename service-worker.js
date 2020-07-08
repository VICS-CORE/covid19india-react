if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"b220845462d0f521a932e5c0435411df","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"b220845462d0f521a932e5c0435411df","url":"index.html"},{"revision":"c80f6a9c926e95bba55e026faba83392","url":"precache-manifest.c80f6a9c926e95bba55e026faba83392.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"0789fd35f74d85561dc51f92f036f0c8","url":"static/css/5.e6f51e71.chunk.css"},{"revision":"052ff4287f996dadcba3f40eda956f3d","url":"static/css/App.5031b4d1.chunk.css"},{"revision":"bbc8d05de14c1970a9b420957ac597c7","url":"static/js/0.4dc4ff5d.chunk.js"},{"revision":"98871bfa5d3a9cb6ab777c78ae91fcac","url":"static/js/1.097713e7.chunk.js"},{"revision":"823589ca7d647331b963430261624825","url":"static/js/2.bf822a9b.chunk.js"},{"revision":"1d8a7252081519b3bdbde9813fc1b0fc","url":"static/js/27.cf76c20b.chunk.js"},{"revision":"8afbe66fcf99e8a0443ac2ba0fe1f573","url":"static/js/28.cb92be7d.chunk.js"},{"revision":"da08b80961c65778b11e0d581f25cbf6","url":"static/js/29.ceedce04.chunk.js"},{"revision":"88b4875982757b924344abf7d8f8ab7a","url":"static/js/3.d8b1714a.chunk.js"},{"revision":"f4e16ecb240729f6cf770601a7eab167","url":"static/js/30.cdd2a503.chunk.js"},{"revision":"ce0a6768ba83c6cf29f39ce6f0837f81","url":"static/js/31.f9f23692.chunk.js"},{"revision":"8a74e24d45faf66f589e18afb6e67760","url":"static/js/32.5ded357e.chunk.js"},{"revision":"0354de7b258532d97704021b43ecb6f7","url":"static/js/33.ec0b780d.chunk.js"},{"revision":"49b9742f2e46c62397ee81026ee9cb25","url":"static/js/34.49ce8add.chunk.js"},{"revision":"4ff93c63de728a57fa6f5446c35dc169","url":"static/js/35.a19188fc.chunk.js"},{"revision":"2ca85fc80e557805f96c8b296d96a063","url":"static/js/4.7dbf955f.chunk.js"},{"revision":"f9dee84b32383ae4f36251560becd195","url":"static/js/5.2a87eafc.chunk.js"},{"revision":"3a3836cfc2d8ffff2984a44e7768e753","url":"static/js/6.21342554.chunk.js"},{"revision":"c9d5344f12f007dd3884377e1a2832c2","url":"static/js/7.95de23d7.chunk.js"},{"revision":"b801ae361dd8ead75627ba6cdd3e8993","url":"static/js/Actions.a9ffb551.chunk.js"},{"revision":"1e7c6fd7ec7afa8407d0f3722de64c17","url":"static/js/App.84467d3c.chunk.js"},{"revision":"1647f545e1aad61cab0311736ed044bc","url":"static/js/Demographics.2ba0b136.chunk.js"},{"revision":"a0ff145c05d2449e7227686f670fb932","url":"static/js/Essentials.5abc9380.chunk.js"},{"revision":"e284a93d6cb0c49bdc945516313f9478","url":"static/js/Footer.b7ff6de1.chunk.js"},{"revision":"e88ccef13551fa535d6d84aee48b2785","url":"static/js/Home.bcb1442f.chunk.js"},{"revision":"33a1104fb73acf73a6f267b5f4d8cfca","url":"static/js/LanguageSwitcher.fb30e979.chunk.js"},{"revision":"991dadd24bb99900f8f0e6dd0550eeb1","url":"static/js/Level.b8b77c41.chunk.js"},{"revision":"1ff1bd16daf91744ba4a1070df23b7a0","url":"static/js/main.19cca970.chunk.js"},{"revision":"158f73397174928c37e097365d13c7d4","url":"static/js/MapExplorer.4c066a3a.chunk.js"},{"revision":"119da66ed536f8e08b5d968c2e95defe","url":"static/js/MapVisualizer.b14266c6.chunk.js"},{"revision":"9f2d5373480ef4edd06ac97f319c2fb9","url":"static/js/Minigraph.8e223ac1.chunk.js"},{"revision":"7fb1aede2299c31c9017b689221ab904","url":"static/js/Row.0be45e3a.chunk.js"},{"revision":"d51779fa4c0040f936e5c340f39788a4","url":"static/js/runtime-main.9c6a5c5f.js"},{"revision":"1e65153b35c4ba6fcaee31187414e474","url":"static/js/State.08f82097.chunk.js"},{"revision":"d155ec41562af65e570018bf4960ab50","url":"static/js/Table.ef30abb1.chunk.js"},{"revision":"d3440d275a31ecd52319bacc40beb4bd","url":"static/js/TimeSeries.ea5656f7.chunk.js"},{"revision":"9f853754a053b11b3077d4c66d9b7e21","url":"static/js/TimeSeriesExplorer.1ec56097.chunk.js"},{"revision":"19ff5741d9b77b152a04aacc8da6bac4","url":"static/js/Updates.447a74c3.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
