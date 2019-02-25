import { openDb } from 'idb';

const my_table = 'tb_warung';

const objtb = openDb('db_warung', 1, upgradeDB => {
    upgradeDB.createObjectStore(my_table);
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

export function kirimData(tb_warung){
  console.log('processing data', tb_warung.nama_warung);
  fetch('http://localhost:3333/post/warung',{
    headers:{
    method: 'POST',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      nama_warung: tb_warung.nama_warung,
      kode_warung: tb_warung.kode_warung,
      alamat: tb_warung.alamat,
      no_telp: tb_warung.no_telp,
      deksripsi: tb_warung.deskripsi
    })
  })
  .then(function(response){
    response.text().then(function(textku){
      if(textku === "oke"){
        console.log('deleting data', tb_warung.nama_warung);
        idb_pos_trx.delete(tb_warung.nama_warung)
      }
    });
  })
  .catch(function(err){
    console.log('error', err);
  });
}

export default idb_pos_trx;