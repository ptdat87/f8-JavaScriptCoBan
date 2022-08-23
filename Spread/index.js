//Array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array = [...array2, ...array1];
console.log(array);

//Object
const object1 = { name: "Javascript" };
const object2 = { price: 1000 };
const object3 = { ...object1, ...object2 };
console.log(object3);

//Function
const ar = ["javascript", "php", "ruby"];
function logger(a, b, c) {
    console.log(a, b, c);
}
logger(...ar);
