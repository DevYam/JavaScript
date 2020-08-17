let p = new Promise((resolve, reject) => {
    let test = 2
    if (test === 2)
        resolve('promise success')
    else
        reject('Promise rejected')
})

p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

/**
 * This is a simple promise scenario were we have used then and catch to
 * resolve and reject the promises respectively. Here, since the case is
 * true hence the promise got resolved and we are getting a success message
 *
 * Promises are great when we have something that is going to take longer
 * in background for example downloading an image from a web server we
 * can have the success scenario in then part which will be executed when
 * the download is complete and we can catch any errors in the catch
 * part of the promise
 */
