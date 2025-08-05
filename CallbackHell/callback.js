//Callback  function.

function greet(name , callback){
    console.log(`Hell ${name}`);
   callback();
};

function afterGreet(){
    console.log("Greeting is complete!")
};

// greet("vivek",afterGreet);


//When multiple asynchronous operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain

function task1(callback){
    setTimeout(() => {
        console.log("task 1 compaleted");
        callback()
    }, 1000);
};

function task2(callback){
    setTimeout(() => {
        console.log("task 2 compaleted");
        callback()
    }, 1000);
};

function task3(callback){
    setTimeout(() => {
        console.log("task 3 compaleted");
        callback()
    }, 1000);
};


// task1(function(){
//     task2(function(){
//         task3(function(){
//             console.log("all task are compaleted")
//         })
//     })
// })

// Making it hard to read and maintain. So you can Use Promises or async/await for avoid callback hell.

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task 1 completed");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task 2 completed");
      resolve();
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task 3 completed");
      resolve();
    }, 1000);
  });
}

// async function runAll() {
//   await task1();
//   await task2();
//   await task3();
//   console.log("all tasks are completed using async/await");
// }

// runAll();
