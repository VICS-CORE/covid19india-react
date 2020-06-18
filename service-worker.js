if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"816b64f778cdc914e3d83c23578734ec","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"816b64f778cdc914e3d83c23578734ec","url":"index.html"},{"revision":"0d340dd3723b89e3ead0dc2c64b4df4c","url":"precache-manifest.0d340dd3723b89e3ead0dc2c64b4df4c.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"9e97dba017eb11dd0f30966d05f12735","url":"static/js/0.b16e80c6.chunk.js"},{"revision":"035a56702b3d88241d4d9856e22c7856","url":"static/js/1.d55571bb.chunk.js"},{"revision":"2d5772ac731408304a501e5a2bf72c11","url":"static/js/2.2df454e7.chunk.js"},{"revision":"2fcb838f3a3d83cd35152270688d98c2","url":"static/js/26.db33eb35.chunk.js"},{"revision":"82c86ba7a443fda61bef405286451e99","url":"static/js/27.44d5352a.chunk.js"},{"revision":"3c5f1ba3fcbca31e0502b935d33aec92","url":"static/js/28.abcc71bd.chunk.js"},{"revision":"3448cf6609ec02d03523bf29ab07fc6f","url":"static/js/29.4a67605b.chunk.js"},{"revision":"4981b774b73598a651852c70af8ae8ae","url":"static/js/3.2e13d8ff.chunk.js"},{"revision":"a11eb8beb08b6ecab66464237314020b","url":"static/js/30.10ae3cc4.chunk.js"},{"revision":"dd950f7d146d78a7d4a0e2ba4540765f","url":"static/js/31.55854b22.chunk.js"},{"revision":"6bda358dd7cee322b64cdd220b16311c","url":"static/js/32.66775f4d.chunk.js"},{"revision":"5954ce53634f0f62e7a103c48e9e5f77","url":"static/js/33.9c080581.chunk.js"},{"revision":"78bfe4cff0fc4eee27bd472cfbe1f4e0","url":"static/js/4.db156932.chunk.js"},{"revision":"7c6d8b7ea4007d8b7cfe8c17aeab089b","url":"static/js/5.b9b3fa99.chunk.js"},{"revision":"9eb264493be60b030a4877af201cf8b2","url":"static/js/About.a34a0812.chunk.js"},{"revision":"7792665c0fc6cbcc0816ff99225d506a","url":"static/js/Actions.a135aeb1.chunk.js"},{"revision":"a54d33321c4c0cd668543b2316683691","url":"static/js/App.c65e1261.chunk.js"},{"revision":"d9842f63a18fdd57297bc66f523beace","url":"static/js/Demographics.f43b12c7.chunk.js"},{"revision":"03d547b85055d936fa5ae7fb0826c628","url":"static/js/Essentials.fdc55b01.chunk.js"},{"revision":"302b538c6258c77cf22371464bf97281","url":"static/js/Footer.2d91e707.chunk.js"},{"revision":"fe6b1ffb406732c16f41ea00bdc24314","url":"static/js/Home.f1c01499.chunk.js"},{"revision":"aa0fdc82a7e43507e7377c69bc3b22f9","url":"static/js/LanguageSwitcher.a9b7fa73.chunk.js"},{"revision":"b7261881f78dc0c3dd2efb2ab0d68f3a","url":"static/js/Level.2f078be6.chunk.js"},{"revision":"4a6747e6221d6a1e6ec1218bcc08cf1c","url":"static/js/main.ede19e92.chunk.js"},{"revision":"07e2044e529d5b008028493c406d9b62","url":"static/js/MapExplorer.a1c091ee.chunk.js"},{"revision":"643682ceb0996b8df5e4f1bfd11d4284","url":"static/js/MapVisualizer.2b042524.chunk.js"},{"revision":"6acd93267512fe2cf8d4a229adb2c201","url":"static/js/Minigraph.d1151f76.chunk.js"},{"revision":"cb0f9d0d33b739f931fa1cfa44879260","url":"static/js/Row.386f665e.chunk.js"},{"revision":"dcffe2b573e168c180c6180850368562","url":"static/js/runtime-main.6c1d3577.js"},{"revision":"3f7b36c4a8ead262755f207747315145","url":"static/js/State.725758b5.chunk.js"},{"revision":"0921e6b1fb78f708f68f7f5b7dd36a92","url":"static/js/Table.3f00768f.chunk.js"},{"revision":"7a7fe9739d017761b36cb5a2c303c390","url":"static/js/TimeSeries.bd679459.chunk.js"},{"revision":"9b500bbb595011fb138fef36c0c5c9fc","url":"static/js/TimeSeriesExplorer.cca4a9be.chunk.js"},{"revision":"4c9be64ff235ccacd085c34443d7490e","url":"static/js/Updates.3890ca2a.chunk.js"}]);

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
