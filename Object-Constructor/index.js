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

const author = new User("Dat", "PT", "url author avatar");
const user = new User("User1", "Last1", "url user avatar");

author.title = "Chia se dao tai F8";
user.comment = "Lieu con khoa asp.net không";

console.log(author.constructor);
console.log(author);
console.log(user);
console.log(user.getName());
