// function namee(){
//     console.log("R");
//     console.log("A");
//     console.log("V");
//     console.log("I");
// }
// namee()

function addition(a, b) {
    //console.log(a + b);
}

const results = addition(4, 5)


function addition (a, b){
    // let result = a + b
    // return result
    return a + b
}

const result = addition(5, 6)
//console.log("result:", result);



function loginUser(userName){
    return `${userName} just logged in`
}
//console.log(loginUser("Ravi Shankar"));



function loginUsers(userName){
    if(userName === undefined){
        console.log("Please enter a UserName");
        return
    }
    return `${userName} just logged in`
}
//console.log(loginUser("Ravi Shankar"));
//console.log(loginUsers());




function calculateCartPrice(...num1){    //    ...  is rest Operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 600));



const user = {
    username: "Ravi",
    price: 199
}

function handeklObject(anyObject){
    console.log( `Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handeklObject(user)

handeklObject({
    username: "Sam",
    price: 666
})