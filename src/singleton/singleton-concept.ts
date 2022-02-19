/* 
sometimes we need to have only one instance of a class. you don't want where to be many versions
 you maybe opening a database connection
*/

class Singleton {
  static instance: Singleton;
  id: number;
  constructor(id: number) {
    this.id = id;
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

const SINGLETON_1 = new Singleton(1);
const SINGLETON_2 = new Singleton(2);
console.log(SINGLETON_1); // id: 1
console.log(SINGLETON_2); // id: 1

console.log(SINGLETON_1 === SINGLETON_2); //true
