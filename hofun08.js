//Higher order Function:- a function which takes another function as argument and return function from it is called higher order function

// function x() {
//     console.log("Ram ram bhai saryane");
// }
// function y(){
//     x();
// }
// y()    //Here y() is higher order function

// example

const radius =[3,1,2,4]

const area = function (radius){
    return Math.PI * radius * radius;
}

const circumference = function (radius){
    return 2 * Math.PI * radius ;
}

const diameter = function (radius){
    return 2 * radius;
}

const calculate = function (radius, logic){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

radius.map(area)

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));