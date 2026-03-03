const CACHE_NAME = 'kmb-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './Screenshot_20260303-065649_InShot.jpg',
  './InShot_20260303_073640134.mp4'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
