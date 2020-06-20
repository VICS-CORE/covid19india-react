if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"cd2759c0337a9c474821456d8979b307","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"cd2759c0337a9c474821456d8979b307","url":"index.html"},{"revision":"f76b9fd3f9cd722a4f03a90a57b20df2","url":"precache-manifest.f76b9fd3f9cd722a4f03a90a57b20df2.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"c2e6dd99f82bd4f04729c4c9bcb21f7e","url":"static/css/App.176f818c.chunk.css"},{"revision":"58a246223cbd5163f3f439ee4c5cd14f","url":"static/js/0.255e9110.chunk.js"},{"revision":"cc083e5e947148a27862be44f4006338","url":"static/js/1.3b9b73d9.chunk.js"},{"revision":"90790469e3b0535d1682826b918ca1db","url":"static/js/2.35c5f009.chunk.js"},{"revision":"d535eac263118c6c81689665f5daa079","url":"static/js/25.135bcf83.chunk.js"},{"revision":"5fc1b266c8d2d0966271a4104965c2fd","url":"static/js/26.c5e1226d.chunk.js"},{"revision":"6c584c1e05c7d1d80505a94832562756","url":"static/js/27.190d81b8.chunk.js"},{"revision":"df176bbca165f401a1d2f91914acaac8","url":"static/js/28.3a46412e.chunk.js"},{"revision":"8bfc152af3af610f35d75663886a981d","url":"static/js/29.bd4e0aaf.chunk.js"},{"revision":"e6c0bb5cebaee3db42822a3f1ceb8222","url":"static/js/3.09a68b1a.chunk.js"},{"revision":"a37b86009c553a8d2aeb7c51f1631d85","url":"static/js/30.cfe92e91.chunk.js"},{"revision":"8152a1bb3ecc36f0e6c0ae087faf7498","url":"static/js/31.9cf34a45.chunk.js"},{"revision":"3b3fd1172e634ee6f5edd571af7f0f8c","url":"static/js/32.88bfaeff.chunk.js"},{"revision":"5954ce53634f0f62e7a103c48e9e5f77","url":"static/js/33.9c080581.chunk.js"},{"revision":"33371301c7f38b37f4531b4c1c40e9ca","url":"static/js/4.292f48d0.chunk.js"},{"revision":"69b016860ceb3a03b83b111a5ac273ba","url":"static/js/5.c1769488.chunk.js"},{"revision":"dfd584fc30cd901f8d49389ef26f99be","url":"static/js/Actions.c280db9a.chunk.js"},{"revision":"53982f72220c0c6222fa9754e4a07ace","url":"static/js/App.5a09e23f.chunk.js"},{"revision":"ada0a49a7f285223e3dc0875b7899838","url":"static/js/Demographics.02712008.chunk.js"},{"revision":"7b7461667c57cf58ec94fe4a9ac08bc3","url":"static/js/Essentials.087b3797.chunk.js"},{"revision":"7cea8bc41365037bb71f04d874f906a4","url":"static/js/Footer.35a4e256.chunk.js"},{"revision":"4b7e6241746d588a2fd1b15f98e0fd13","url":"static/js/Home.0872c4ef.chunk.js"},{"revision":"d38c7c950976b310cdd40ef1d3f42f5f","url":"static/js/LanguageSwitcher.a705b7c4.chunk.js"},{"revision":"f2265454e2c1ab2d5e6e3ea0bdd1dbd3","url":"static/js/Level.8a11f186.chunk.js"},{"revision":"bcb5dfd18105f11e76b63cbf0cbb54e9","url":"static/js/main.33ccccf9.chunk.js"},{"revision":"f9218ac8724e744f40448e14aa88852b","url":"static/js/MapExplorer.0aed407f.chunk.js"},{"revision":"e88f077d21f85ff1883047350d016884","url":"static/js/MapVisualizer.b930a1e0.chunk.js"},{"revision":"aef39c9cc48b82baf1a9d16464e39e05","url":"static/js/Minigraph.9215f0ce.chunk.js"},{"revision":"95211f388ba0507173b5c93ae8dbc909","url":"static/js/Row.b4f2b2fc.chunk.js"},{"revision":"41a999afa085509177a9f157260eb863","url":"static/js/runtime-main.116f32dc.js"},{"revision":"1decabe3ee95806060f825a8c9a0687c","url":"static/js/State.c5a6128b.chunk.js"},{"revision":"cae856e97762fd467a3ecfd83a592f58","url":"static/js/Table.b10106e9.chunk.js"},{"revision":"4d5addb8808921b2b452b990d970c5c6","url":"static/js/TimeSeries.92413294.chunk.js"},{"revision":"d9d281661ad97aca92f42a7ca7cd00d8","url":"static/js/TimeSeriesExplorer.82fcb963.chunk.js"},{"revision":"11db310a7e76b676b9d0153bab355c06","url":"static/js/Updates.90ee9350.chunk.js"}]);

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
