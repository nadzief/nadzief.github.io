// Flag for enabling cache in production
var doCache = false;

var CACHE_NAME = 'pwa-app-cache';

importScripts('/idb.js');

const my_table = 'tb_warung';

const objtb = idb.open('db_warung', 1, db => {
    db.createObjectStore(my_table);
});

const idb_pos_trx = {
    async get(key){
      const db = await objtb;
      return db.transaction(my_table).objectStore(my_table).get(key);
    },
    async getAll(){
      const db = await objtb;
      return db.transaction(my_table).objectStore(my_table).getAll();
    },
    async set(key, val){
      const db = await objtb;
      const tx = db.transaction(my_table, 'readwrite', {autoIncrement: true});
      tx.objectStore(my_table).put(val, key);
      return tx.complete;
    },
    async delete(key){
      const db = await objtb;
      const tx = db.transaction(my_table, 'readwrite');
      tx.objectStore(my_table).delete(key);
      return tx.complete;
    },
    async clear(){
      const db = await objtb;
      const tx = db.transaction(my_table, 'readwrite');
      tx.objectStore(my_table).clear();
      return tx.complete;
    },
    async keys(key){
      const db = await objtb;
      return db.transaction(my_table).objectStore(my_table).getAllKeys(key);
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

self.addEventListener('offline', function(event){
  console.log('network connection is offline')
})

self.addEventListener('online', function(event){
  console.log('network connection is online')
})

self.addEventListener('sync', function(event) {
  console.log('masuk ke sync listener', all_row);
  if (event.tag === 'sync-new-trx') {
    event.waitUntil(doSomeStuff()
      .then(() => {
        idb_pos_trx.getAll().then(function(all_row){
          for(var pos_trx of all_row){
            doSomeStuff(all_row);
          }
        });
      })
      .catch((err) => {
        console.log('Error Apps Sync To Server', err);
      })
    );
  }
});

function doSomeStuff(datas){
  console.log('processing data', datas.nama_warung);
  return fetch('http://localhost:3333/post/warung',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      nama_warung: datas.nama_warung,
      kode_warung: datas.kode_warung,
      alamat: datas.alamat,
      no_telp: datas.no_telp,
      deksripsi: datas.deskripsi
    })
  })
  .then(function(response){
    response.text().then(function(textku){
      if(textku === "oke"){
        console.log('deleting data', datas.nama_warung);
        idb_pos_trx.delete(datas.nama_warung)
      }
    });
  })
  .catch(function(err){
    console.log('error', err);
  });
}