if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"87def9290cbaa34bad49597af8019d02","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"87def9290cbaa34bad49597af8019d02","url":"index.html"},{"revision":"fa883cf10ef938b30a8ffbb2ed125757","url":"precache-manifest.fa883cf10ef938b30a8ffbb2ed125757.js"},{"revision":"3b6e0495463f7b3e088bb90ed32c0c20","url":"static/css/22.b2135549.chunk.css"},{"revision":"6d5588ef3dc9262900a9a4d9c1109891","url":"static/css/23.93b3b32d.chunk.css"},{"revision":"0dbaded66d52f263e2e5d08a83323166","url":"static/css/28.5a4f931b.chunk.css"},{"revision":"9367d740c81fc35fec3ca8f87ccd8005","url":"static/css/App.87a2b34f.chunk.css"},{"revision":"b4606775e4828cac81d5e7e1d66afc84","url":"static/js/0.7a16869c.chunk.js"},{"revision":"e1d33d7343ecd7465d9a44d08ef2ae1c","url":"static/js/1.ee74e9de.chunk.js"},{"revision":"0c2754bfe1f4ce8756866619154ab04f","url":"static/js/2.8306e02a.chunk.js"},{"revision":"b18c8c1516112d00dddd7882e4fc0a9c","url":"static/js/20.33dbe86b.chunk.js"},{"revision":"473639fc29896f28bc22ccea79dce687","url":"static/js/21.6334bc3e.chunk.js"},{"revision":"f5475d8e3afd2250fbf0ab4d1d6622d1","url":"static/js/22.95ba315b.chunk.js"},{"revision":"980586ad5e3d7b250b3b3e60298c0997","url":"static/js/23.6607d9cc.chunk.js"},{"revision":"e2e53bc21162ed4679465bbb29824037","url":"static/js/24.04012da6.chunk.js"},{"revision":"365c1fb783d6f71abd516a4896d0b8c6","url":"static/js/25.e74092b2.chunk.js"},{"revision":"98e09294f9eb2b4f8c44c321884f8491","url":"static/js/26.8915b70c.chunk.js"},{"revision":"1349d682b22c726f939ecba56e4b8a69","url":"static/js/27.b18bca9e.chunk.js"},{"revision":"0f21c9186b74945165971fa438574089","url":"static/js/28.c1194cb0.chunk.js"},{"revision":"d1d690556f5f35dcf81eb094431dada9","url":"static/js/3.4e8559f5.chunk.js"},{"revision":"500d82aacc549cb2520607d8261b857d","url":"static/js/4.4c73d205.chunk.js"},{"revision":"b97375d06bfef093fb3ad967b3f6c167","url":"static/js/5.69c3b9f3.chunk.js"},{"revision":"0bab77d4bb901702fdfb90d9278bd5d0","url":"static/js/Actions.439881da.chunk.js"},{"revision":"cfb1cc8f3bbbd2fbd997b2f45b4cc677","url":"static/js/App.502eeef0.chunk.js"},{"revision":"e6d1e10c4a2e06484cfed57afb83e9b3","url":"static/js/Footer.efda358f.chunk.js"},{"revision":"132a069444e48a074b9f32d35c8f9c2d","url":"static/js/Home.a6c099e7.chunk.js"},{"revision":"eabe961f37f48a1f84e24efef4a84ab5","url":"static/js/Level.0099ccbe.chunk.js"},{"revision":"0a1e02a057577c6ef3720da5f44a50b7","url":"static/js/main.a9ff05e6.chunk.js"},{"revision":"59c4e5fce60ccaa075dcdc7f1b4fe98a","url":"static/js/Minigraph.bb5b5648.chunk.js"},{"revision":"357f620b8002f5a79e5970c57f4a33d6","url":"static/js/Row.baf48e7a.chunk.js"},{"revision":"1ad3b0afe3b8314408a4d091b93839a3","url":"static/js/runtime-main.3f582d9b.js"},{"revision":"7b5ad649e973f83b221c481273555cc4","url":"static/js/State.618afd5e.chunk.js"},{"revision":"2ad6bf09603d6d9d0a0851969ca9d226","url":"static/js/Table.3bd834e1.chunk.js"},{"revision":"ed4a8a24ad7d1d7cd2783beb51e83ffd","url":"static/js/TimeSeries.c09e37c3.chunk.js"},{"revision":"65d3996808da4c759e18ccfaa26bb9d9","url":"static/js/TimeSeriesExplorer.d461589a.chunk.js"},{"revision":"c3f823e617492208e13adabc40f4162d","url":"static/js/Updates.6456422c.chunk.js"},{"revision":"cac68c831145804808381a7032fdc7c2","url":"static/media/fa-brands-400.cac68c83.woff2"},{"revision":"3a3398a6ef60fc64eacf45665958342e","url":"static/media/fa-regular-400.3a3398a6.woff2"},{"revision":"c500da19d776384ba69573ae6fe274e7","url":"static/media/fa-solid-900.c500da19.woff2"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
