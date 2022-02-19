import Document from "./document";

const ORIGINAL_Document = new Document("Original Document", [
  ["hello", "nice"],
  ["pizza", "hamburger"],
]);
ORIGINAL_Document.name = "Copy 1";
const COPY1 = ORIGINAL_Document.clone(1); // shallow copy
COPY1.array[1][1] = "french fries";
console.log(ORIGINAL_Document);

const COPY2 = ORIGINAL_Document.clone(2); // deep copy
COPY2.array[1][1] = "Chicken";
console.log(ORIGINAL_Document);
