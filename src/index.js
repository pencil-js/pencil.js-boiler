import { Scene, Triangle } from "pencil.js";

const scene = new Scene();

const component = new Triangle(scene.center, 100);

scene.add(component).startLoop();
