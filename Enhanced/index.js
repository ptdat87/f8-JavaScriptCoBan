//1 Defined key: value for object
//2 Defined function for object
//3 Defined key for object base on variable

const name = "Javascript";
const fieldPrice = "price";
const fieldPrice2 = "price";

const course = {
    name,
    [fieldPrice]: 1000,
    [fieldPrice2]: 2000,
    getName() {
        //enhanced function
        return name;
    },
};
console.log(course);
