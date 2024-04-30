// promises are use toh handle async operation in javascript

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// const cart = ["shoes", "pants", "Shirts"]

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// promise.then(function (orderId){
//     proceedToPayment(orderId);
// });


// const GITHUB_API = "https://api.github.com/users/Ravi-29"

// const user = fetch(GITHUB_API);

// console.log(user);

const cart = ["shoes", "pants", "Shirts"]

createOrder(cart, function(orderId){
        proceedToPayment(orderId, function (paymentInfo){
            shoeOrderSummary(paymentInfo, function (){
                updateWalletBalance();
            });
        });
    });


    createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => shoeOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalletBalance(paymentInfo))     //both upper and lower peice of cose are samr
