function runExample() {
  const output = document.getElementById('output');
  const request = indexedDB.open('TestDB', 1);

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('users', { keyPath: 'id' });
  };

  request.onsuccess = function (event) {
    const db = event.target.result;
    const tx = db.transaction('users', 'readwrite');
    const store = tx.objectStore('users');

    store.put({ id: 1, name: 'Eko' });

    tx.oncomplete = () => {
      const readTx = db.transaction('users', 'readonly');
      const readStore = readTx.objectStore('users');
      const getReq = readStore.get(1);

      getReq.onsuccess = () => {
        const user = getReq.result;
        output.textContent = `🗃️ Data dari IndexedDB:
ID: ${user.id}
Name: ${user.name}`;
      };
    };
  };
}
