// Callback Function

setTimeout(function () {
    console.log("Timer");
}, 5000)

function x(y){
    console.log("X");
    y();
}
x(function y() {
    console.log("y");
})