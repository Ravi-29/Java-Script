// function a() {
//     console.log(b);
// }

// var b = 10;
// a();

// scope where you can access specific variable and function in a code

function a() {
    var a =10;
    console.log(b);
    function b() {
        console.log(a);

    }
}

var b = 10;
a();
