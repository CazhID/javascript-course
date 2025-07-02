// Base64
// Mengonversi string ke/dari Base64

let str = "Halo";
let encoded = btoa(str);
let decoded = atob(encoded);
console.log(encoded, decoded);
