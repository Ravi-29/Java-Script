// let user = new Object();  // Object constructor
// let user = {};  // object literals

//     object literals

let user = {
    name: "John",
    age: 30,
};

console.log(user.name);
console.log(user.age);

// Add a property

user.isAdmin = true;
console.log(user);

// delete a property
delete user.age;
console.log(user);

// multiworded property

let user1 = {
    name: "John",
    age: 30,
    "likes bird": true
};

// for multiworded properties
// user.likes birds = true
// the dot access doesnt work it would give syntax error




