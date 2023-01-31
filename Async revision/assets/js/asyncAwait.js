// async await >> It is syntaticle sugar coating over Promises
let cl = console.log;
function print10() {
    cl(10)
}

function print20() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num >= 5) {
                resolve(20)
            } else {
                reject(`Something went Wrong`)
            }
        }, 2000);
    })
}

function print30() {
    cl(30)
}


print10();

// print20()
//     .then(res => {
//         cl(res);
//         print30()
//     })
//     .catch(cl)

async function init() {
    try {
        let res = await print20();
        cl(res);
        print30();
    } catch (err) {
        alert(err)
    }
}

init();


