let userLeft=true;
let watchMeme=false;

function watchCallBack(callBackSuccess,callBackError){
    if(userLeft===false){
        callBackSuccess("user didnt leave")
    }
    else if (watchMeme===true){
        callBackSuccess("user is watching meme")
    }
    else{
        callBackError("user left")
    }

}

watchCallBack((message)=>console.log(message),(message)=>console.error(message));

function watchPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft===false){
            resolve("user didnt leave")
        }
        else if (watchMeme===true){
            resolve("user is watching meme")
        }
        else{
            reject("user left")
        }
    })
}

watchPromise().then((message)=>console.log(message)).catch((message)=>console.log(message))