const condition =false;

const promise  = new Promise((resolve,reject)=>{
    if(condition){
        resolve("perform resolve")
    }else{
        reject("Error handle")
    }

})

promise.then((message)=>{ //get resolve output
        console.log(message)
    }).catch((error)=>{ //get reject output
        console.error(error);
    })

//Declare function
var example_function = function (param){
    return new Promise(function (resolve, reject){
        console.log("Wait 3 sec")
        setTimeout(function(){
            if(param){
                resolve("Done")
            }else{ // Can skip the part
                reject(Error("error"))
            }
        },3000)
    })
}
//Use the example_function
example_function(true)
    .then(function(message){
        console.log(message)
    })
    .catch(function(error){
        console.log(error)
    })

//Promises chaining example
new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(1);
    }, 2000);
})
    .then(function(result) {
        console.log(result); // 1
        return result + 10;
    })
    .then(function(result) {
        console.log(result); // 11
        return result + 20;
    })
    .then(function(result) {
        console.log(result); // 31
    })
    .catch(function(error){
        console.log(error)
    })


//Promises all()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Promise1 resolved');
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('Promise2 resolved');
    }, 1500);
});
   
Promise.all([promise1, promise2])
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error));


