import SmallChair from "./small-chair";
import MediumChair from "./medium-chair";
import LargeChair from "./big-chair";
import IChair from "./chair"
export default class ChairFactory{
static createChair(someproperty:string): IChair{
    if(someproperty === "small-chair"){
        return new SmallChair()
    }else if(someproperty === "medium-chair"){
        return new MediumChair()
    }else{
        return new LargeChair()
    }
}
}