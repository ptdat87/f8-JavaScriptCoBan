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