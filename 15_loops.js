////    FOR loop

for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    //console.log(`inner loop value is: ${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`Outer loop value is: ${j}`);
        
    }
    
}


//  WHILE LOOP   *************


let i = 0;
while (i <=10) {
    //console.log(`Value if i is ${i}`);
    i++;
}



// Do while loop   *********************************

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
