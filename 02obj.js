let user = {};

user["likes birds"] = true;

// console.log(user["likes birds"])

delete user["likes birds"];
// console.log(user["likes birds"])


let key = "likes birds";

user[key] = true;
// console.log(user[key])


// dot notation cannot be used in a similar way

let user2 = {
    name: "John",
    age: 30
};

let key2 = prompt("What do you want to know about the user?", "name");
console.log(user2[key2]);

let user1 = {
    name: "John",
    age: 30
};

let key1 = "name";
// console.log(( user1.key1 ))