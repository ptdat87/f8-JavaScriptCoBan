console.log("1.With object");
const emailKey = "email";
const myInfo = {
    name: "My Name",
    age: 20,
    "địa chỉ": "Hồ Chí Minh",
    [emailKey]: "mymail@gmail.com",
    getname: function () {
        return this.name;
    },
};

console.log("1.a For/In (same For)");
for (const key in myInfo) {
    console.log(key);
}

console.log("1.b For/Of (same Foreach)");
try {
    for (const key of myInfo) {
        console.log(key);
    }
} catch (err) {
    const msg = "Error here, but your code will continue running";
    console.log(msg);
    console.error(msg, err);
}

console.log("\n\n");
console.log("2.With Iterable (Array,...)");
const arr = ["a", "b", "c"];

console.log("2.a For/In (same For)");
for (const x in arr) {
    console.log(x);
}

console.log("2.b For/Of (same Foreach)");
for (const x of arr) {
    console.log(x);
}
