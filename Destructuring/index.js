//Array
const array = ["javascript", "react", "ruby", "php", "python"];
const [a, b, ...rest] = array;
console.log(a, b);
console.log(rest);

//Object
const course = {
    name: "javaScript",
    price: 1000,
    image: "url",
    children: {
        name: "Arrow function",
    },
};

const { name, ...newObject } = course;
console.log(newObject);

const {
    name: parentName,
    children: { name: childName },
} = course;
console.log(parentName, childName);

const { description = "default description" } = course;
console.log(description);

//2
//Rest in function
function logger(a, ...params) {
    console.log(params);
}
logger(1, 2, 3);
