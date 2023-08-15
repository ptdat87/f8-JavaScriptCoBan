function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

User.prototype.className = "F8";
const author = new User("mr Author", "Lastname", "url author avatar");
console.log(author);
