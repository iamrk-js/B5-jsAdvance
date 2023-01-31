let cl = console.log;
function hrAdminCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 5) {
                resolve(`Selected for 1st round`)
            } else {
                reject(`Call to new Candidate for given profile`)
            }
        }, 2000);
    })
    // return promise;
}

function firstTechRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 6) {
                resolve(`candidate is selected for second round`)
            } else {
                reject(`Candidate is failed to pass 1st tech round`)
            }
        }, 1000);
    })
}


function secondTechRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 6) {
                resolve(`Candidate is selected for ML Round`);
            } else {
                reject(`Candidate is failed to pass 2nd tech round`)
            }
        }, 500);
    })
}


function mlRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 6) {
                resolve(`You are slected for Angular Developer Profile, HR will contact you.`)
            } else {
                reject(`Candidate is failed to pass ML round`)
            }
        }, 0);
    })

}

// Promise Chaning >> The process of executing a sequence of async tasks
// one after another using Promise is know as Promise Chaining

hrAdminCall()
    .then(res => {
        cl(res);
        return firstTechRound()  // returns promise
    })
    .then(res => {
        cl(res);
        return secondTechRound() // returns promise
    })
    .then(res => {
        cl(res);
       return mlRound() // returns promise
    })
    .then(res => cl(res))
    .catch(err => {
        throw new Error(err)
    })















