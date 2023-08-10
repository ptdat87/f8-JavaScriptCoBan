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
