//Promise all
const promise1 = new Promise((resole) => {
    setTimeout(() => {
        console.log("promise 1 done");
        resole([1]);
    }, 3000);
});

const promise2 = new Promise((resole) => {
    setTimeout(() => {
        console.log("promise 2 done");
        resole([2, 3]);
    }, 1000);
});

Promise.all([promise2, promise1]).then((recives) => {
    console.log(recives.reduce((arr, cur, index) => {
        arr ??= [];
        arr.push(...cur);
        return arr;
    }));
});