const CACHE_NAME = "chessmate-cache-v1";
const urlsToCache = [
  "/",
  "/js/script.js",
  "/manifest.json",
  "/images/android-chrome-192x192.png",
  "/images/android-chrome-512x512.png",
  "https://cdn.socket.io/4.8.1/socket.io.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
