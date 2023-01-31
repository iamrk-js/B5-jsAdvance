let cl = console.log;

// .. Promise >> It is a javaScript Object, which gives some value in near fature

// It used to handle async js 

// Promise has 4 Stages 
// 1 Pending >> Waiting for Result
// 2 fullfilled/reslove >> Action related to promise is success
// 3 rejest >> Action related to promise is failed
// 4 settled >> Promise either fullfilled or reject


// Why we should use Promise Over callback functions

// 1 Better Error Handling
// 2 Improves readability of code
// 3 Better Handling of async oprations
// 4 Better flow of control definations 


let promise = new Promise((resolve, reject) => {
    let error = false;
    if (error) {
        reject(`Invalid Username or Password`)
    } else {
        resolve('Successfully Login.')
    }
})

// promise
//     .then(function(res){
//         cl(res)
//     })
//     .catch(function(err){
//         throw new Error(err)
//     })

promise
    .then((res) => cl(res))
    .catch((err) => { throw new Error(err) })