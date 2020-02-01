importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('senna').then(function(cache) {
     return cache.addAll([
       '/',
       '/cache-polyfill.js',
       '/manifest.json',
       '/css/all.css',
       '/css/brands.css',
       '/css/featherlight.min.css',
       '/css/style.min.css',
       '/css/tempusdominus-bootstrap-4.min.css',
       '/img/despre-noi.jpg',
       '/img/foodpanda.png',
       '/img/glovo.png',
       '/img/header.jpg',
       '/img/hero-2.jpg',
       '/img/hero-3.jpg',
       '/img/logo.png',
       '/img/reservation-bg.jpg',
       '/img/steak.jpg',
       '/img/takeaway.png',
       '/img/testi-bg.jpg',
       '/img/top.jpg',
       '/img/top2.jpg',
       '/js/app.min.js',
       '/js/featherlight.min.js',
       '/js/jquery.min.js',
       '/js/modernizr.js',
       '/js/moment.min.js',
       '/js/tempusdominus-bootstrap-4.min.js',
       '/vendor/bootstrap/bootstrap.min.js',
       '/vendor/bootstrap/popper.min.js',
       '/vendor/bootstrap/bootstrap.min.css',
       '/vendor/owlcarousel/owl.carousel.min.css',
       '/vendor/owlcarousel/owl.carousel.min.js',
       '/vendor/select2/select2.min.css',
       '/vendor/select2/select2.min.js',
       '/vendor/stellar/jquery.stellar.js',
       '/webfonts/fa-brands-400.woff2',
       '/webfonts/fa-solid-900.woff2'
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