importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('senna').then(function(cache) {
     return cache.addAll([
       '/',
       'cache-polyfill.js',
       'manifest.json',
       '/img/favicon-32x32.png',
       '/img/favicon-96x96.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {


event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});