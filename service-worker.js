if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"bd841849beff1f5c78ace9027d9ac7e0","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"bd841849beff1f5c78ace9027d9ac7e0","url":"index.html"},{"revision":"ee334cdebf0320d6ed872015e50dd0bd","url":"precache-manifest.ee334cdebf0320d6ed872015e50dd0bd.js"},{"revision":"0d43ef90fa6a51cba8b57c78c49c2580","url":"static/css/2.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"43d5beb559cf4000a332aa479d9ff519","url":"static/js/0.14dca4c7.chunk.js"},{"revision":"3b64406d4c930b58cd1b6841912e6bb5","url":"static/js/1.ade735cc.chunk.js"},{"revision":"0af87f5f327128fd674bf6d04512ee11","url":"static/js/2.2f3a5268.chunk.js"},{"revision":"b2dfb4a83c3c264d3628bb954d3a93f9","url":"static/js/26.849d976c.chunk.js"},{"revision":"a1486a8ca6be7fa85dca9e26b6125a86","url":"static/js/27.6b06a61f.chunk.js"},{"revision":"d2ddbd7fbe44237b4dfe40a4a0c7afeb","url":"static/js/28.77dca613.chunk.js"},{"revision":"ca4f90f2a845557404cdc9adfbca2dc6","url":"static/js/29.34b9959b.chunk.js"},{"revision":"98e7d6b83406f0f9c9dcaae84461235f","url":"static/js/3.ce488639.chunk.js"},{"revision":"b6132f106417de2b27956a0bcef46b1c","url":"static/js/30.c4be960c.chunk.js"},{"revision":"eceab1b01dfa601eb433634b1af827b4","url":"static/js/31.8b90aae9.chunk.js"},{"revision":"0815fdb975de1825e981fa16e8ba8bd8","url":"static/js/32.78724339.chunk.js"},{"revision":"d6e7b3f46d566dde5b9c183dd95f23dc","url":"static/js/33.ef4b826b.chunk.js"},{"revision":"d56f161b2e0eb1f6bef93d0bac26768b","url":"static/js/4.c316c140.chunk.js"},{"revision":"60a449a4ec66b61ae791503a68751c4b","url":"static/js/5.0ac7e880.chunk.js"},{"revision":"7232919e11765a4f2e14132c544e1e83","url":"static/js/About.d45acfb9.chunk.js"},{"revision":"20a4d0a60ed4ab97c7e050dafa27ed44","url":"static/js/Actions.eed4b962.chunk.js"},{"revision":"7ffff5b4d0d121008bf223967e1aba20","url":"static/js/App.748934e7.chunk.js"},{"revision":"2b1895f2ae800be7e3794500896a6188","url":"static/js/Demographics.bdea066c.chunk.js"},{"revision":"a112bb479ef1f24e897cccfada68dbf0","url":"static/js/Essentials.68a7e9f4.chunk.js"},{"revision":"d722d0d132aae4addc7d91c39e718ef0","url":"static/js/Footer.42eb1a37.chunk.js"},{"revision":"a2987722365bad0f6d047f19bba6bd52","url":"static/js/Home.07316c89.chunk.js"},{"revision":"d189395cf4ab62216499b01145fb0f82","url":"static/js/LanguageSwitcher.b8894040.chunk.js"},{"revision":"619eefb158837d4ee5eccf73e14be1f0","url":"static/js/Level.5dee6409.chunk.js"},{"revision":"4e6345d6576ba9d5b303c3799fedf0d7","url":"static/js/main.62d2dac9.chunk.js"},{"revision":"dd3a365e17d154050c855535adedfbc1","url":"static/js/MapExplorer.d32d6374.chunk.js"},{"revision":"d3d424e17b7d86ef531ff57bc1ad9ad1","url":"static/js/MapVisualizer.a2cde746.chunk.js"},{"revision":"13e8a8f850cc59ea67c1cb8217ebf80c","url":"static/js/Minigraph.191e084e.chunk.js"},{"revision":"b168bc1153c19e682fc875977cd2186e","url":"static/js/Row.5083614f.chunk.js"},{"revision":"54b988e365f564aeea59bdbd8dc17050","url":"static/js/runtime-main.08dd142d.js"},{"revision":"35d7be4cb0117caec7c22318a23ac383","url":"static/js/State.efc6e026.chunk.js"},{"revision":"5526b67a7f8432da507fa068c22da5b0","url":"static/js/Table.1db749ec.chunk.js"},{"revision":"1f2c6c1447246b043fc389456c04eb3f","url":"static/js/TimeSeries.45cf71aa.chunk.js"},{"revision":"ad8f39aeb0cae90bf65ff1ac3df46a81","url":"static/js/TimeSeriesExplorer.5f125aaf.chunk.js"},{"revision":"094000f9a88749cf900bd2a7496e24a6","url":"static/js/Updates.8ca24909.chunk.js"}]);

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
