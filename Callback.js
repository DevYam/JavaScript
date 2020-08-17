const userLeft = false
const userWatchingCatMeme = true

function watchTutorialCallBack(callback, errorCallback){
    if (userLeft){
        errorCallback({
            name : 'user-left',
            message : ':('
        })
    }
    else if (userWatchingCatMeme){
        errorCallback({
            name: 'user-watching-cat-meme',
            message: 'worse :('
        })
    }
    else
        callback('Thumbs up and subs')
}

watchTutorialCallBack((message)=>{
    console.log("Success "+message)
},(error)=>{
    console.log(error.name+', '+error.message)
})
