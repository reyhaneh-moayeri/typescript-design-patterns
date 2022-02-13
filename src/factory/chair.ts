 import {demention} from "./demention"
 
 interface IChair {
    width: number;
    height: number;
    depth: number;
    getDemention(): demention;
}
export default class Chair implements IChair{
    width = 0
    height = 0
    depth = 0
    createChair(): IChair{
        return this
    }
    getDemention(): demention{
        return{
            height : this.height,
            width : this.width,
            depth : this.depth
        }

    }
}