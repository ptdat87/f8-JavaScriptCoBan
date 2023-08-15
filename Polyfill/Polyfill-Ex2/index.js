//Polyfill: thêm vào function cho một só trình duyệt cũ không hỗ trợ
if (!String.prototype.sayHello) {
    String.prototype.sayHello = function (msg) {
        "use strict";

        if (!msg) {
            throw TypeError("first argument must not null or undefined");
        }
        console.log(`${this.valueOf()} Say message: ${msg}`)
    };
}

const myMessage = 'DatPT'
myMessage.sayHello("Hello world")

