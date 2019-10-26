const string ='abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key:'value',
    },
  },
};
console.time('total time');
console.log('Log: comma for appending variables');
console.log(string, number, boolean);
console.error('Error message');
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('for loop time');
for (let i = 0; i < 100000; i++) {
  continue;
}
console.timeEnd('for loop time');

function b() {
  console.trace('trace error');
}
function a() {
  b();
}
a();
console.timeEnd('total time');