let cl = console.log;

const hrAdminCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1
            if (num >= 3) {
                resolve(`candidate is selected for 1st Round`);
            } else {
                reject(`call for new candidate`)
            }
        }, 3000);
    })
}

const firstTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 3) {
                resolve(`Candidate is selected for 2nd Round`);
            } else {
                reject(`Candidate is  failed to pass 1st Round`)
            }
        }, 2000);
    })
}


const sencondTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 2) {
                resolve(`Candidate is selected for ML Round`);
            } else {
                reject(`Candidate is  failed to pass 2nd Round`)
            }
        }, 1000);
    })
}


function mLRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 6) {
                resolve(`Hr will get back to you very Soon`);
            } else {
                reject(`Candidate is  failed to pass ML Round`)
            }
        }, 500);
    })
}

hrAdminCall()
    // .then(res => cl(res))
    .then(res => {
        cl(res)
        return firstTechInt()  // returns Promise
    })
    .then((res) => {
        cl(res);
        return sencondTechInt()
    })
    .then(res => {
        cl(res);
        return mLRound();
    })
    .then(res => cl(res))
    .catch(err => {
        throw new Error(err)
    })