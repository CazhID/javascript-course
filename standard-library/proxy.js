// Proxy
// Untuk membuat handler atas object

let target = {};
let proxy = new Proxy(target, {
    get: (obj, prop) => prop in obj ? obj[prop] : "tidak ada"
});
console.log(proxy.nama); // "tidak ada"
