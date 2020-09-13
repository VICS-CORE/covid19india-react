if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"8b19df69124b2eef814b3c3745b95d28","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"8b19df69124b2eef814b3c3745b95d28","url":"index.html"},{"revision":"2abdd2c7b59c271af9695aca97f319fb","url":"precache-manifest.2abdd2c7b59c271af9695aca97f319fb.js"},{"revision":"0a979ab665f5310e90d8f86f3c668fb9","url":"static/css/22.93b3b32d.chunk.css"},{"revision":"a5b65d5fea6ff784665f8b089748d3c1","url":"static/css/27.5a4f931b.chunk.css"},{"revision":"9367d740c81fc35fec3ca8f87ccd8005","url":"static/css/App.87a2b34f.chunk.css"},{"revision":"105d3fa1d427a237437c6a8a3a587f2d","url":"static/js/0.53301f3a.chunk.js"},{"revision":"19030ff9b740b5fabf8aa7059f05d10d","url":"static/js/1.867c685d.chunk.js"},{"revision":"4cbe59e3785e1b100c400ec54784e13a","url":"static/js/2.0d10409c.chunk.js"},{"revision":"406018a032c27bdad94bd6e5db16e5a4","url":"static/js/20.b671f769.chunk.js"},{"revision":"7fb601e73312fc1fc6241e8de1a1ed8e","url":"static/js/21.704c7ee3.chunk.js"},{"revision":"21c15cf8c0bcf2a69826069e2ca4cc56","url":"static/js/22.d60960ff.chunk.js"},{"revision":"fafe92aa440f6713ed412ed79c2fbf8f","url":"static/js/23.ca22d16f.chunk.js"},{"revision":"a8313828bf4f6aa13d27ba29ffa77ab2","url":"static/js/24.3e52f8ec.chunk.js"},{"revision":"1c81f5b5793eb50a1476ffec98da2187","url":"static/js/25.db75a0ba.chunk.js"},{"revision":"c9001f2d08153efe8206d4b5dd4feed6","url":"static/js/26.f6e8b719.chunk.js"},{"revision":"f1a29fb297c9e7377661ea64d261f442","url":"static/js/27.5f75495c.chunk.js"},{"revision":"2284166eda6e5e0dff22f762e1f2bf2c","url":"static/js/3.f8ea1aca.chunk.js"},{"revision":"44430b10c75257950a781f8b4ad4c16f","url":"static/js/4.73f55364.chunk.js"},{"revision":"8b606e9b525cb72952fa67de5f36395a","url":"static/js/5.14cec392.chunk.js"},{"revision":"aff8ad5bafc361c59ca6f372d4d018ea","url":"static/js/Actions.de638c95.chunk.js"},{"revision":"d1e4ba67ec502fc90548f6194f04bfd8","url":"static/js/App.ef46c0d7.chunk.js"},{"revision":"27d053e4058ba500aeb8165bd1f2102d","url":"static/js/Footer.2962a167.chunk.js"},{"revision":"a4c45ca072dedd43eb16a91b1f35f0ef","url":"static/js/Home.8533f4f4.chunk.js"},{"revision":"aa06220200e4578d70bbfca35ac00c96","url":"static/js/Level.741ae870.chunk.js"},{"revision":"d0b1eeac3011e4e2bf3ec128ea8d88a5","url":"static/js/main.6435ff3f.chunk.js"},{"revision":"4918f3bc370017d4e9e7fee18287430d","url":"static/js/Minigraph.221fc37e.chunk.js"},{"revision":"0b7988379ca9185e8eac79c5f119570d","url":"static/js/Row.33a877fc.chunk.js"},{"revision":"4364212bd28b23fe90465f861c75511a","url":"static/js/runtime-main.9107b75c.js"},{"revision":"9ed901a5867cea5bcc2ca44f40509e1e","url":"static/js/State.10105144.chunk.js"},{"revision":"5430d085d69e97e334ca165529c689c9","url":"static/js/Table.a166e278.chunk.js"},{"revision":"7301a0eefa6b1334c3ed9ecd0d198742","url":"static/js/TimeSeries.3bd3b15c.chunk.js"},{"revision":"07334ae039f145be9ffaf20a3f76759a","url":"static/js/TimeSeriesExplorer.d37ec9fc.chunk.js"},{"revision":"0d30635b690a77d74e2e0ef5d3aafd30","url":"static/js/Updates.0bd883d4.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
