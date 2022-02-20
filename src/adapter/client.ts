import CubeA from "./cube-a";
import CubeAdapter from "./cube-b-adapter";

const totalCube = 5;

let counter = 0;

const manufactorCube = () => {
  const width = Math.floor(Math.random() * 10) + 1;
  const height = Math.floor(Math.random() * 10) + 1;
  const depth = Math.floor(Math.random() * 10) + 1;
  let cube = new CubeA();
  let success = cube.manufacture(width, height, depth);
  if (success) {
    counter = counter + 1;
  } else {
    console.log("Company A was busy, so trying company B");
    cube = new CubeAdapter();
    success = cube.manufacture(width, height, depth);
    if (success) {
      counter = counter + 1;
    } else {
      console.log("Company B was busy, so trying company A");
    }
  }
};

const interval = setInterval(() => {
  manufactorCube();
  if (counter >= totalCube) {
    clearInterval(interval);
    console.log(`${totalCube} manufactored`);
  }
});
