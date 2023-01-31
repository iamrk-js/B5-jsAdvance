// Promise are use to handle async javascript
// Promise >> It is a javascript Object, which gives some value in future

// Promise has 4 states
// pending >> wating for result
// fullfilled/resolved >> Action related to promise is success
// reject  >> Action related to promise is failed
// settled  >> promse either fullfiled or rejected

// Benifites of Promise
// 1 Improves readability od code
// 2 Better handling of async operations
// 3 Better Error handling
// 4 Better flow of control defination
let cl = console.log;

let promise = new Promise((resolve, reject) => {
    let err = Math.floor(Math.random() * 10) + 1;
    cl(err)
    if (err < 5) {
        reject(`Invalid username or password`);
    } else {
        resolve(`Successfully Login!!!`);
    }
})


promise
    .then(function (res) {
        cl(`then method is exicuted msg : ${res}`)
    })
    .catch(function (err) {
        cl(`catch method is exicuted msg : ${err}`)
    })