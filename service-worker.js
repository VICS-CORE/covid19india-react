if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"505b27cd8e49ff2cf32b32f693653045","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"505b27cd8e49ff2cf32b32f693653045","url":"index.html"},{"revision":"8d861b54fcf3aa07b83fc81d8b5e0ac5","url":"precache-manifest.8d861b54fcf3aa07b83fc81d8b5e0ac5.js"},{"revision":"d80126387a0fcd481e4a097e1cdd2bbe","url":"static/css/22.ab33d419.chunk.css"},{"revision":"f8f2a80b126c6ada9a133e891b3e81bd","url":"static/css/23.e6f51e71.chunk.css"},{"revision":"cfcfbaba5cc0fb75ac433a6ce6c7151f","url":"static/css/App.3603829a.chunk.css"},{"revision":"4116f2944a7a067ad52155429467c408","url":"static/js/0.b084e5fb.chunk.js"},{"revision":"67cde322064d1e8f8b95994b24666d38","url":"static/js/1.f4c5cd29.chunk.js"},{"revision":"f26ee406eb99d3e7352bb7cd8d04a17d","url":"static/js/2.3bd6fe44.chunk.js"},{"revision":"456142ce90d133202dbefa50c229cacd","url":"static/js/20.e43400a6.chunk.js"},{"revision":"32f8a426e5e518104aceb398e735a1d9","url":"static/js/21.680fa50f.chunk.js"},{"revision":"87056455e7883968e4d2b80c962f9f3e","url":"static/js/22.977b5f78.chunk.js"},{"revision":"0fe778b415923f2a11f329d435c4361d","url":"static/js/23.0ee6425a.chunk.js"},{"revision":"ca0d0d19e458f094681deb6f04fbe498","url":"static/js/24.0a08de4a.chunk.js"},{"revision":"6865e0743e4682c1408af73469d26d6a","url":"static/js/25.d8b5d9bc.chunk.js"},{"revision":"4b303e48ca227b8da36aeff5fa856b3e","url":"static/js/26.ca207c85.chunk.js"},{"revision":"c79b438b9740edefabb61f352c5bcfa7","url":"static/js/3.12948ea4.chunk.js"},{"revision":"a39dc0582f588b94cd2cd3be8eff205a","url":"static/js/4.3586da7d.chunk.js"},{"revision":"c2e943ede66da5acdabbee4baf961880","url":"static/js/Actions.a4e1af87.chunk.js"},{"revision":"c59b3f702f468d52cb41ea1e1c9a6551","url":"static/js/App.439a0168.chunk.js"},{"revision":"a57e81054dcb15bd743ed532aa5c33b3","url":"static/js/Footer.6cefbcae.chunk.js"},{"revision":"cbf30ca9f0c1195ac6421c89ffef7583","url":"static/js/Home.bd3a7ac2.chunk.js"},{"revision":"661850a79c0d87c119f9a78f248feaf3","url":"static/js/LanguageSwitcher.fe15a749.chunk.js"},{"revision":"38a3eaab54af5de4558aec52bc8b6759","url":"static/js/Level.3b7c1386.chunk.js"},{"revision":"2ea169b67c4bd6a8004dafc96d1b0652","url":"static/js/main.8a11174c.chunk.js"},{"revision":"885d7db60b93c2501e839a04c14775ae","url":"static/js/Minigraph.ac45d6d0.chunk.js"},{"revision":"d9bf3a5b4610815aad935cc3d934e348","url":"static/js/Row.f47574be.chunk.js"},{"revision":"7732df6a0969059e59d195a7216d81aa","url":"static/js/runtime-main.9797a46a.js"},{"revision":"912b4b06382398b35c9f750e3513f9e0","url":"static/js/State.dcf377a2.chunk.js"},{"revision":"e22a1d9a8d2d09daa7264f88f92aad4f","url":"static/js/Table.66fba9d6.chunk.js"},{"revision":"3a1e2e485e3b83da944568d0da53654c","url":"static/js/TimeSeries.1905a700.chunk.js"},{"revision":"90982eb064c1b1aeb10ba2a5a4b18611","url":"static/js/TimeSeriesExplorer.c34ab295.chunk.js"},{"revision":"fa05f799bb0eceef55eb1fa50bdc8856","url":"static/js/Updates.0d51f73c.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
