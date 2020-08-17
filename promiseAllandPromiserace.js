const recordVideo1 = new Promise((resolve, reject) => {
    resolve('video 1 recorded')
})

const recordVideo2 = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
})

const recordVideo3 = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
})
/**
 * Promise.all will return an array of messages, the tasks promised
 * inside the Promise.all run concurrently if a task finishes before \
 * the other then also it waits for the remaining ones to complete
 */


Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((messages)=>{
    console.log(messages)
})

/**
 * Unlike Promise.all, Promise.race will take all the tasks as input but will
 * return only the tasks that get executed at the earliest.
 */

Promise.race([
    recordVideo3, recordVideo2, recordVideo1
]).then((message)=>{
    console.log(message)
})
