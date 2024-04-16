var a = 100;
let b = 50;
const c = 80;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);   // var is shadowing the value of a that is outside the block scope
console.log(b);
console.log(c);