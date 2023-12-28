let p = new Promise((resolve,reject)=>{
    let a =1+2;
    if (a===2){
        resolve("success")
    }else{
        reject("Failed")
    }

})

p.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})
