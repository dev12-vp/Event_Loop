Promise.resolve().then(()=> {
    console.log("2")
    Promise.resolve().then(() => {
        console.log("1")
    })
});

// outpute
// 2
// 1

s