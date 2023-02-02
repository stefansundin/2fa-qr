// Increment this number to trigger offline clients to update their caches:
// v1

self.addEventListener('install', e => {
  self.skipWaiting();

  e.waitUntil(
    caches
      .open('2fa-qr')
      .then(c =>
        c.addAll([
          'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
          'https://cdn.jsdelivr.net/npm/kjua@0.9.0/dist/kjua.min.js',
          'https://cdn.jsdelivr.net/gh/stefansundin/qr-detector.js@v0.0.5/dist/QrDetector.min.js',
          'https://fonts.googleapis.com/css?family=Roboto:500,400',
        ]),
      ),
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
