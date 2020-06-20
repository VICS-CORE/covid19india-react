if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"0d5c8ebb30b45004670fc926bceb8d67","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"0d5c8ebb30b45004670fc926bceb8d67","url":"index.html"},{"revision":"f08fbc8b0f121ca58949deb48d237b1f","url":"precache-manifest.f08fbc8b0f121ca58949deb48d237b1f.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"c2e6dd99f82bd4f04729c4c9bcb21f7e","url":"static/css/App.176f818c.chunk.css"},{"revision":"747f18dcc3d718879e36814dd1e793a0","url":"static/js/0.54579ff6.chunk.js"},{"revision":"22c6354e6296a14d91109466004d2730","url":"static/js/1.b6b06b74.chunk.js"},{"revision":"90790469e3b0535d1682826b918ca1db","url":"static/js/2.35c5f009.chunk.js"},{"revision":"d535eac263118c6c81689665f5daa079","url":"static/js/25.135bcf83.chunk.js"},{"revision":"ca405c5f60ce0b2b1ca54c6131aa38a1","url":"static/js/26.6d482f10.chunk.js"},{"revision":"0ec6d2a520665ddfb378118bcffbf4dd","url":"static/js/27.f661b4e0.chunk.js"},{"revision":"a3c41e5081a4fe66a8773488b79729a4","url":"static/js/28.d850781a.chunk.js"},{"revision":"e420de74ce5ccc70605c18a96d082794","url":"static/js/29.25d762d5.chunk.js"},{"revision":"1f2d39a8ce863083573a0ca2a4622abf","url":"static/js/3.ae88598e.chunk.js"},{"revision":"e0cbcabdac5f53ec174d56724cafbd9a","url":"static/js/30.a7ad5439.chunk.js"},{"revision":"8152a1bb3ecc36f0e6c0ae087faf7498","url":"static/js/31.9cf34a45.chunk.js"},{"revision":"9a03dd82b7b562166ff47549b379adde","url":"static/js/32.896ddf17.chunk.js"},{"revision":"5954ce53634f0f62e7a103c48e9e5f77","url":"static/js/33.9c080581.chunk.js"},{"revision":"78bfe4cff0fc4eee27bd472cfbe1f4e0","url":"static/js/4.db156932.chunk.js"},{"revision":"dc5670177171f97b672478ed6044f7d6","url":"static/js/5.2579e075.chunk.js"},{"revision":"f177c35d5edaeaccc8bd5eb161d41e3c","url":"static/js/Actions.fd2d111d.chunk.js"},{"revision":"ca245a7f45054ccced9d0aba620559cb","url":"static/js/App.d4484f2c.chunk.js"},{"revision":"15236db87e938a45e586fd76263c25c8","url":"static/js/Demographics.007cf967.chunk.js"},{"revision":"3428645f97403faf62aebd351936cc64","url":"static/js/Essentials.89b53e66.chunk.js"},{"revision":"3109d7978a7935250e254f1586fa126c","url":"static/js/Footer.d42e3416.chunk.js"},{"revision":"4d912227c69937c4682b0aff41faf41f","url":"static/js/Home.214a7c53.chunk.js"},{"revision":"548401baf50ee7089cc201a87cb6ec42","url":"static/js/LanguageSwitcher.957e2392.chunk.js"},{"revision":"19dd6f5a996e893109e5a1cde8ee8c22","url":"static/js/Level.3da15313.chunk.js"},{"revision":"a812b69848adba9dfeb5b82893a20927","url":"static/js/main.fd64ed2a.chunk.js"},{"revision":"45f35df33310bfac267e3ba7df4f6125","url":"static/js/MapExplorer.c9c395dc.chunk.js"},{"revision":"33de9455a14bee1acba48f7ef3698bf7","url":"static/js/MapVisualizer.d49d5304.chunk.js"},{"revision":"85c98067386ea5df2077b399f579808e","url":"static/js/Minigraph.db7f6de5.chunk.js"},{"revision":"7cc60e468a6167c19019e84abe3895a1","url":"static/js/Row.4d725327.chunk.js"},{"revision":"e4cd432ed8ee3b734f2638e8bacf6b97","url":"static/js/runtime-main.0e12a685.js"},{"revision":"d3e794158ce85abad2f6580e78378a80","url":"static/js/State.1f16c926.chunk.js"},{"revision":"56c927e6508533fbfa2e9e862182e9f4","url":"static/js/Table.0faaacaf.chunk.js"},{"revision":"fe1f87edeb97867c5cbdebe84ef72c47","url":"static/js/TimeSeries.804cae7f.chunk.js"},{"revision":"e7d2d62b653857d12e7343acf421f9bc","url":"static/js/TimeSeriesExplorer.e1ab2c45.chunk.js"},{"revision":"cdd51a9c92e4ddec29a8e26f0ad55c6b","url":"static/js/Updates.03fbad33.chunk.js"}]);

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
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
