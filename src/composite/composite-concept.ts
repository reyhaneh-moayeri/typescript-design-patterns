/* it is a structural pattern that lets you compose objects into a changable tree structure
is great if you need the option of swapping hierarchal relatinshipd around 
allows you to add or remove a component to heirarchy
provude flexibility of structure

 */

interface ICompositeComponent {
  name: string;
  referenceToParent?: Composite;
  method(): void;
  detach(): void;
}

class Leaf implements ICompositeComponent {
  name: string;
  referenceToParent?: Composite = undefined;
  constructor(name: string) {
    this.name = name;
  }
  method() {
    const parent = this.referenceToParent
      ? this.referenceToParent.name
      : "NONE";
    console.log(`${this.name} is a leaf and it's parent is ${parent}`);
  }
  detach() {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}

class Composite implements ICompositeComponent {
  name: string;
  referenceToParent?: Composite;
  components: ICompositeComponent[];

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }
  method(): void {
    const parent = this.referenceToParent
      ? this.referenceToParent.name
      : "none";
    console.log(
      `<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`
    );
    this.components.forEach((component) => {
      component.method();
    });
  }
  attach(component: ICompositeComponent): void {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  delete(component: ICompositeComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  detach(): void {
    // Detaching this composite from its parent composite
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}

const LEAF_A = new Leaf("leaf-a");
const LEAF_B = new Leaf("leaf-b");
const COMPOSITE_1 = new Composite("comp-1");
const COMPOSITE_2 = new Composite("comp-2");

COMPOSITE_1.attach(LEAF_A);
COMPOSITE_2.attach(LEAF_A);

LEAF_B.method();
COMPOSITE_1.method();
COMPOSITE_2.method();
