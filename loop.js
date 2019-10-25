var person = {fname:"John", lname:"Doe", age:25}; 
var text = "";
 
for (const index in person) {// index or key
  text += person[index];
}
console.log(text);

var person2 = ["John", "Doe", 25]; 
var text2 = "";
for (const element of person2) {// index or key
  text2 += element;
}
console.log(text2);