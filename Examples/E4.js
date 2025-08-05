setTimeout(() => {
    console.log("1")
}, 1000);

Promise.resolve().then(() => {
    console.log("2")
});

setTimeout(() => {
    console.log("3")
}, 1000);

Promise.resolve().then(() => {
    console.log("4")
});

// output
// 2
// 4
// 1
// 3