const { odd, even } = require('./object');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // Odd number
    return odd;
  }
  return even;
}

console.log(checkNumber(10)); //use func.js module
console.log(checkStringOddOrEven('hello'));