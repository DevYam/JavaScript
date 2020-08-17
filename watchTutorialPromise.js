let userLeft = true
let userWatchingCatMeme = true
function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft)
            reject('user left')
        else if (userWatchingCatMeme)
            reject("user watching cat meme")
        else
            resolve("Thumbs up! and subscribe")
    })
}

watchTutorialPromise()
    .then((message)=>{
        console.log("Success "+message)
    }).catch((message)=>{
        console.log(":( "+message)
})
