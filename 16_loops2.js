// ***************************************************  for off loop    *********************************************************


let i = [1,2,3,4,5]
for (const num of i) {
    //console.log(num);
}


const greetings = "Hello World"

for (const greets of greetings) {
    //console.log(`Each char is ${greets}`);
}


/// ****************************************************** maps  *****************************************************************

const map = new Map()
map.set("IN", "India")
map.set("Uk", "United Kingdom")
map.set("Fr", "France")
map.set("USA", "United State of America")

// console.log(map);

for (const key of map) {
    //console.log(map);
}

for (const [key, value] of map) {
    //console.log(key, ":-", value);
    
}


// ********************************  For in Loop  ***********************************************

const myObject = {
    js: 'Java Script',
    cpp: 'C++',
    rb: "Ruby"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}




// ******************************************* for each loop **********************************************************************

const coding = ["Js", "Java", "ruby", "Cpp"]

function printMe(item){
    //console.log(item);
}
//coding.forEach(printMe)




coding.forEach( (items)=>{
   // console.log(items);
})



coding.forEach( (items, index, arr)=>{
    console.log(items, index, arr);
})





