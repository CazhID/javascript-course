// Class di Module
// Module bisa meng-export class

export class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi, " + this.name);
  }
}
