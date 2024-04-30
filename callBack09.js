console.log("Hello");

setTimeout(function (){
    console.log("Whats Going on");
}, 6000)

console.log("Kaise Hai Aap Log");



const cart = ["shoes", "pants", "Shirt"]

api.createOrder(cart, function() {
    api.proceedToPayment(function (){
        
        api.shoeOrderSummary(function (){
            
            api.updateWallet()
        })
    })
})