import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { showState, dispatch } = createStore(reducer);

// console.log([showState, dispatch]);

window.dispatch = dispatch;

export { showState };
