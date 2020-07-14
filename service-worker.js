if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"c103793c2ea8c57136f33f8606974a2e","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"c103793c2ea8c57136f33f8606974a2e","url":"index.html"},{"revision":"a638148441fd2d0f82b728870c4c869a","url":"precache-manifest.a638148441fd2d0f82b728870c4c869a.js"},{"revision":"d80126387a0fcd481e4a097e1cdd2bbe","url":"static/css/22.ab33d419.chunk.css"},{"revision":"f8f2a80b126c6ada9a133e891b3e81bd","url":"static/css/23.e6f51e71.chunk.css"},{"revision":"cfcfbaba5cc0fb75ac433a6ce6c7151f","url":"static/css/App.3603829a.chunk.css"},{"revision":"f05377f9ff9b057e23c64575deea4f26","url":"static/js/0.f869fdca.chunk.js"},{"revision":"7130da5f9c1e439806db4f9b93983c1e","url":"static/js/1.f1ce8539.chunk.js"},{"revision":"f26ee406eb99d3e7352bb7cd8d04a17d","url":"static/js/2.3bd6fe44.chunk.js"},{"revision":"456142ce90d133202dbefa50c229cacd","url":"static/js/20.e43400a6.chunk.js"},{"revision":"83df61eecf4263adfc9b95e9720701c0","url":"static/js/21.0383cf66.chunk.js"},{"revision":"4ce836014ef67ff681fc21e59af5f69c","url":"static/js/22.72caaeec.chunk.js"},{"revision":"0fe778b415923f2a11f329d435c4361d","url":"static/js/23.0ee6425a.chunk.js"},{"revision":"ca0d0d19e458f094681deb6f04fbe498","url":"static/js/24.0a08de4a.chunk.js"},{"revision":"7f44ca4c25e211df753cd00ebc47c430","url":"static/js/25.3a9b082c.chunk.js"},{"revision":"4b303e48ca227b8da36aeff5fa856b3e","url":"static/js/26.ca207c85.chunk.js"},{"revision":"285d34fddc0a469f149bf4f01c018836","url":"static/js/3.6ba723ac.chunk.js"},{"revision":"e2c4cc449e0fc1886555ab7c92063065","url":"static/js/4.761f0a73.chunk.js"},{"revision":"c2e943ede66da5acdabbee4baf961880","url":"static/js/Actions.a4e1af87.chunk.js"},{"revision":"c59b3f702f468d52cb41ea1e1c9a6551","url":"static/js/App.439a0168.chunk.js"},{"revision":"a4331b9f6d3f8a88fd8814eac1683eea","url":"static/js/Footer.0216969c.chunk.js"},{"revision":"95bc7dbc7f62ce9f17220a6b2c59da33","url":"static/js/Home.417522e1.chunk.js"},{"revision":"661850a79c0d87c119f9a78f248feaf3","url":"static/js/LanguageSwitcher.fe15a749.chunk.js"},{"revision":"0d37c08981db7f1eacb81b9902ac946c","url":"static/js/Level.6f036540.chunk.js"},{"revision":"2ea169b67c4bd6a8004dafc96d1b0652","url":"static/js/main.8a11174c.chunk.js"},{"revision":"885d7db60b93c2501e839a04c14775ae","url":"static/js/Minigraph.ac45d6d0.chunk.js"},{"revision":"82697f146759db85b3aff66cdd0b9def","url":"static/js/Row.e94ce1f1.chunk.js"},{"revision":"523df98748576c20219b3e162ec2216b","url":"static/js/runtime-main.b17f94c1.js"},{"revision":"1580eca08a97607244071612f3308cf2","url":"static/js/State.4c84d6e1.chunk.js"},{"revision":"0e9228183d9ce2de713f10e82f96256a","url":"static/js/Table.88311cf4.chunk.js"},{"revision":"3a1e2e485e3b83da944568d0da53654c","url":"static/js/TimeSeries.1905a700.chunk.js"},{"revision":"565ebfc8a109d041aeb3c046580ac278","url":"static/js/TimeSeriesExplorer.9cd86006.chunk.js"},{"revision":"fa05f799bb0eceef55eb1fa50bdc8856","url":"static/js/Updates.0d51f73c.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
