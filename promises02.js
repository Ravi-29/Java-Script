const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DataBase calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 2000)
}).then(function () {
    console.log("Async task 2 resolved");
})




new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@exmple.com"})

    }, 2000)
}).then(function(user){
    console.log(user);
})





const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Ravi", password: "12121"})
        } else {
            reject('Something went wrong')
        }
    }, 2000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Either Reject or Resolve");
})





const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Ravi", password: "12121"})
        } else {
            reject('Something went wrong')
        }
    }, 2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/Ravi-29')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

