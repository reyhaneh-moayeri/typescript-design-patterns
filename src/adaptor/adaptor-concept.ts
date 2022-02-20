interface IA {
  methodA(): void;
}

class A implements IA {
  methodA() {
    console.log("class A");
  }
}

interface IB {
  methodB(): void;
}

class B implements IB {
  methodB() {
    console.log("class B");
  }
}

class Adaptor implements IA {
  _classB: B;

  constructor() {
    this._classB = new B();
  }
  methodA() {
    this._classB.methodB();
  }
}

const ADAPTED = [new A(), new Adaptor()];

ADAPTED.forEach((a) => a.methodA());
