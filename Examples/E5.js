console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => {
        console.log("3")
    })
}, 1000);

Promise.resolve().then(() => {
    console.log("4")
}).then(() => {
    console.log("5")
});

console.log("6");

// output
// 1
// 6
// 4
// 5
// 2
// 3
