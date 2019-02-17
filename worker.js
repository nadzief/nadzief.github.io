// Flag for enabling cache in production
var doCache = false;

var CACHE_NAME = 'pwa-app-cache';

importScripts('/idb.js');

const my_table = 'tb_warung';

const objtb = idb.open('db_warung', 1, db => {
    if(!db.objectStoreNames.contains(my_table)){
        db.createObjectStore(my_table);
    }
});

const idb_pos_trx = {
    get(key){
        return objtb.then(db => {
            return db.transaction(my_table)
                .objectStore(my_table).get(key);
        });
    },
    getAll(){
        return objtb.then(db => {
            return db.transaction(my_table)
                .objectStore(my_table).getAll();
        });
    },
    set(key, val){
        return objtb.then(db => {
            const tx = db.transaction(my_table, 'readwrite');
            tx.objectStore(my_table).put(val, key);
            return tx.complete;
        });
    },
    delete(key){
        return objtb.then(db => {
            const tx = db.transaction(my_table, 'readwrite');
            tx.objectStore(my_table).delete(key);
            return tx.complete;
        });
    },
    clear(){
        return objtb.then(db => {
            const tx = db.transaction(my_table, 'readwrite');
            tx.objectStore(my_table).clear();
            return tx.complete;
        });
    },
    keys(){
        return objtb.then(db => {
            const tx = db.transaction(my_table);
            const keys = [];
            const store = tx.objectStore(my_table);
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if(!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });

            return tx.complete.then(() => keys);
        });
    }
};

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

self.addEventListener('sync', function(event){
  console.log('ready for sync listener');
  if(event.tag === 'sync-new-trx' ){
    idb_pos_trx.getAll().then(function(all_row){
      for (var pos_trx of all_row){
        kirimData(pos_trx);
      }
    });
  }
});