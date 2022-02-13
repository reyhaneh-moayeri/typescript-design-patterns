import ChairFactory from "./chair-factory"

const CHAIR = ChairFactory.createChair("small-chair")
console.log(CHAIR.getDemention())