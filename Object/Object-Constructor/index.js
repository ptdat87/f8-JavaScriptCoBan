function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

User.prototype.className = "F8";
User.newkey = "new value";

const author = new User("mr Author", "Lastname", "url author avatar");
const user = new User("mr User", "Lastname", "url user avatar");

author.title = "Chia se dao tai F8";
user.comment = "Lieu con khoa asp.net không";

console.log("constructor is User? : ", author.constructor === User);
console.log(author);
console.log(user);
console.log(user.getName());
