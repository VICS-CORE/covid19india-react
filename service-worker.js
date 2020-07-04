if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"1edbfcdb7d4fe9dfaaf154ea62ac2736","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"1edbfcdb7d4fe9dfaaf154ea62ac2736","url":"index.html"},{"revision":"1f557e43ffb3a50fd768645b96aea2ab","url":"precache-manifest.1f557e43ffb3a50fd768645b96aea2ab.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"0789fd35f74d85561dc51f92f036f0c8","url":"static/css/5.e6f51e71.chunk.css"},{"revision":"e5fa0545b300c4a2d1c57349e291c191","url":"static/css/App.e1cd1873.chunk.css"},{"revision":"7c9c3c9ae34736ebfd949c28054cd84a","url":"static/js/0.f56a3db8.chunk.js"},{"revision":"93727d34a4bb4f61bbeb066d6f06287e","url":"static/js/1.e7f9734e.chunk.js"},{"revision":"823589ca7d647331b963430261624825","url":"static/js/2.bf822a9b.chunk.js"},{"revision":"550ca76fd346c32d1d6cff7915ce9c44","url":"static/js/27.b139a213.chunk.js"},{"revision":"aeeaaed8d70fe4247d291de7cef1257e","url":"static/js/28.846a3f72.chunk.js"},{"revision":"5b41299a0a626303893909d490dfac86","url":"static/js/29.eb014664.chunk.js"},{"revision":"88b4875982757b924344abf7d8f8ab7a","url":"static/js/3.d8b1714a.chunk.js"},{"revision":"f4e16ecb240729f6cf770601a7eab167","url":"static/js/30.cdd2a503.chunk.js"},{"revision":"ce0a6768ba83c6cf29f39ce6f0837f81","url":"static/js/31.f9f23692.chunk.js"},{"revision":"8a74e24d45faf66f589e18afb6e67760","url":"static/js/32.5ded357e.chunk.js"},{"revision":"0354de7b258532d97704021b43ecb6f7","url":"static/js/33.ec0b780d.chunk.js"},{"revision":"49b9742f2e46c62397ee81026ee9cb25","url":"static/js/34.49ce8add.chunk.js"},{"revision":"2166b4d3acd0c2fca63d487a15be3085","url":"static/js/35.5425ed3e.chunk.js"},{"revision":"2ca85fc80e557805f96c8b296d96a063","url":"static/js/4.7dbf955f.chunk.js"},{"revision":"d712a156fe71045b595f91a7d7ae460d","url":"static/js/5.9179f720.chunk.js"},{"revision":"3a3836cfc2d8ffff2984a44e7768e753","url":"static/js/6.21342554.chunk.js"},{"revision":"911ff38388423c621f96c247d090adec","url":"static/js/7.1d3bcd90.chunk.js"},{"revision":"b832480346ce37fad56851a977b04570","url":"static/js/Actions.60165d9c.chunk.js"},{"revision":"f245d942a821b340c29f65d1a828c073","url":"static/js/App.a529adea.chunk.js"},{"revision":"a9b34e4c9b0f2ff7d7a42c276710fbce","url":"static/js/Demographics.ccc8bcc0.chunk.js"},{"revision":"1550cc7d80df9a86279b4a0a0edef166","url":"static/js/Essentials.af1a1f41.chunk.js"},{"revision":"e284a93d6cb0c49bdc945516313f9478","url":"static/js/Footer.b7ff6de1.chunk.js"},{"revision":"ac24ddf4295a7cd4edd6b0728c1d1cdf","url":"static/js/Home.1b508b50.chunk.js"},{"revision":"33a1104fb73acf73a6f267b5f4d8cfca","url":"static/js/LanguageSwitcher.fb30e979.chunk.js"},{"revision":"e179fae2c99e613881d4a6f23b4f8945","url":"static/js/Level.397d0ddb.chunk.js"},{"revision":"1ff1bd16daf91744ba4a1070df23b7a0","url":"static/js/main.19cca970.chunk.js"},{"revision":"8f9aa8fb682fbde24aece7bb8f04091e","url":"static/js/MapExplorer.8a85c78e.chunk.js"},{"revision":"84bfa0489e231bc348edaa4b3690763f","url":"static/js/MapVisualizer.9fe89191.chunk.js"},{"revision":"9f2d5373480ef4edd06ac97f319c2fb9","url":"static/js/Minigraph.8e223ac1.chunk.js"},{"revision":"396de40ffa87a76b86838e658f1155c4","url":"static/js/Row.12bb2893.chunk.js"},{"revision":"efbf9a4ae5b15e9bebeb52401d6b47e7","url":"static/js/runtime-main.62c21077.js"},{"revision":"61e6c6b0e60e41636d791d15bceba411","url":"static/js/State.b70d22b3.chunk.js"},{"revision":"3a706a6cfb77a898f53aba19a8f39f43","url":"static/js/Table.f5a92ed9.chunk.js"},{"revision":"6e1d47479f4e6e8c5d7cf926087ef52a","url":"static/js/TimeSeries.ae9ad0de.chunk.js"},{"revision":"ed25feced1a7cf5f4029a8f3f25d928f","url":"static/js/TimeSeriesExplorer.ba8e8b32.chunk.js"},{"revision":"19ff5741d9b77b152a04aacc8da6bac4","url":"static/js/Updates.447a74c3.chunk.js"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"static/media/fontawesome-webfont.af7ae505.woff2"}]);

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
