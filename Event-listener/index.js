let btn = document.getElementById("btn");

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 1000);
    });
}
async function asyncCall(e, id) {
    console.log(`${id} begin ${new Date().toLocaleString()} ${e}`);
    await sleep(3000);
    console.log(`${id} end ${new Date().toLocaleString()} ${e}`);
    // expected output: "resolved"
}

function task3() {
    console.log(`task3 1`); // expected output: "resolved"
}

const arrowFunction = (e) => asyncCall(e, "Event 2");

btn.addEventListener("click", (e) => asyncCall(e, "Event 1"));
btn.addEventListener("click", arrowFunction);
btn.addEventListener("click", task3);
btn.addEventListener("click", task3);

setTimeout(() => {
    btn.removeEventListener("click", task3);
    btn.removeEventListener("click", arrowFunction);
    console.log(`timeout`);
}, 4000);
