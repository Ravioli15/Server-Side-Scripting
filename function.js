function add1(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}
  
const add3 = (x, y) => x + y
const add4 = (x, y) => (x + y)
console.log(add1(1,2))
console.log(add2(1,2))
console.log(add3(1,2))
console.log(add4(1,2))

function not1(x) {
    return !x;
}

const not2 = x => !x;
console.log(not1(true))
console.log(not1(false))


