/*
1.Declaration function
2.Expression function
3.Arrow function
*/

//1.Declaration function
showMessage(); //This is hosting

function showMessage() {
      console.log("1");
}

//2.Expression function
// showMessage2(); // This will show a message: index.js:15 Uncaught ReferenceError: Cannot access 'showMessage2' before initialization
const showMessage2 = function expressionNewFunction() {
      console.log("2");
};

setTimeout(function expressionNewFunction() { console.log("3"); }, 1000);


const myObject = {
      showMessage4: function expressionNewFunction() {
            console.log("4");
      }
}





