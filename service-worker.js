if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"dc126e1efd0f30e5f6e808d2158130cb","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"dc126e1efd0f30e5f6e808d2158130cb","url":"index.html"},{"revision":"5bb97355b7845d88e067b58f2dfeeafe","url":"precache-manifest.5bb97355b7845d88e067b58f2dfeeafe.js"},{"revision":"f18fc4003b64adf9827c0ff6a336db98","url":"static/css/21.ab33d419.chunk.css"},{"revision":"032112a236262a9dfc87abf3fe9b1095","url":"static/css/22.e6f51e71.chunk.css"},{"revision":"eb00348a717c8f51b0ab7ede28eab68b","url":"static/css/App.74e2d825.chunk.css"},{"revision":"21af885ff3698bbdb992430545cb9e62","url":"static/js/0.f47b78f1.chunk.js"},{"revision":"093c1865542068a89cb0cc79dd792b45","url":"static/js/1.edc4e17b.chunk.js"},{"revision":"14def099baad459e63cbd447c12d09a0","url":"static/js/19.5b6082a5.chunk.js"},{"revision":"c337a4252f5f79b6e5b9b7e84e1a854e","url":"static/js/2.b1c9ca56.chunk.js"},{"revision":"bbc7a0b35b5583fdfd6a3812f3f649ac","url":"static/js/20.b1fdcd18.chunk.js"},{"revision":"c4fbb53b466d3ee2ffb296b159be703b","url":"static/js/21.9f5c4022.chunk.js"},{"revision":"a5508848249fced15e68ccfd3dee8d07","url":"static/js/22.2f4a84a8.chunk.js"},{"revision":"af6c7d376b47004c1901803f965b7229","url":"static/js/23.48325fa5.chunk.js"},{"revision":"afa34a7fd363579335579a89a2ff9c91","url":"static/js/24.c829cbe6.chunk.js"},{"revision":"cb0a12d4f045436a95b0c755dfdc466d","url":"static/js/25.38fb17cc.chunk.js"},{"revision":"cf213978e81655645232c04827f8d1d8","url":"static/js/3.3b210907.chunk.js"},{"revision":"1e50b177082b8f9abe88f100b82f0fa0","url":"static/js/4.9a2e46dc.chunk.js"},{"revision":"3ab6bc10b04529a679eea4fbee6bb123","url":"static/js/Actions.3a29c4c3.chunk.js"},{"revision":"1607fb15c16e689a3706f0078f2e126d","url":"static/js/App.3dde119a.chunk.js"},{"revision":"551a076727df96303b928a63027924ef","url":"static/js/Footer.6c0214e8.chunk.js"},{"revision":"e9ac8f6b9660e884cd322939df3f2d2c","url":"static/js/Home.b19bee1b.chunk.js"},{"revision":"2b1d9bf5eae6081cc5c45fb3b59b96f1","url":"static/js/Level.6b37d99b.chunk.js"},{"revision":"3f8b1dcd748bcf255bc423500bd2451f","url":"static/js/main.34fc22aa.chunk.js"},{"revision":"ce517d2a939059423bd6cf67552b03ae","url":"static/js/Minigraph.f23ca9da.chunk.js"},{"revision":"0042129d29c057b1fa141d09b00a9cc6","url":"static/js/Row.c67bdbc0.chunk.js"},{"revision":"f09f0400ebb46a2145e0f91302d087b4","url":"static/js/runtime-main.42cdf323.js"},{"revision":"3ab1597a19c2d4afc8b96490e0c5a7cd","url":"static/js/State.56bac09c.chunk.js"},{"revision":"9169b3d8ff95f4c72b11dfd0563de887","url":"static/js/Table.d999e619.chunk.js"},{"revision":"8e1e5bbe547fe6459a183123f5db6ac8","url":"static/js/TimeSeries.5999c98f.chunk.js"},{"revision":"da2076576ebe9fc4942283317808fb91","url":"static/js/TimeSeriesExplorer.d4ee7112.chunk.js"},{"revision":"172a279299ddcd41b4afd1c64fc8228b","url":"static/js/Updates.098d2522.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
