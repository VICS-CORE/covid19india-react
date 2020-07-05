if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"5dc00e3c44bbac1ac8b8bf938601e89e","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"5dc00e3c44bbac1ac8b8bf938601e89e","url":"index.html"},{"revision":"aec7cf4fbe7b030fa367125de7a76434","url":"precache-manifest.aec7cf4fbe7b030fa367125de7a76434.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"0789fd35f74d85561dc51f92f036f0c8","url":"static/css/5.e6f51e71.chunk.css"},{"revision":"052ff4287f996dadcba3f40eda956f3d","url":"static/css/App.5031b4d1.chunk.css"},{"revision":"db93fdb32c54c3c0760ceac9b50caf8d","url":"static/js/0.e8e424fa.chunk.js"},{"revision":"5edfdce290978ec87f83d0340b8e71b6","url":"static/js/1.ef2613c0.chunk.js"},{"revision":"823589ca7d647331b963430261624825","url":"static/js/2.bf822a9b.chunk.js"},{"revision":"83d9f17ba8dc11def797d730c3138303","url":"static/js/27.78eee474.chunk.js"},{"revision":"710cf2dba92ae38329e600e92fcb0451","url":"static/js/28.e74881e3.chunk.js"},{"revision":"8cbecc20f745f76de2d293572f6e00b0","url":"static/js/29.e9ae38d9.chunk.js"},{"revision":"88b4875982757b924344abf7d8f8ab7a","url":"static/js/3.d8b1714a.chunk.js"},{"revision":"f4e16ecb240729f6cf770601a7eab167","url":"static/js/30.cdd2a503.chunk.js"},{"revision":"ce0a6768ba83c6cf29f39ce6f0837f81","url":"static/js/31.f9f23692.chunk.js"},{"revision":"8a74e24d45faf66f589e18afb6e67760","url":"static/js/32.5ded357e.chunk.js"},{"revision":"0354de7b258532d97704021b43ecb6f7","url":"static/js/33.ec0b780d.chunk.js"},{"revision":"49b9742f2e46c62397ee81026ee9cb25","url":"static/js/34.49ce8add.chunk.js"},{"revision":"e6247b051526ea569ebe9d4a83e32e37","url":"static/js/35.92fd9711.chunk.js"},{"revision":"2ca85fc80e557805f96c8b296d96a063","url":"static/js/4.7dbf955f.chunk.js"},{"revision":"d712a156fe71045b595f91a7d7ae460d","url":"static/js/5.9179f720.chunk.js"},{"revision":"3a3836cfc2d8ffff2984a44e7768e753","url":"static/js/6.21342554.chunk.js"},{"revision":"5edfed631377560d7a6d863aef9a365b","url":"static/js/7.168d0535.chunk.js"},{"revision":"662742346fcb696388ceb96c73c08030","url":"static/js/Actions.1f0be1cf.chunk.js"},{"revision":"a73b568cb08cf8302d5e4dd0444934c1","url":"static/js/App.e308fe6f.chunk.js"},{"revision":"d5bd388fa26140076803b14448727ef4","url":"static/js/Demographics.6ea082bc.chunk.js"},{"revision":"711c57df5fda6feff617e15009b8b3d5","url":"static/js/Essentials.e5681aa6.chunk.js"},{"revision":"e284a93d6cb0c49bdc945516313f9478","url":"static/js/Footer.b7ff6de1.chunk.js"},{"revision":"05a8e7d23fad18d60e7fe5db2eaa6fb2","url":"static/js/Home.cfd5ea84.chunk.js"},{"revision":"33a1104fb73acf73a6f267b5f4d8cfca","url":"static/js/LanguageSwitcher.fb30e979.chunk.js"},{"revision":"cfac34403015e32a248c431d750e79f0","url":"static/js/Level.8de8d8cc.chunk.js"},{"revision":"1ff1bd16daf91744ba4a1070df23b7a0","url":"static/js/main.19cca970.chunk.js"},{"revision":"4b829b2a28adbeeb8f7a3815c52b513b","url":"static/js/MapExplorer.bbc48f69.chunk.js"},{"revision":"ba64ea9cf943ba62049a562aedbd093a","url":"static/js/MapVisualizer.29cb8e91.chunk.js"},{"revision":"9f2d5373480ef4edd06ac97f319c2fb9","url":"static/js/Minigraph.8e223ac1.chunk.js"},{"revision":"d910d5b06c65ef8addf98a94d014703a","url":"static/js/Row.1d0277aa.chunk.js"},{"revision":"c109226840942249a4d9c123740f75bb","url":"static/js/runtime-main.25f608c3.js"},{"revision":"c171542ccc41ba4344c75f6c5afe80db","url":"static/js/State.11824d17.chunk.js"},{"revision":"20143b6818554740bd92abf5db24e78b","url":"static/js/Table.e556a0a3.chunk.js"},{"revision":"282675390a442200556bab14ed97df31","url":"static/js/TimeSeries.ee626e95.chunk.js"},{"revision":"ab853327123587ca88ba45901372fca8","url":"static/js/TimeSeriesExplorer.d7b1d7e0.chunk.js"},{"revision":"19ff5741d9b77b152a04aacc8da6bac4","url":"static/js/Updates.447a74c3.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
