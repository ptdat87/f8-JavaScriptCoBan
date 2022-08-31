import reducer from "./reducer.js";

export default function html([first, ...strings], ...values) {
    return values
        .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
        .filter((x) => (x && x !== true) || x === 0)
        .join("");
}

export function createStore(reduce) {
    let state = reduce();
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            console.log("1", [component]);
            const output = component();
            root.innerHTML = output;
        }
        // console.log(state);
        // console.log(roots);
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },

        connect(selector = (statePA) => statePA) {
            return (component) =>
                (props, ...args) => {
                    console.log("2", [component]);
                    return component(
                        Object.assign({}, props, selector(state), ...args)
                    );
                };
        },

        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        },
    };
}
