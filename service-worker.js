if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"e80319213bc93bc7d5c1ab9bea9dde92","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e80319213bc93bc7d5c1ab9bea9dde92","url":"index.html"},{"revision":"7413916697cd9576110cb923407861d0","url":"precache-manifest.7413916697cd9576110cb923407861d0.js"},{"revision":"f18fc4003b64adf9827c0ff6a336db98","url":"static/css/21.ab33d419.chunk.css"},{"revision":"032112a236262a9dfc87abf3fe9b1095","url":"static/css/22.e6f51e71.chunk.css"},{"revision":"eb00348a717c8f51b0ab7ede28eab68b","url":"static/css/App.74e2d825.chunk.css"},{"revision":"8e941d46cc0325716f7edbcbc2ef9c06","url":"static/js/0.ba71a211.chunk.js"},{"revision":"093c1865542068a89cb0cc79dd792b45","url":"static/js/1.edc4e17b.chunk.js"},{"revision":"ccc70742350aa91308749b05f5236c76","url":"static/js/19.554d190a.chunk.js"},{"revision":"c337a4252f5f79b6e5b9b7e84e1a854e","url":"static/js/2.b1c9ca56.chunk.js"},{"revision":"ad78044da788117715312e0cd87b8f17","url":"static/js/20.195bff21.chunk.js"},{"revision":"c4fbb53b466d3ee2ffb296b159be703b","url":"static/js/21.9f5c4022.chunk.js"},{"revision":"a5508848249fced15e68ccfd3dee8d07","url":"static/js/22.2f4a84a8.chunk.js"},{"revision":"af6c7d376b47004c1901803f965b7229","url":"static/js/23.48325fa5.chunk.js"},{"revision":"678b40438ea1d373cc7e1961fdb60aa1","url":"static/js/24.f96d3dd5.chunk.js"},{"revision":"c77649c7220444e549bdec99545884b4","url":"static/js/25.12bb6447.chunk.js"},{"revision":"de0229e37f2bd8ffc9b6699c61e3e601","url":"static/js/3.115a0178.chunk.js"},{"revision":"1e50b177082b8f9abe88f100b82f0fa0","url":"static/js/4.9a2e46dc.chunk.js"},{"revision":"b155b951ec62dde852fcefefb56812ba","url":"static/js/Actions.9f2e77a6.chunk.js"},{"revision":"fbaf684b38d4694870686837837ab3f1","url":"static/js/App.e7970e41.chunk.js"},{"revision":"551a076727df96303b928a63027924ef","url":"static/js/Footer.6c0214e8.chunk.js"},{"revision":"d049f50a112ccfad0dccaca3565ff4ca","url":"static/js/Home.31e6ec00.chunk.js"},{"revision":"d6ca1b2269e172a39008f599b0c67392","url":"static/js/Level.52ad2f5b.chunk.js"},{"revision":"3f8b1dcd748bcf255bc423500bd2451f","url":"static/js/main.34fc22aa.chunk.js"},{"revision":"ce517d2a939059423bd6cf67552b03ae","url":"static/js/Minigraph.f23ca9da.chunk.js"},{"revision":"5456492789fe7f89b953d354df3e8275","url":"static/js/Row.09e03871.chunk.js"},{"revision":"9421da3b602a0caf3ed8acf06610b8aa","url":"static/js/runtime-main.e74b1655.js"},{"revision":"74ab86f7a15660c7add577fe856c21e1","url":"static/js/State.1f341503.chunk.js"},{"revision":"d7fc3f84ff013ea4603a3e183bdd0e14","url":"static/js/Table.46908335.chunk.js"},{"revision":"8d9ab39651c5bb9276897fbb8283d4bd","url":"static/js/TimeSeries.ed91912a.chunk.js"},{"revision":"2e5d1d8ba1ee4047b1a763a2ef53a31a","url":"static/js/TimeSeriesExplorer.8f887049.chunk.js"},{"revision":"172a279299ddcd41b4afd1c64fc8228b","url":"static/js/Updates.098d2522.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
