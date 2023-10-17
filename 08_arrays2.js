const marvel = ["Thor", "IronMan", "SpiderMan"]
const dc = ["SuperMan", "WonderWomen", "flash"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

// const all = marvel.concat(dc)
// console.log(all);

// const all2 = [...marvel, ...dc]
// console.log(all2);
// console.log(all[5]);


const arr = [1, 2, 3, [4, 5, 6], 7, [4, 5]]
const arr2 = arr.flat(Infinity)
console.log(arr2);
console.log(arr2.sort());