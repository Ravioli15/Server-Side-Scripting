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


async function msg_await(){
    const msg1  = await promise1
    console.log('Message1:',msg1)
    const msg2  = await promise2
    console.log('Message2:',msg2)
}
msg_await()

async function msg_await_with_catch(){
    try{
        const msg1  = await promise1
        console.log('Message1:',msg1)
        const msg2  = await promise2
        console.log('Message2:',msg2)
    }catch{
        console.error(error)
    }

}
msg_await_with_catch()

async function msg_await_all(){
    for await (msg of [promise1,promise2]){
        console.log("wait mesage:")
        console.log(msg)
    }
}
msg_await_all();



/*
async function msg_not_await(){
    const msg1  = promise1;
    console.log('Message1:',msg1)
    const msg2  = promise2;
    console.log('Message2:',msg2)
}
*/
//msg_not_await()