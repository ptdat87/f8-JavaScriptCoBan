//With params
const F1 = () => {
    console.log("F1");
    return () => {
        console.log("F2");
        return () => {
            console.log("F3");
            return () => {
                console.log("F4");
            };
        };
    };
};
F1()()()();

// No have any params
const F2 =
    (p1) =>
    (newFunction = (p1) => `Your input: ${p1}`) =>
    () => {
        console.log("F4: ", newFunction(p1));
    };
F2("DatPT")()();
