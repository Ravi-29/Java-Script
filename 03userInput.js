/// we take some input from the user
const prompt = require('prompt-sync')();

let user = {
    name: "john",
    age:  30
};

// let key = prompt("What do you want to know about the user?", "name");
// console.log(user[key]);


let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5,
};

// console.log(bag.apple);

let fruit1 = prompt("Which fruit to buy?", "apple");
let bag1 = {};
bag1[fruit1] = 5
// console.log(bag1.apple);

let fruit2 = "apple";
let bag2 = {
    [fruit + 'Computer']: 5
};
// console.log(bag.appleComputer)