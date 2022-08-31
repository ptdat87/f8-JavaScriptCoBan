import reducer from "./reducer.js";

export function createStore(reduce) {
    let state = reduce();

    return {
        showState() {
            console.log(state);
        },

        dispatch(action, ...args) {
            console.log("dispatch", action, args);
            state = reducer(state, action, args);
        },
    };
}
