// How to work call stack :
// Keeps track of function calls. When a function is invoked, it is pushed onto the stack. When the function finishes execution, it is popped off.

function frist() {
    second();
    console.log("First function call")
}

function second() {
    third();
    console.log("Second function call")
}

function third() {
    console.log("Third function call")
}

frist();

// 1.frist() is call -> push into callstack.
// 2.Inside frist(),second() is call -> push into callstack.
// 3.Inside second(), third() is call -> push into callstack.
// 4.third() is call and logged "Third function call".
// 5.third() completes → popped off the callstac.
// 6."Second function call" logged.
// 7.second() completes → popped off the callstac.
// 8."First function call" logged.
// 9.first() completes → popped off the callstac.

//The call stack run looks like the given point