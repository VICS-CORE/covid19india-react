if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"72027ed796704c362029b704f9812ed9","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"72027ed796704c362029b704f9812ed9","url":"index.html"},{"revision":"2f70e9c06f46f7f4667f9d300be35497","url":"precache-manifest.2f70e9c06f46f7f4667f9d300be35497.js"},{"revision":"da4896899e6af9ce0a99210d5bbf8e17","url":"static/css/26.ab33d419.chunk.css"},{"revision":"5b4d9a7394a680a9a513d1123b9b16b6","url":"static/css/4.e6f51e71.chunk.css"},{"revision":"63c088bdb2cc24ec310e844089602d8c","url":"static/css/App.d28d4789.chunk.css"},{"revision":"05773676df3d2ba1d5350584f47107db","url":"static/js/0.3e92507a.chunk.js"},{"revision":"d799baf936c589939a384c964e95cd4f","url":"static/js/1.9d2caefc.chunk.js"},{"revision":"2edab9ea7143f7c12de338d0cd8186bc","url":"static/js/2.d1267769.chunk.js"},{"revision":"8f9083a0949390e1c20ea0568878b45a","url":"static/js/24.1dc4bf66.chunk.js"},{"revision":"779eb94ae962b68e26f67e32b744b824","url":"static/js/25.f6dc573c.chunk.js"},{"revision":"1a6f647b8187b4f788bb543bdf15781f","url":"static/js/26.4a95f02c.chunk.js"},{"revision":"1b7a2e5c159754c3d2aaaa4606fa2a17","url":"static/js/27.a40dd646.chunk.js"},{"revision":"1246455bce3874e1c5ffc216afbbb750","url":"static/js/28.f977c250.chunk.js"},{"revision":"c9b6204f0e274b7fdf24d9937cb46259","url":"static/js/29.c87934e2.chunk.js"},{"revision":"568af7f27a5cca092c277a440b3b8c04","url":"static/js/3.a98d8476.chunk.js"},{"revision":"642453ad0ec16f941bb71943d727ec9d","url":"static/js/30.37d31dff.chunk.js"},{"revision":"098f3608a4a308fdb28f6447a845396a","url":"static/js/4.1eafdf31.chunk.js"},{"revision":"817ae1c1a102294493545c58fd2542dc","url":"static/js/5.33b071ed.chunk.js"},{"revision":"e7af8563e269b2be3f719889c86b8983","url":"static/js/6.2aed72fb.chunk.js"},{"revision":"7b770dc694cbbc8bf62adc64c8cb2b3a","url":"static/js/Actions.87b85024.chunk.js"},{"revision":"00807c493de396c6174cf1fb3bf807e2","url":"static/js/App.b258dcae.chunk.js"},{"revision":"fdfb0464f06da1a4ea722345e9ba1fb2","url":"static/js/Footer.8fe619fa.chunk.js"},{"revision":"56ec5b6ec2e1043fd1d528aa300d3963","url":"static/js/Home.0de68b13.chunk.js"},{"revision":"12cf585be0b3503d7295b2da1c1c863a","url":"static/js/LanguageSwitcher.ba460d00.chunk.js"},{"revision":"586bcbe7959649b94436854ace37e3ee","url":"static/js/Level.b4913295.chunk.js"},{"revision":"e99c4b3345eaa9fc812fb7f19eee8099","url":"static/js/main.3bb4302f.chunk.js"},{"revision":"b3c693087bce64694048486aaadc15b7","url":"static/js/MapExplorer.40e29aea.chunk.js"},{"revision":"f92ecf8931a8c7366c1a23a569d523ce","url":"static/js/MapVisualizer.2cfef129.chunk.js"},{"revision":"657e6aa77e2b58a8c462142c886de959","url":"static/js/Minigraph.51bdeaea.chunk.js"},{"revision":"ba11bac87d4cdc13ef451ba48a7e0be7","url":"static/js/Row.d37ed92e.chunk.js"},{"revision":"da6df49743ee154289df9e8d887a4c48","url":"static/js/runtime-main.f77dea89.js"},{"revision":"584907039c87eadf13a012de80206b0f","url":"static/js/State.1a844c90.chunk.js"},{"revision":"58ed7f9bf22da956cb1d87908c04925e","url":"static/js/Table.3f5fc39e.chunk.js"},{"revision":"91c8ee42a37aa61bc5959c7cfa623c9e","url":"static/js/TimeSeries.3dec33a4.chunk.js"},{"revision":"8b02336b044010a08947aeaf2c10a09b","url":"static/js/TimeSeriesExplorer.cd7140a7.chunk.js"},{"revision":"2ee0ad204782b143c29485f81ad38dad","url":"static/js/Updates.69ee546e.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
