//Polyfill: thêm vào function cho một só trình duyệt cũ không hỗ trợ
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strict";

        if (search instanceof RegExp) {
            throw TypeError("first argument must be a RegExp");
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}


