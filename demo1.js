var h1= document.querySelector("h1");
var input = document.querySelector("input");
var button = document.querySelector("button");

button.addEventListener("Click",function(){
    h1.innerHTML = input.value;
});