function main(){
    let test1 = ""
    let test2 = "1"
    let test3 = null
    let test4 = undefined
    let test5 = Symbol("1")

    console.log(checkBoolean(test1))
    console.log(checkBoolean(test2))
    console.log(checkBoolean(test3))
    console.log(checkBoolean(test4))
    console.log(checkBoolean(test5))
}

function checkBoolean(value){
    if(value){
        return true;
    }else {
        return false;
    }
}

main();

var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 +' add' + num2 +'= \'' + result +'\'';
console.log(string1); // 1 add 2 = '3'

const string2 = `${num1} add ${num2} = '${result}'`;
console.log(string2); // 1 add 2= '3'




let department = "CS"

let obj = {
    name: "lee",
    job: "Assistant Professor",
    anotherObj:{
        first_name:"Sungchul"
    },
    etc: function(){
        return this.name + " Department: "+ department
    }
};

obj.anotherObj.last_name = "Lee"

console.log(obj.name)
console.log(obj.job)
console.log(obj.anotherObj.first_name)
console.log(obj.anotherObj.last_name)
console.log(obj.etc())

function User_defined_obj(){
    this.name="lee"
    this.job="Assistant Professor"
    this.anotherObj =new function(){
        this.first_name ="Sungchul"
    }
    this.etc = function(){
        return this.name + " Department: "+ department
    }
}
let user_defined_obj =new User_defined_obj()
user_defined_obj.anotherObj.last_name = "Lee"
console.log(user_defined_obj.name)
console.log(user_defined_obj.job)
console.log(user_defined_obj.anotherObj.first_name)
console.log(user_defined_obj.anotherObj.last_name)
console.log(user_defined_obj.etc())