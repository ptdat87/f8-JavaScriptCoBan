//Promise all
const promise1 = new Promise((resole) => {
    setTimeout(() => {
        console.log("promise1 done");
        resole([1]);
    }, 5000);
});

const promise2 = new Promise((resole) => {
    setTimeout(() => {
        console.log("promise2 done");
        resole([2, 3]);
    }, 3000);
});

Promise.all([promise2, promise1]).then((result) => {
    console.log(result);
});

const promise4 = new Promise((resole) => {
    setTimeout(
        (() => {
            return 1000;
        }).then(() => {
            return resole([1, 2, 3]);
        })
    );
});
