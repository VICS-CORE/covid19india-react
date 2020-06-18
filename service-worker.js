if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"7732adebb87d6a2ebb5bd76b113a48d0","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"7732adebb87d6a2ebb5bd76b113a48d0","url":"index.html"},{"revision":"be269d56ebe76bddb0e3c1ffa91da1e9","url":"precache-manifest.be269d56ebe76bddb0e3c1ffa91da1e9.js"},{"revision":"0d43ef90fa6a51cba8b57c78c49c2580","url":"static/css/2.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"4fff1070408fb429b1359c8836505bb1","url":"static/js/0.d8411f48.chunk.js"},{"revision":"1c9d3f9495c75a8943337422c80c5ca1","url":"static/js/1.4ce8bed7.chunk.js"},{"revision":"dc7a86e5e1860556b3003965fca2d971","url":"static/js/2.eefdf109.chunk.js"},{"revision":"a633fdc5aadd684b7364aebfa4056745","url":"static/js/26.08fdb800.chunk.js"},{"revision":"240477197d635d4bd0a327343544e3f7","url":"static/js/27.2adc18e9.chunk.js"},{"revision":"f612a86070dea9c04cc3ab987b8d791b","url":"static/js/28.acc09100.chunk.js"},{"revision":"593462039b37a38e90d1ae7b6098bae5","url":"static/js/29.20f31d5a.chunk.js"},{"revision":"0a4a08c201668499dad2928912e4cf4a","url":"static/js/3.b3fa3a93.chunk.js"},{"revision":"480a4c96585ae64585049e72a6ef15a4","url":"static/js/30.f99b0431.chunk.js"},{"revision":"61330b2ea365d7055973216e1fb47401","url":"static/js/31.652c53a7.chunk.js"},{"revision":"0815fdb975de1825e981fa16e8ba8bd8","url":"static/js/32.78724339.chunk.js"},{"revision":"5954ce53634f0f62e7a103c48e9e5f77","url":"static/js/33.9c080581.chunk.js"},{"revision":"2274cd9222c7fdd19a00da45e155f6aa","url":"static/js/4.b063e809.chunk.js"},{"revision":"60a449a4ec66b61ae791503a68751c4b","url":"static/js/5.0ac7e880.chunk.js"},{"revision":"98a7351282be66bb578b74f0b1267d5d","url":"static/js/About.7c7c43a1.chunk.js"},{"revision":"e8762feeb60a870f7ac9c525fd399229","url":"static/js/Actions.15dd821d.chunk.js"},{"revision":"9e2942ada8b60c6808fb65328aa71b53","url":"static/js/App.c2396cc2.chunk.js"},{"revision":"c9b9b1e6ecb6ec3206e9a8938f3dde88","url":"static/js/Demographics.61204e33.chunk.js"},{"revision":"d214d5c356eeaa5d55baa0f542e460ef","url":"static/js/Essentials.22a8963d.chunk.js"},{"revision":"95c3b8a7105334089ca612f9a4800941","url":"static/js/Footer.d1c34bea.chunk.js"},{"revision":"c88aded5d5398469f681152698eff66e","url":"static/js/Home.04ef72a6.chunk.js"},{"revision":"7190d5d3d5e219f4bfff4b95738f1dc9","url":"static/js/LanguageSwitcher.f9af8dfe.chunk.js"},{"revision":"bb526513b3899866ceae4619ccfe0324","url":"static/js/Level.5bbab7fe.chunk.js"},{"revision":"27030c0a0f51b7a29e038266ae76394d","url":"static/js/main.f42f4e7d.chunk.js"},{"revision":"f81d40f5da18b8448e0800305d9a1955","url":"static/js/MapExplorer.0ddedf84.chunk.js"},{"revision":"170e801defb75f96e6ec73715438fe0e","url":"static/js/MapVisualizer.a26534fd.chunk.js"},{"revision":"a49176197091d7519619e60c53eb5857","url":"static/js/Minigraph.0a1b308e.chunk.js"},{"revision":"684deac472835a00109b1dc5986f115e","url":"static/js/Row.b8d110a3.chunk.js"},{"revision":"91846cbe61cf8ce76fa3c04492a0a3b3","url":"static/js/runtime-main.8c133f83.js"},{"revision":"ecba53db1e11121d823d6476549c3f99","url":"static/js/State.414a6dd5.chunk.js"},{"revision":"580e41dca9719a4279782b2b62725bb6","url":"static/js/Table.3aa7b15e.chunk.js"},{"revision":"f6aa4a176fbbccd93f3c561637501432","url":"static/js/TimeSeries.a448c3a7.chunk.js"},{"revision":"54d279772f91ff8b74269dcb9718e7c1","url":"static/js/TimeSeriesExplorer.2fc36fc4.chunk.js"},{"revision":"272e48561a30ad699a8d7675162878eb","url":"static/js/Updates.f03dc8d1.chunk.js"}]);

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
