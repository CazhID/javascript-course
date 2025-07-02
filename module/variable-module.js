// Variable di Module
// Variabel di module bersifat scoped, tidak mengganggu global scope

let count = 0;
export function increment() {
  count++;
  console.log(count);
}
