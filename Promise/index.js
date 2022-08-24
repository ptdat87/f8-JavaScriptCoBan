const promise = new Promise(
    //Executor
    function (resolve, reject) {
        //Không trả về gì là pending, gây rò rỉ bộ nhớ
        //Logic
        //Thanh cong
        resolve([
            { id: 1, name: "javascript" },
            { id: 2, name: "python" },
        ]);
        //That bai
        // reject();
        throw new Error("My custom error");
    }
);

promise
    .then(function (receives) {
        console.log("Success 1:", receives);
        return "Success 1 return";
    })
    .then(function (receives) {
        console.log("Success 2 receive:", receives, "please wait 2 minute");
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve([1, 2, 3]);
            }, 2000);
        });
    })
    .then(function (receives) {
        console.log("Success 3 receive:", receives);
        //Don't return anything
    })
    .then(function (receives) {
        console.log("Success 4 receive:", receives);
    })
    .catch(function (receives) {
        console.log("Failure", receives);
    })
    .finally(function (receives) {
        console.log("Done", receives);
    });

//Sleep function base on promise

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000);
    })
    .then(() => {
        console.log(2);
        return sleep(1000);
    })
    .then(() => {
        console.log(3);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, 1000);
        });
    })
    .then(() => {
        console.log(4);
        return sleep(1000);
    })
    .catch(function () {
        console.log("Sleep Failure, log 4 will not run");
    });

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
