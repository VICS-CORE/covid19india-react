if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"a9c6ddcab47aeb1486acc3eafecd0212","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"a9c6ddcab47aeb1486acc3eafecd0212","url":"index.html"},{"revision":"1345fc1588ce55a4156aa1ea82d5421b","url":"precache-manifest.1345fc1588ce55a4156aa1ea82d5421b.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"d053c99beec7e1f69298d21aea0e7dff","url":"static/js/0.edb58539.chunk.js"},{"revision":"d3e103d11b23f9d611f554035e510e8a","url":"static/js/1.949f9d2f.chunk.js"},{"revision":"90790469e3b0535d1682826b918ca1db","url":"static/js/2.35c5f009.chunk.js"},{"revision":"d535eac263118c6c81689665f5daa079","url":"static/js/25.135bcf83.chunk.js"},{"revision":"58b714b59b3d34ec2322c05cb4432331","url":"static/js/26.2b05191b.chunk.js"},{"revision":"80113fc125193f4d580f1216e257c77e","url":"static/js/27.c909c7c7.chunk.js"},{"revision":"35cfea212b51c57bc0b59f8a6bae8447","url":"static/js/28.4484f0d6.chunk.js"},{"revision":"ab748f48a40fa408300a56102adacdb0","url":"static/js/29.26ca0063.chunk.js"},{"revision":"51fdbc516e4c1c2ffabdb837d749117a","url":"static/js/3.a51422ff.chunk.js"},{"revision":"82904632bee0aa1e8866ef62dca45a49","url":"static/js/30.61db1616.chunk.js"},{"revision":"8152a1bb3ecc36f0e6c0ae087faf7498","url":"static/js/31.9cf34a45.chunk.js"},{"revision":"a02bbbb0a423dec5611e746a50dd330b","url":"static/js/32.ccf435c3.chunk.js"},{"revision":"78bfe4cff0fc4eee27bd472cfbe1f4e0","url":"static/js/4.db156932.chunk.js"},{"revision":"f3f6d708b67dc0a9a9db9ff0d08642ef","url":"static/js/5.50c47141.chunk.js"},{"revision":"63a00aa4657da5768ba82e45e4f822cf","url":"static/js/Actions.c492a10f.chunk.js"},{"revision":"cc1a079e4ee29f0ea4f0feac426e5f73","url":"static/js/App.0887f7f7.chunk.js"},{"revision":"9cdfc87264279ff66e6f350fdf4b857c","url":"static/js/Demographics.9ff70418.chunk.js"},{"revision":"5e2b8557ef865db67cac09d4160a968d","url":"static/js/Essentials.2f698962.chunk.js"},{"revision":"70572c98041909b46d64d0ba80e2fe3b","url":"static/js/Footer.2ed64b81.chunk.js"},{"revision":"4ea65c90240cbb1d63f06dd458987f5d","url":"static/js/Home.724852d2.chunk.js"},{"revision":"548401baf50ee7089cc201a87cb6ec42","url":"static/js/LanguageSwitcher.957e2392.chunk.js"},{"revision":"133f6dd89be0a4d96125988fb65d3f09","url":"static/js/Level.6f44cdf0.chunk.js"},{"revision":"c30809c1bed614647a4796617edfc3ed","url":"static/js/main.c8e5168d.chunk.js"},{"revision":"7f44ee8325a3d52c1ad3887a5bb4062c","url":"static/js/MapExplorer.d1c6b972.chunk.js"},{"revision":"7ab8719d3b2452c8f2e518e0672778ec","url":"static/js/MapVisualizer.ad235856.chunk.js"},{"revision":"9c70d7b819898cf29b024175a2c0d170","url":"static/js/Minigraph.899e7df3.chunk.js"},{"revision":"eef341388243f4d35d04f07ead2f7967","url":"static/js/Row.3f039c10.chunk.js"},{"revision":"79fd36e24e0db2234264041ff27c64b4","url":"static/js/runtime-main.5c69f3a7.js"},{"revision":"10f922096ad2759230373359ae2043d4","url":"static/js/State.d4dd0657.chunk.js"},{"revision":"1fd15e5cf16822d4d54de0fc781f0a1a","url":"static/js/Table.9e04feef.chunk.js"},{"revision":"9fd21eaa60b725fbe3b1676a14b1693f","url":"static/js/TimeSeries.ba2f9c19.chunk.js"},{"revision":"3753d31a31f44330b2d19783b014355c","url":"static/js/TimeSeriesExplorer.38721006.chunk.js"},{"revision":"a11789dd1af214e3e8a393eff2a533fd","url":"static/js/Updates.0d2d0a2d.chunk.js"}]);

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
