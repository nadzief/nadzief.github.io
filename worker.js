// Flag for enabling cache in production
var doCache = false;

var CACHE_NAME = 'pwa-app-cache';

import { idb_pos_trx, kirimData } from '/views/post_trx';

// Delete old caches
self.addEventListener('activate', event => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
  );
});

// This triggers when user starts the app
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          fetch('asset-manifest.json')
            .then(response => {
              response.json();
            })
            .then(assets => {
              // We will cache initial page and the main.js
              // We could also cache assets like CSS and images
              const urlsToCache = [
                '/',
                assets['main.js']
              ];
              cache.addAll(urlsToCache);
            })
        })
    );
  }
});

// Here we intercept request and serve up the matching files
self.addEventListener('fetch', function(event) {
  console.log('fetch listener is stand by')
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if(response){
          // return cached files
          return response  
        } else {
          return fetch(event.request)
        }
      })
    );
  }
});

self.addEventListener('offline', function(event){
  console.log('network connection is offline')
})

self.addEventListener('online', function(event){
  console.log('network connection is online')
})

self.addEventListener('sync', function(event) {
  console.log('masuk ke sync listener', all_row);
  if (event.tag === 'sync-new-trx') {
    event.waitUntil(kirimData()
      .then(() => {
        idb_pos_trx.getAll().then(function(all_row){
          for(var pos_trx of all_row){
            kirimData(all_row);
          }
        });
      })
      .catch((err) => {
        console.log('Error Apps Sync To Server', err);
      })
    );
  }
});