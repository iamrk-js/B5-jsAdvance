let cl = console.log;

// JavaScript >> It is single threaded lang >> It excutes one task at a time
// by default Non blocking 
//Async convert into blocking 
// function print10() {
//     cl(10)
// }

// function print20(cb) {
//     setTimeout(() => {
//         cl(20);
//         cb();
//     }, 3000)
// }

// function print30() {
//     cl(30)
// }

// print10();
// print20(print30);
// print30();


// callback function >> 
// A function which is called in another function
// A function which is return in another function
// A function which is passed as parameter in another function


// function fetchData(cb) {
//     setTimeout(() => {
//         cl(`Data get from Database Successfully`);
//         cb();
//     }, 6000);
// }

function templating() {
    cl(`Ul li are created !!!`)
}

// function templating2() {
//     cl(`Cards are created !!!`)
// }

// fetchData(templating);
// fetchData(templating2);
// templating();



// getdata();

function templating(arr) {
    let result = '';
    arr.forEach((post) => {
        result += `
    <div class="card mb-3">
                <div class="card-header">${post.title}</div>
                <div class="card-body">
                    ${post.info}
                </div>
    </div>
    `
    })
    postsContainer.innerHTML = result;
}


