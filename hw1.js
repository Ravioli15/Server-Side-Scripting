/*
Warren Fletcher
9/29/19
Compsci 382-01
*/

//Homework 1 Problems 1
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
console.log(add(10,20))
console.log(sub(10,20))
console.log(mul(10,20))
console.log(div(10,20))

//Homework 1 Problem 2

for (i = 0; i <= 12; i++) {
    console.log(" 9 times " + i + " is " + mul(i,9));
  }