// Flag for enabling cache in production
var doCache = false;

var CACHE_NAME = 'pwa-app-cache';

importScripts('idb.js');

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

function kirimData(pos_trx)
{
    console.log('processing data to server ' + pos_trx.id);
    fetch('http://langitsalam.com:3334/post/warung',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
          nama_warung: pos_trx.nama_warung,
          kode_warung: pos_trx.kode_warung,
          alamat: pos_trx.alamat,
          no_telp: pos_trx.no_telp,
          deskripsi: pos_trx.deskripsi,
        })
    })
    .then(function(response){
        response.text().then(function(textku){
            if (textku=="oke")
            {
                console.log('deleting id ' + pos_trx.id);
                idb_pos_trx.delete(pos_trx.id);
            }
        });
    })
    .catch(function(err)
    {
        console.log("error " + err);
    });
}

// function kirimData(tb_warung){
//   console.log('processing data', tb_warung);
//   fetch('http://localhost:3333/post/warung',{
//     headers:{
//     method: 'POST',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//       nama_warung: tb_warung.nama_warung,
//       kode_warung: tb_warung.kode_warung,
//       alamat: tb_warung.alamat,
//       no_telp: tb_warung.no_telp,
//       deksripsi: tb_warung.deskripsi
//     })
//   })
//   .then(function(response){
//     response.text().then(function(textku){
//       if(textku === "oke"){
//         console.log('deleting data', tb_warung.nama_warung);
//         idb_pos_trx.delete(tb_warung.nama_warung)
//       }
//     });
//   })
//   .catch(function(err){
//     console.log('error', err);
//   });
// }

// Delete old caches
self.addEventListener('activate', function(event) {
  console.log('Service worker activating');
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
  console.log('Service worker is installing');
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
  console.log('service worker is fetching')
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

self.addEventListener('push', function(event){
  console.log("Server is ready to send push notification")
  const title = "New Message";
  const body = "You Have Some New Message";
  const icon = "/icon-192x192.png";
  const tag = "simple-push-notification";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});

self.addEventListener('offline', function(event){
  console.log('network connection is offline')
})

self.addEventListener('online', function(event){
  console.log('network connection is online')
})

self.addEventListener('sync',function(event){
  console.log("masuk ke sync listener");
  if (event.tag==='sync-new-trx'){
    idb_pos_trx.getAll().then (function(all_row)
    {
      for(var pos_trx of all_row)
      {
        kirimData(pos_trx);
      }
    });
  }
});