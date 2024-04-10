// D E S T R U C T I O N ******

// const car = {
//     color: "red",
//     model_no: 7,
//     automaticc: true
// }
// function printer({color, model_no,automaticc}){
//     console.log(color, model_no,automaticc);
// }
// printer(car);


// Template String  ********

// const ag= 18;
// const nam = "RAVI";

// const str = `Hi My Name is ${nam} and I Am ${22} Years Old`;
// console.log(str);


//  A  R  R  O  W    F  U  N  C  T  I  O  N*********

// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(3, 4));


///   P  R  O  M  I  S  E  S  ******

const promise = new Promise((resolve, reject)=>{
    if(true) {
        resolve("It Worked");
    } else {
        reject("It got rejected");
    }
});