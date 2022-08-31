import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach, connect, dispatch } = createStore(reducer);

console.log([attach, connect, dispatch]);

window.dispatch = dispatch;

export { attach, connect };
