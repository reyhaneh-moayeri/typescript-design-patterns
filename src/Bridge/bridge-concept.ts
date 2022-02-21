// Bridge Pattern Concept Sample Code

/*
1- we use bridge when we want to seperate a solution where the abstraction and implementation 
may be tightly coupled and you want to break it up into smaller conseptual parts.

2- once we have added the bridge abstraction, we can extend each side of it seperately without
braking the other 

3- the bridge pattern is similar to adapter pattern except in the intent that you developed it.
the bridge is an approach to refactor existing code whereas the adapter adapt to the existing code through 
it's existing interfaces and methods without changing the internals.
*/

interface IAbstraction {
  method(value: string[]): void;
}

class RefinedAbstractionA implements IAbstraction {
  private implementer: IImplementer;

  constructor(implementer: IImplementer) {
    this.implementer = implementer;
  }

  method(value: string[]) {
    this.implementer.method(value);
  }
}

class RefinedAbstractionB implements IAbstraction {
  private implementer: IImplementer;

  constructor(implementer: IImplementer) {
    this.implementer = implementer;
  }

  method(value: string[]) {
    this.implementer.method(value);
  }
}

interface IImplementer {
  method(value: string[]): void;
}

class ConcreteImplementerA implements IImplementer {
  method(value: string[]) {
    console.log(value);
  }
}

class ConcreteImplementerB implements IImplementer {
  method(value: string[]) {
    value.forEach((v) => console.log(v));
  }
}

// The Client
const VALUES = ["a", "b", "c"];

const REFINED_ABSTRACTION_A = new RefinedAbstractionA(
  new ConcreteImplementerA()
);
REFINED_ABSTRACTION_A.method(VALUES);

const REFINED_ABSTRACTION_B = new RefinedAbstractionB(
  new ConcreteImplementerB()
);
REFINED_ABSTRACTION_B.method(VALUES);
