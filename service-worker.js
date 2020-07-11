if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"51e1adc1329fc5690589fc5a1b5783ff","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"51e1adc1329fc5690589fc5a1b5783ff","url":"index.html"},{"revision":"18dd3a3e0a813b3fe11d8cc56af0b312","url":"precache-manifest.18dd3a3e0a813b3fe11d8cc56af0b312.js"},{"revision":"da4896899e6af9ce0a99210d5bbf8e17","url":"static/css/26.ab33d419.chunk.css"},{"revision":"7aa785dc7c7bf0bb6db2d59119c2c868","url":"static/css/3.e6f51e71.chunk.css"},{"revision":"58742e838ea9570ee72c68a6e1539f72","url":"static/css/App.d077cba5.chunk.css"},{"revision":"c523816553b0bb8c3f8300da4525d767","url":"static/js/0.86464dc9.chunk.js"},{"revision":"d799baf936c589939a384c964e95cd4f","url":"static/js/1.9d2caefc.chunk.js"},{"revision":"09843204c819d3c9c799d4bf58df6bbc","url":"static/js/2.13c3f40b.chunk.js"},{"revision":"8f9083a0949390e1c20ea0568878b45a","url":"static/js/24.1dc4bf66.chunk.js"},{"revision":"779eb94ae962b68e26f67e32b744b824","url":"static/js/25.f6dc573c.chunk.js"},{"revision":"3dbe13119ad2a10cc191c5402315c5c9","url":"static/js/26.e2999636.chunk.js"},{"revision":"2a0f07df45706040ed95aaf3df854669","url":"static/js/27.943d71d3.chunk.js"},{"revision":"baba0459a5702a990067df432c358d55","url":"static/js/28.2466e5a5.chunk.js"},{"revision":"786f22fb0b3681edb188d404078d0497","url":"static/js/29.03178e81.chunk.js"},{"revision":"ae5e2077985b1d5affceb36d14212ab1","url":"static/js/3.437a5a10.chunk.js"},{"revision":"642453ad0ec16f941bb71943d727ec9d","url":"static/js/30.37d31dff.chunk.js"},{"revision":"4189bde09875b581159c4edfadc65204","url":"static/js/4.a994d6af.chunk.js"},{"revision":"8d3a369ef6e8b5514a0012df91899072","url":"static/js/5.8251ca14.chunk.js"},{"revision":"24e06b9b8f0a06a883fab5626b791f70","url":"static/js/6.dbd2c2f7.chunk.js"},{"revision":"7b770dc694cbbc8bf62adc64c8cb2b3a","url":"static/js/Actions.87b85024.chunk.js"},{"revision":"4a60d7309f2d7c2dc434d7d2a46f85e3","url":"static/js/App.cbd86dcc.chunk.js"},{"revision":"4a2aa398980072979e4c37287320fb3b","url":"static/js/Footer.c62fe6bd.chunk.js"},{"revision":"944c630edcb052d3f1e8c5b21b3215ab","url":"static/js/Home.b8719e1d.chunk.js"},{"revision":"0fd2d90f227321a5b6345a8480d1e861","url":"static/js/LanguageSwitcher.47faa83e.chunk.js"},{"revision":"9bc21bb5813dcf0471ccb51d0576318c","url":"static/js/Level.1dad60c4.chunk.js"},{"revision":"bd421e2bdd6f23ac1cb1c2831bc037a3","url":"static/js/main.53c42e2a.chunk.js"},{"revision":"bfe214828fe164b9fcbaf2e7405d055d","url":"static/js/MapExplorer.58fcefb2.chunk.js"},{"revision":"1bc13c45325ee2b24b4b2c1844cb5aaf","url":"static/js/MapVisualizer.6c089c50.chunk.js"},{"revision":"f2808b2aafdd4c4316fd5ff50ea16bcd","url":"static/js/Minigraph.7747b949.chunk.js"},{"revision":"1c633fa63332f626cdde1a8f28d717f1","url":"static/js/Row.379e1fa2.chunk.js"},{"revision":"fa158f85b4f69950984599c3c4c8cb6f","url":"static/js/runtime-main.7010c5b1.js"},{"revision":"0ffce2893bdab616416fc330a4780dde","url":"static/js/State.c77b607d.chunk.js"},{"revision":"4d6d553f25d8e0216504b40f60545e9a","url":"static/js/Table.21abe8b3.chunk.js"},{"revision":"4561bdf6490c3f9f1fcae627a67a759c","url":"static/js/TimeSeries.28ab9deb.chunk.js"},{"revision":"c86cd1c873e6253913bd14edac6fb76a","url":"static/js/TimeSeriesExplorer.10caa432.chunk.js"},{"revision":"2ee0ad204782b143c29485f81ad38dad","url":"static/js/Updates.69ee546e.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
