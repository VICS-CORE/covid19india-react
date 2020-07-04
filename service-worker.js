if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"1d3c06fabb29f5d6ab4d376d755eaa28","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"1d3c06fabb29f5d6ab4d376d755eaa28","url":"index.html"},{"revision":"5990a1ab6962159e55562af4e6bf6fd8","url":"precache-manifest.5990a1ab6962159e55562af4e6bf6fd8.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"12996694153f2262c138e285f80a91db","url":"static/css/App.99975802.chunk.css"},{"revision":"5adc76ec6a00b96713c805b6b7d53040","url":"static/js/0.a92ec707.chunk.js"},{"revision":"93727d34a4bb4f61bbeb066d6f06287e","url":"static/js/1.e7f9734e.chunk.js"},{"revision":"823589ca7d647331b963430261624825","url":"static/js/2.bf822a9b.chunk.js"},{"revision":"550ca76fd346c32d1d6cff7915ce9c44","url":"static/js/27.b139a213.chunk.js"},{"revision":"a748d980f9f925783f5434094d04221b","url":"static/js/28.8b5b6d71.chunk.js"},{"revision":"d398b112a532adf19bfa922c10ca20b2","url":"static/js/29.a6f0b912.chunk.js"},{"revision":"f68ca76a3f84183fd9fc2590e24fc1bb","url":"static/js/3.aa5949d7.chunk.js"},{"revision":"0e0ee5ac1d7a038c36ce2a8564e3cc06","url":"static/js/30.10d98e4d.chunk.js"},{"revision":"6bf7a3eb330f8a66b2bbb6818fda6514","url":"static/js/31.a4ea3c2a.chunk.js"},{"revision":"332ec86552d947222c49d00f076c9cdb","url":"static/js/32.abf19555.chunk.js"},{"revision":"0354de7b258532d97704021b43ecb6f7","url":"static/js/33.ec0b780d.chunk.js"},{"revision":"0f0a7f1a29270f26fc1c78928a422c8e","url":"static/js/34.ec8db1a9.chunk.js"},{"revision":"2166b4d3acd0c2fca63d487a15be3085","url":"static/js/35.5425ed3e.chunk.js"},{"revision":"2ca85fc80e557805f96c8b296d96a063","url":"static/js/4.7dbf955f.chunk.js"},{"revision":"91faa92e26f86b0c4c9733503c1a65a1","url":"static/js/5.d3594796.chunk.js"},{"revision":"3cb599b51a5ad2921b16b339cb81b251","url":"static/js/6.ecbb295f.chunk.js"},{"revision":"55341d96cfc46f88a480cf95cb211ff9","url":"static/js/7.604da996.chunk.js"},{"revision":"a4e7897251d07e7c858a6c9455a7a051","url":"static/js/Actions.68ff1e74.chunk.js"},{"revision":"4dbad1f5e505e71d0340076982201d32","url":"static/js/App.1db8385e.chunk.js"},{"revision":"6d3e97d4a01cb6109b369cd4c9a0bd1d","url":"static/js/Demographics.b3461427.chunk.js"},{"revision":"d273cffabd478e62ff54bdf64263d38b","url":"static/js/Essentials.f356b449.chunk.js"},{"revision":"c6299e4c6fb6a467de9b31b22591a338","url":"static/js/Footer.ab869ef7.chunk.js"},{"revision":"919eb79beb2f629fa3e31973b1ef4998","url":"static/js/Home.98bf0656.chunk.js"},{"revision":"f2f1de19f954e55473cdc444f4443b71","url":"static/js/LanguageSwitcher.2b52e8db.chunk.js"},{"revision":"82763cb5522bd7d4705ccc8780959c31","url":"static/js/Level.28ae52eb.chunk.js"},{"revision":"c08ff3161c2bd0b7eebc0b5916ca60f0","url":"static/js/main.9c8fc851.chunk.js"},{"revision":"fab379401c11576f3499b041fbf12fbf","url":"static/js/MapExplorer.4166147a.chunk.js"},{"revision":"0496864cf9c63c0352d0b38d595d855d","url":"static/js/MapVisualizer.52d30262.chunk.js"},{"revision":"7f0f80e7cc27d95e709d97722d648f98","url":"static/js/Minigraph.2f043ef8.chunk.js"},{"revision":"9edcd64ab6d79b2184f507ccf0c72235","url":"static/js/Row.43fcca27.chunk.js"},{"revision":"fa62d9cce0a423ccb6be93c09be521f3","url":"static/js/runtime-main.8dba3738.js"},{"revision":"d3d5192443bcf85229eaab1b869e14e0","url":"static/js/State.917eedcb.chunk.js"},{"revision":"207cb5ee1899a82b48b6a7f08dfcb854","url":"static/js/Table.4b729f32.chunk.js"},{"revision":"9e4f5a6a4455c575984d3776ac3881c5","url":"static/js/TimeSeries.d3cd703c.chunk.js"},{"revision":"352645a0f8c192104407b8a82da8fbe6","url":"static/js/TimeSeriesExplorer.0aa435cd.chunk.js"},{"revision":"7ebafc9eba257b23feb5ef02218ffd8d","url":"static/js/Updates.b42308a3.chunk.js"}]);

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
