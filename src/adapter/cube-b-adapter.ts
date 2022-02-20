import { Ia } from "./cube-a";
import CubeB from "./cube-b";

export default class CubeAdapter implements Ia {
  private cube: CubeB;
  constructor() {
    this.cube = new CubeB();
  }
  manufacture(width: number, height: number, depth: number): boolean {
    const success = this.cube.create(
      [0 - width / 2, 0 - height / 2, 0 - depth / 2],
      [0 + width / 2, 0 + height / 2, 0 + depth / 2]
    );
    return success;
  }
}
