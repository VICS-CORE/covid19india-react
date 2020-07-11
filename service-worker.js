if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"7ff3bf2b7cd2a46a98d4a2664a6be78e","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"7ff3bf2b7cd2a46a98d4a2664a6be78e","url":"index.html"},{"revision":"d51e968b717795ff4a19a17fe560a76b","url":"precache-manifest.d51e968b717795ff4a19a17fe560a76b.js"},{"revision":"da4896899e6af9ce0a99210d5bbf8e17","url":"static/css/26.ab33d419.chunk.css"},{"revision":"5b4d9a7394a680a9a513d1123b9b16b6","url":"static/css/4.e6f51e71.chunk.css"},{"revision":"052ff4287f996dadcba3f40eda956f3d","url":"static/css/App.5031b4d1.chunk.css"},{"revision":"960c723bf4beac1647c7f8b7b7f8cf92","url":"static/js/0.7a6b6f96.chunk.js"},{"revision":"71d5326f53e0ee4cebfc9660e99f13c5","url":"static/js/1.b4f9cfc3.chunk.js"},{"revision":"2edab9ea7143f7c12de338d0cd8186bc","url":"static/js/2.d1267769.chunk.js"},{"revision":"ecd5609c22d79882a3117d56e3d97776","url":"static/js/24.78873676.chunk.js"},{"revision":"a58d8e0e212bcc25dbe1a00a1b22270d","url":"static/js/25.28710a3b.chunk.js"},{"revision":"1b419d424e92586073951b7659967e68","url":"static/js/26.e5061843.chunk.js"},{"revision":"e6174907ca88d9135b5bd96b272cb256","url":"static/js/27.ae88d605.chunk.js"},{"revision":"35834ec6a16429123374d8e7c8349c56","url":"static/js/28.3e2e3261.chunk.js"},{"revision":"c9b6204f0e274b7fdf24d9937cb46259","url":"static/js/29.c87934e2.chunk.js"},{"revision":"568af7f27a5cca092c277a440b3b8c04","url":"static/js/3.a98d8476.chunk.js"},{"revision":"5f4ab1196498013336b5d3d82ad24ffc","url":"static/js/30.6e1e73c5.chunk.js"},{"revision":"d8a2110f10fd7593257d4f438b07eba5","url":"static/js/4.c0168836.chunk.js"},{"revision":"96d06b61f15a2e92146bc463d3a676f6","url":"static/js/5.4cd461b4.chunk.js"},{"revision":"b8946681e3d8fcc04915dfb3478dd2ea","url":"static/js/6.aaa361df.chunk.js"},{"revision":"f0ec6dd535aed332dc275491f490000e","url":"static/js/Actions.9ac60a24.chunk.js"},{"revision":"b43c9cf5fbdcb14f7e839e185b57d149","url":"static/js/App.b4f3bfe7.chunk.js"},{"revision":"56d03c778c9e2c7f5e28c4377406348c","url":"static/js/Footer.0f057b21.chunk.js"},{"revision":"354e38509184624879a4a08c2a212638","url":"static/js/Home.423d605b.chunk.js"},{"revision":"353020bd556eacca29d2c66c029ccb88","url":"static/js/LanguageSwitcher.8345ebb1.chunk.js"},{"revision":"f838fa11a17f025dfc00e4e11d9369b6","url":"static/js/Level.a5ca11a6.chunk.js"},{"revision":"7370aeb638bbd82956b47defa2e5acd3","url":"static/js/main.721d63bf.chunk.js"},{"revision":"9669570bbd57e30451adfa1635945b60","url":"static/js/MapExplorer.1b12df74.chunk.js"},{"revision":"47b87992bec4bd800b51dc5fb1de8028","url":"static/js/MapVisualizer.530e006b.chunk.js"},{"revision":"c270d09a94d9a94f6ee49ae3cdc89f04","url":"static/js/Minigraph.fe33d6ac.chunk.js"},{"revision":"13686a8da9a85ba9dd3cfebe579631f6","url":"static/js/Row.d05a697d.chunk.js"},{"revision":"a7df931836116841f7607f5a7670014f","url":"static/js/runtime-main.679041f7.js"},{"revision":"e0229341795e859785ad8a4d0150932e","url":"static/js/State.0885a9c8.chunk.js"},{"revision":"efd15f8c0547351f44fe936678ed897b","url":"static/js/Table.c906e9e0.chunk.js"},{"revision":"3d0cd524d2418bff00e52d25343b510b","url":"static/js/TimeSeries.79454479.chunk.js"},{"revision":"a3ea59e839fc36946c5ec7f53297360b","url":"static/js/TimeSeriesExplorer.b295b47b.chunk.js"},{"revision":"2dbb7e14c0c358da1e75385ca99c5f0d","url":"static/js/Updates.0eecf4a0.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
