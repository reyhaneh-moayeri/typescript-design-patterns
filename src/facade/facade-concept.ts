/* 
sometimes you have a system that becomes quite complex over time as more features are added or modifierd
it is helpful to provide a simplest API over it. this is the Facade pattern. 

the facade pattern is a essentially is an alternative, reducer or simplified interface to a set of
other interfaces, abstractions and implementations within a system that may be full of complexity 
and tightly coupled.

*/

class SubSystemA {
  method() {
    return "this is class A";
  }
}

class SubSystemB {
  method(value: string) {
    return value;
  }
}

class SubSystemC {
  method(value: { c: number[] }) {
    return value;
  }
}

class Facade {
  subSystemA(): string {
    return new SubSystemA().method();
  }

  subSystemB(value: string): string {
    return new SubSystemB().method(value);
  }
  subSystemC(value: { c: number[] }): { c: number[] } {
    return new SubSystemC().method(value);
  }
}

const facade = new Facade();
console.log(facade.subSystemA());
console.log(facade.subSystemB("12"));
console.log(facade.subSystemC({ c: [1, 2, 3] }));
