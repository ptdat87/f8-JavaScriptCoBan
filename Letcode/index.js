Array.prototype.last = function() {
    console.log(this)
    console.log(this.length)
   return this[this.length-1]
};

const arr = [1, 2, 3];
 arr.last(); // 3