// there are 3 ways to consume promise

// Parallaly
// Sequencely
// Race

let cl = console.log;

// function promisify(item, timer){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(item)
//         }, timer);
//     })
// }

const promisify = (item, timer) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(item)
    }, timer);
})


const p = () => promisify("HTML", 10000);
const q = () => promisify("javaScript", 5000);
// const r = () => promisify("Angular", 3000);
const r = () => {
    return promisify("Angular", 3000)
};

// cl(p(), q(), r())


async function parallalyCall() {
    let allPromises = [p(), q(), r()];
    const output = await Promise.all(allPromises);
    const [output1, output2, output3] = output;
    // cl(output)
    cl(`Promises are consumed parallaly and result is ${output1} ${output2} ${output3}`)
}

parallalyCall()


async function raceCall() {
    let allPromises = [p(), q(), r()];
    const op1 = await Promise.race(allPromises);
    cl(op1)
}

raceCall()


// print10()
// 10 30 20 
