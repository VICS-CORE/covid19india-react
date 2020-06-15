if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"994b0ad97522e7fb5b9b5058fca08adb","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"994b0ad97522e7fb5b9b5058fca08adb","url":"index.html"},{"revision":"dda4029d123752c8cb0fb50593993ab8","url":"precache-manifest.dda4029d123752c8cb0fb50593993ab8.js"},{"revision":"0d43ef90fa6a51cba8b57c78c49c2580","url":"static/css/2.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"ecd9791a33d065689e89a23f2d95bbd7","url":"static/js/0.539f8550.chunk.js"},{"revision":"3083a3d32e508f6693d380d3cbee4dd4","url":"static/js/1.accd919a.chunk.js"},{"revision":"04ff9c532c7c6fd59c326234cd94bf79","url":"static/js/2.54e5e1a3.chunk.js"},{"revision":"b2dfb4a83c3c264d3628bb954d3a93f9","url":"static/js/26.849d976c.chunk.js"},{"revision":"5f11c5c51084d0f198c894a2314fd79f","url":"static/js/27.2c64d18f.chunk.js"},{"revision":"7d843f3926c69920ed54759d7345c375","url":"static/js/28.2cd14d15.chunk.js"},{"revision":"cca91c0a14248effdd6f9eded48f7ee9","url":"static/js/29.1830a7ab.chunk.js"},{"revision":"98e7d6b83406f0f9c9dcaae84461235f","url":"static/js/3.ce488639.chunk.js"},{"revision":"bdfdf5a4a8ddc1bec574565609776b4f","url":"static/js/30.e7e36533.chunk.js"},{"revision":"ff9496c2a3714dcf2016a3c0f0252485","url":"static/js/31.ac529a17.chunk.js"},{"revision":"14d2ced8b9fd3994c22bd5ec6482ec8d","url":"static/js/32.4fb19dd8.chunk.js"},{"revision":"d6e7b3f46d566dde5b9c183dd95f23dc","url":"static/js/33.ef4b826b.chunk.js"},{"revision":"916158eef466ef2ec9b23b2b8c4e1dab","url":"static/js/4.3b97e8f0.chunk.js"},{"revision":"4965b69cfd0bd0d4b7e22445ae0f1085","url":"static/js/5.7fa8e246.chunk.js"},{"revision":"cfd2acab6f39a7c800176ca0f4a66b21","url":"static/js/About.b30fd96d.chunk.js"},{"revision":"142e08b393fb5537cac744a0211ce63e","url":"static/js/Actions.af6013dc.chunk.js"},{"revision":"3635b3b444f184d747d6e6f3ee549898","url":"static/js/App.028d11c8.chunk.js"},{"revision":"03a8978fa580bc09078386349f342e30","url":"static/js/Demographics.31bbca74.chunk.js"},{"revision":"292c9028a4ccb61f906ee3362005b90d","url":"static/js/Essentials.4b8115c7.chunk.js"},{"revision":"6b0df3966a249a942202287ae031f0b0","url":"static/js/Footer.05903efb.chunk.js"},{"revision":"b459d26fa84815ad7919cf6b6ce17fd1","url":"static/js/Home.ae8fa92b.chunk.js"},{"revision":"208f3ef776cd13aa8106a8a29ee4c274","url":"static/js/LanguageSwitcher.ffb711d1.chunk.js"},{"revision":"dee8d5501412e19ea53beb52069f7a05","url":"static/js/Level.48cee079.chunk.js"},{"revision":"353a4cf0429ae398df15121d9adb865b","url":"static/js/main.f7570087.chunk.js"},{"revision":"319615b6eb7a8822f4ff974506552fa4","url":"static/js/MapExplorer.e1eab139.chunk.js"},{"revision":"e4cae8befb9a3df72c8711b863f0d0d4","url":"static/js/MapVisualizer.475d1d8d.chunk.js"},{"revision":"dd0b2b06c096d9530b32cc2130e34a29","url":"static/js/Minigraph.2520f4fe.chunk.js"},{"revision":"262ab197736551e6d001fdf50ef5ac3c","url":"static/js/Row.4e353f90.chunk.js"},{"revision":"2900ca752ff98cf0c2b8a0753de3b456","url":"static/js/runtime-main.dbddff3b.js"},{"revision":"64e56e4c167afde42838bafaebfeb704","url":"static/js/State.8956034e.chunk.js"},{"revision":"ccb95d59b48d92fab3fb9a25f2c3d4fd","url":"static/js/Table.63c0b34e.chunk.js"},{"revision":"f8e97ecf62fccd1b13e35eccdf2e722b","url":"static/js/TimeSeries.6ba716ba.chunk.js"},{"revision":"ed3957efc04f4462ae3c4ab918d8a3e2","url":"static/js/TimeSeriesExplorer.3e0190d1.chunk.js"},{"revision":"8ebfd4ce0dd39b1dcdb2f2e9392ee234","url":"static/js/Updates.831fa97e.chunk.js"}]);

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
