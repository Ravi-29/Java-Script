const user = {
    username: "Ravi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "rahul"
// user.welcomeMessage()
// console.log(this);

function anyThing() {
    //console.log(this);
}
anyThing()







// ************************************************** Arrow Function ********************************************************************

const chai = () =>{
    let userName = "Hitesh"
    console.log(this);
}
//chai()


const addd = (num1, num2) =>{
    // const result = num1 + num2
    // return result
    return num1 + num2
}
console.log(addd(3, 5));

const addd1 = (num1, num2) =>  (num1 + num2)

console.log(addd1(3, 4));