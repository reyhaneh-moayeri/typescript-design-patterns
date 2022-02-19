export interface Iprototype {
  clone(mode: number): Document;
}

export default class Document implements Iprototype {
  name: string;
  array: [string[], string[]];
  constructor(name: string, array: [string[], string[]]) {
    this.name = name;
    this.array = array;
  }
  clone(mode: number): Document {
    let array;
    if (mode === 2) {
      array = JSON.parse(JSON.stringify(this.array));
    } else {
      array = Object.assign([], this.array);
    }
    return new Document(this.name, array);
  }
}
