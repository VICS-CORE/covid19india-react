if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"efdfc0d9e3a775310a48c314aa5c69a1","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"efdfc0d9e3a775310a48c314aa5c69a1","url":"index.html"},{"revision":"50eda76553185d81109d3726d7a71c50","url":"precache-manifest.50eda76553185d81109d3726d7a71c50.js"},{"revision":"0d43ef90fa6a51cba8b57c78c49c2580","url":"static/css/2.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"0f07007fea7a8ddb8f81a4b9b820052f","url":"static/js/0.94780257.chunk.js"},{"revision":"1c9d3f9495c75a8943337422c80c5ca1","url":"static/js/1.4ce8bed7.chunk.js"},{"revision":"ce96937e297be58b575570c185a06367","url":"static/js/2.5e6223ad.chunk.js"},{"revision":"b2dfb4a83c3c264d3628bb954d3a93f9","url":"static/js/26.849d976c.chunk.js"},{"revision":"59218607a8a8ebe690b9ca6a58525088","url":"static/js/27.38669ef3.chunk.js"},{"revision":"668b02f616589189120fc535843ca401","url":"static/js/28.b9611f55.chunk.js"},{"revision":"f5f71c9aa4315d0d76f5ae73afa13d39","url":"static/js/29.ebe67992.chunk.js"},{"revision":"98e7d6b83406f0f9c9dcaae84461235f","url":"static/js/3.ce488639.chunk.js"},{"revision":"3f780ece7d90299ac983903bfe8f9eef","url":"static/js/30.bd975c27.chunk.js"},{"revision":"a71ba6489e2ba9430d3e40c13019e471","url":"static/js/31.c176d1b5.chunk.js"},{"revision":"0815fdb975de1825e981fa16e8ba8bd8","url":"static/js/32.78724339.chunk.js"},{"revision":"d6e7b3f46d566dde5b9c183dd95f23dc","url":"static/js/33.ef4b826b.chunk.js"},{"revision":"40d9e9a540b7ad04d67e1806f74b683c","url":"static/js/4.c7edd7cd.chunk.js"},{"revision":"60a449a4ec66b61ae791503a68751c4b","url":"static/js/5.0ac7e880.chunk.js"},{"revision":"102dbf995199854d04714b507f46b5a6","url":"static/js/About.513c2286.chunk.js"},{"revision":"5f093d0c261d0b3e9669badb40127d86","url":"static/js/Actions.c08a1f77.chunk.js"},{"revision":"ff16d5d1e043355a352fb6bf28cc8f8b","url":"static/js/App.9c0554d5.chunk.js"},{"revision":"dd22cfd4f5cfeb18fb6b7dd5099abadf","url":"static/js/Demographics.b97e07e1.chunk.js"},{"revision":"161fe513ad8e343d311e738bb612820d","url":"static/js/Essentials.fc56f603.chunk.js"},{"revision":"24a5084228b219e5c9c4e2c17c17948d","url":"static/js/Footer.d761ba08.chunk.js"},{"revision":"d95df7bab458c434df367c2c8660774f","url":"static/js/Home.a197652f.chunk.js"},{"revision":"7049cdf8e9b232e4c50bb4e1ed8ffb3f","url":"static/js/LanguageSwitcher.44076172.chunk.js"},{"revision":"42421939d31af534000258690503d46b","url":"static/js/Level.debfdae8.chunk.js"},{"revision":"a7b9be1211c61811f6728fc5a8af5bc4","url":"static/js/main.f65a72ef.chunk.js"},{"revision":"5e722e65f7494ce4feea77c31efab907","url":"static/js/MapExplorer.05528295.chunk.js"},{"revision":"938ba42062d534c3946dd07fd2506860","url":"static/js/MapVisualizer.f6f6c03c.chunk.js"},{"revision":"f6f58bb5a8c4e02ff89ebbcb1fe6c0e2","url":"static/js/Minigraph.2af06767.chunk.js"},{"revision":"1450b0b6bec76779eaa75ce2219c5a67","url":"static/js/Row.76ba9695.chunk.js"},{"revision":"9ccaf629f5d19ff59eb914ca81fe055a","url":"static/js/runtime-main.c94d1ba8.js"},{"revision":"bddc48243af9f35b9613b4273ffd4c19","url":"static/js/State.de7618b4.chunk.js"},{"revision":"59eada5dc4d2a46f18aefc5ed11a53f3","url":"static/js/Table.92b60b71.chunk.js"},{"revision":"552b23c6456ff1c6e561af80e0666998","url":"static/js/TimeSeries.7832917d.chunk.js"},{"revision":"8307608d1693894021c2bbe011b2d773","url":"static/js/TimeSeriesExplorer.4b83b37e.chunk.js"},{"revision":"20924638ce27bc13f7c928a304ac2c55","url":"static/js/Updates.cc413222.chunk.js"}]);

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
