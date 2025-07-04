// NamedNodeMap
// Kumpulan atribut dari elemen (seperti array)

let el = document.querySelector("a");
let attrs = el.attributes;
console.log(attrs[0].name + " = " + attrs[0].value);
