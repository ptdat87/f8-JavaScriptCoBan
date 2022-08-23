const obj = {
    name: "ALICE",
    cat: {
        name: "Dinah",
        cat1: {
            name: "Dinah 1",
            cat2: {
                name: "Dinah 2",
            },
        },
    },
};

console.log(obj?.["cat"]?.["cat1"]?.["cat2"]?.name);
console.log(obj?.cat?.cat1?.cat2?.name);
console.log(obj?.cat?.cat1?.cat2?.cat3?.name);

//function
const objF = {
    name: "my name",
    getName(value) {
        console.log(value);
    },
};

objF.getName222?.("123");
