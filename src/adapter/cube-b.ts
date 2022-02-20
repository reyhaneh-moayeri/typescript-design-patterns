export interface Ib {
  create(
    top_left_front: [number, number, number],
    bottom_right_back: [number, number, number]
  ): boolean;
}

export default class CubeB implements Ib {
  static last_time = Date.now();

  create(
    top_left_front: [number, number, number],
    bottom_right_back: [number, number, number]
  ): boolean {
    const now = Date.now();
    if (now > CubeB.last_time + 1500) {
      console.log(
        `Company B built Cube with dimensions ${top_left_front}x${bottom_right_back}`
      );
      CubeB.last_time = now;
      return true;
    }
    return false; // busy
  }
}
