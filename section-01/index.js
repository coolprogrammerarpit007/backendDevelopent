// let a = 25;
// let b = 75;
// console.log(a + b);


const fs = require('fs');
const textContent = fs.readFileSync('./text.txt');
console.log(textContent.toString());