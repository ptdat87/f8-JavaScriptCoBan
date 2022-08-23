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
//Function --> method / phương thức
//Others --> properties / thuộc tính

//Delete a properties
delete myInfo.age;

console.log(myInfo);
console.log(myInfo.name, " - ", myInfo["name"], " - ", myInfo.email);
console.log(myInfo.getname());
