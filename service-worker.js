if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"eb11948b3b46f9930defbfe6ca510c8c","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"eb11948b3b46f9930defbfe6ca510c8c","url":"index.html"},{"revision":"440df490399c38a61ee6778b58b175a9","url":"precache-manifest.440df490399c38a61ee6778b58b175a9.js"},{"revision":"0d43ef90fa6a51cba8b57c78c49c2580","url":"static/css/2.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"43d5beb559cf4000a332aa479d9ff519","url":"static/js/0.14dca4c7.chunk.js"},{"revision":"1c9d3f9495c75a8943337422c80c5ca1","url":"static/js/1.4ce8bed7.chunk.js"},{"revision":"0af87f5f327128fd674bf6d04512ee11","url":"static/js/2.2f3a5268.chunk.js"},{"revision":"b2dfb4a83c3c264d3628bb954d3a93f9","url":"static/js/26.849d976c.chunk.js"},{"revision":"a1486a8ca6be7fa85dca9e26b6125a86","url":"static/js/27.6b06a61f.chunk.js"},{"revision":"d2ddbd7fbe44237b4dfe40a4a0c7afeb","url":"static/js/28.77dca613.chunk.js"},{"revision":"ca4f90f2a845557404cdc9adfbca2dc6","url":"static/js/29.34b9959b.chunk.js"},{"revision":"98e7d6b83406f0f9c9dcaae84461235f","url":"static/js/3.ce488639.chunk.js"},{"revision":"b6132f106417de2b27956a0bcef46b1c","url":"static/js/30.c4be960c.chunk.js"},{"revision":"eceab1b01dfa601eb433634b1af827b4","url":"static/js/31.8b90aae9.chunk.js"},{"revision":"0815fdb975de1825e981fa16e8ba8bd8","url":"static/js/32.78724339.chunk.js"},{"revision":"d6e7b3f46d566dde5b9c183dd95f23dc","url":"static/js/33.ef4b826b.chunk.js"},{"revision":"d56f161b2e0eb1f6bef93d0bac26768b","url":"static/js/4.c316c140.chunk.js"},{"revision":"60a449a4ec66b61ae791503a68751c4b","url":"static/js/5.0ac7e880.chunk.js"},{"revision":"7232919e11765a4f2e14132c544e1e83","url":"static/js/About.d45acfb9.chunk.js"},{"revision":"20a4d0a60ed4ab97c7e050dafa27ed44","url":"static/js/Actions.eed4b962.chunk.js"},{"revision":"01c01cbcc026873265edd3ae0da6f26f","url":"static/js/App.0c1ba9a3.chunk.js"},{"revision":"2b1895f2ae800be7e3794500896a6188","url":"static/js/Demographics.bdea066c.chunk.js"},{"revision":"a112bb479ef1f24e897cccfada68dbf0","url":"static/js/Essentials.68a7e9f4.chunk.js"},{"revision":"d722d0d132aae4addc7d91c39e718ef0","url":"static/js/Footer.42eb1a37.chunk.js"},{"revision":"a2987722365bad0f6d047f19bba6bd52","url":"static/js/Home.07316c89.chunk.js"},{"revision":"d189395cf4ab62216499b01145fb0f82","url":"static/js/LanguageSwitcher.b8894040.chunk.js"},{"revision":"68694cd8c44a4fdc19c436fcf2289bd4","url":"static/js/Level.e800a8ed.chunk.js"},{"revision":"36ee4c092e0ee5f6d66c70996d4dbeaf","url":"static/js/main.4f57a73d.chunk.js"},{"revision":"dd3a365e17d154050c855535adedfbc1","url":"static/js/MapExplorer.d32d6374.chunk.js"},{"revision":"d3d424e17b7d86ef531ff57bc1ad9ad1","url":"static/js/MapVisualizer.a2cde746.chunk.js"},{"revision":"13e8a8f850cc59ea67c1cb8217ebf80c","url":"static/js/Minigraph.191e084e.chunk.js"},{"revision":"a05dd86645eb0412d5aff07baa63d48a","url":"static/js/Row.bfbc0a6e.chunk.js"},{"revision":"fb07b9c0b162fbf45516662a482ceda3","url":"static/js/runtime-main.afe7a6e8.js"},{"revision":"35d7be4cb0117caec7c22318a23ac383","url":"static/js/State.efc6e026.chunk.js"},{"revision":"ad114afad74d456e7a105a4d3b30977a","url":"static/js/Table.b904c037.chunk.js"},{"revision":"1f2c6c1447246b043fc389456c04eb3f","url":"static/js/TimeSeries.45cf71aa.chunk.js"},{"revision":"b0961560a38f49e9b9d7bd74c56d32fc","url":"static/js/TimeSeriesExplorer.8309dedf.chunk.js"},{"revision":"094000f9a88749cf900bd2a7496e24a6","url":"static/js/Updates.8ca24909.chunk.js"}]);

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
