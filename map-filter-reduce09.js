// map function :- map function is used to transform an array

const arr = [5, 1, 3, 2, 6];

// function double(x){
//     return x*2;
// }

// const output = arr.map(double);

// console.log(output);

// function triple(x){
//     return x*3;
// }

// const output = arr.map(triple);

// console.log(output);

// function binary(x){
//     return x*toString(2);
// }

// const output = arr.map(binary);

// console.log(output);

// filter function :- filter function is used to filter the value inside the array

const arr1 = [5, 1, 3, 2, 6];

// function isOdd(x){
//     return x%2;
// }

// const output = arr1.filter(isOdd)

function isEven(x) {
    return x % 2 == 0;
}

// const output = arr1.filter(isEven);

// function isGreater(x){
//     return x>2;
// }

// const output = arr1.filter(isGreater)

// const output1 = arr1.filter((x) => {           this is another method
//     return x>2;
// })

// console.log(output1);

// reduce function :-  reduce function is used at a place where you have to take all value of an array and come with the single value out of them

const arr2 = [4, 1, 2, 5, 6, 3];
// normal method

function findSum(arr2) {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i];
    }
    return sum;
}

console.log(findSum(arr2));

const result = arr2.reduce(function (acc, curr) {
    acc = acc + curr;     // here acc act as sum and curr as arr[i]
    return acc;
}, 0);
console.log(result);

// normal method

function findMax(arr2) {
    let max = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr2));


const result1 = arr2.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr
    }
    return acc
}, 0);
console.log(result1);



const users = [
    {firstName: "Ravi", lastName: "Shankar"},
    {firstName: "Rishu", lastName: "Anand"},
    {firstName: "Soni", lastName: "Kumari"},
    {firstName: "Rozy", lastName: "Kumari"},
];

const output3 = users.map((x) =>{
    return x.firstName + x.lastName;
});
console.log(output3);
