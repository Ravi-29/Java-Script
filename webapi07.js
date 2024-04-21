console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

setTimeout(function b() {
    console.log("End is near");
}, 3000);

console.log("End");

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// setTimeout(greet, 2000, "John"); 




// Event loop:- The Event Loop is constantly monitoring the Call Stack and the Task Queue. 
// If the Call Stack is empty, it takes the first task from the Task Queue and pushes it onto the Call Stack, 
// where it's executed.

// Microtask queue :- all the callback function come through promises will go inside microtask queue as well as mutation observer