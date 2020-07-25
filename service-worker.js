if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"5939ff539db30aa30b0baa5a80ccaf78","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"5939ff539db30aa30b0baa5a80ccaf78","url":"index.html"},{"revision":"d678e492b55f0150751b5a657336d669","url":"precache-manifest.d678e492b55f0150751b5a657336d669.js"},{"revision":"d80126387a0fcd481e4a097e1cdd2bbe","url":"static/css/22.ab33d419.chunk.css"},{"revision":"f8f2a80b126c6ada9a133e891b3e81bd","url":"static/css/23.e6f51e71.chunk.css"},{"revision":"eb00348a717c8f51b0ab7ede28eab68b","url":"static/css/App.74e2d825.chunk.css"},{"revision":"0d5b1553ad3faee8b22afe7ddabcf922","url":"static/js/0.9ee864c6.chunk.js"},{"revision":"0f7a1afea26a3f615741879d1e09729a","url":"static/js/1.4a6f3135.chunk.js"},{"revision":"17c5f8cfcf1feedce4859bd634a7276e","url":"static/js/2.4b62d43f.chunk.js"},{"revision":"c1ed66c14d0111169e6b907654f7ffa9","url":"static/js/20.f0391806.chunk.js"},{"revision":"7ec8977b394f0a79471557b5abf8f517","url":"static/js/21.c81e62a9.chunk.js"},{"revision":"1746ff686d829f785447f2530844e851","url":"static/js/22.26874842.chunk.js"},{"revision":"36b98e94c6819d408260ba9ce33cb941","url":"static/js/23.c4e6fcf1.chunk.js"},{"revision":"d745c1cd5d9f2d6c97c27be8f1b17ade","url":"static/js/24.90c0bbe5.chunk.js"},{"revision":"75ca255aad0fe8f3a0ef3cd4ec45cf0d","url":"static/js/25.8f6e77eb.chunk.js"},{"revision":"2bc9c92c6421d18412f66badb8707331","url":"static/js/26.27582b8b.chunk.js"},{"revision":"616354826d269e05c8c202c3558aa3ea","url":"static/js/3.fa3e994b.chunk.js"},{"revision":"e2c4cc449e0fc1886555ab7c92063065","url":"static/js/4.761f0a73.chunk.js"},{"revision":"36591d0ff296091607ff1813be16cf13","url":"static/js/Actions.42ddc246.chunk.js"},{"revision":"b8cfe66659ff322ae37b91d7f3f02b52","url":"static/js/App.f1c45638.chunk.js"},{"revision":"804417502c564bc32bd1a12efa426a4a","url":"static/js/Footer.4a94fe84.chunk.js"},{"revision":"e3c410dfca6874d9382bf80992811a89","url":"static/js/Home.534023dd.chunk.js"},{"revision":"5188759b92192f249d83d0ca30169a30","url":"static/js/LanguageSwitcher.7ef1057d.chunk.js"},{"revision":"ecc9e88bbf71b73f4731eb00161e7c2b","url":"static/js/Level.7ace48e8.chunk.js"},{"revision":"6a198d83fef38d505b8b1e8aac7984b7","url":"static/js/main.48e53f07.chunk.js"},{"revision":"4471a0b838d4f1cc553cca636e267b0c","url":"static/js/Minigraph.066df860.chunk.js"},{"revision":"c9c82c32d7b9383a148d0d102e2cece2","url":"static/js/Row.a01b3649.chunk.js"},{"revision":"29b14d2998d5b686f0685e98338a7651","url":"static/js/runtime-main.0001ae88.js"},{"revision":"26f41ef460cd65984ba5b6cbc8efe731","url":"static/js/State.c3a563b0.chunk.js"},{"revision":"a5f9908ccdb63dc3309b366e9a9ac654","url":"static/js/Table.ce8fd9b8.chunk.js"},{"revision":"8684123075c9b6c2cc647c881b1962d2","url":"static/js/TimeSeries.2a6817cc.chunk.js"},{"revision":"bc2b2abaaf66adf75907e53aa278c115","url":"static/js/TimeSeriesExplorer.d0a9f69f.chunk.js"},{"revision":"d2659059e45fe55b3aa724c697de7001","url":"static/js/Updates.173b8c6b.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
