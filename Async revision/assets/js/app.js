let cl = console.log;
const postsContainer = document.getElementById('postsContainer');

// 2015 >> es6 >> ECMA15
// Bydefault non-bloking , sync
// javaScript is single threaded >> It performes one task at a time


// callback function >> A function called/returned in another function
function print10() {
    cl(10)
}

function print20(cb) {
    setTimeout(() => {
        cl(20);
        cb();
    }, 2000);
}

function print30() {
    cl(30)
}

print10();
print20(print30);
// print30();

// function fetchData(cbFun) {
//     setTimeout(() => {
//         cl(`data is fethched from database`);
//         cbFun();
//     }, 3000);
// }

// function templating() {
//     cl(`UI is created`)
// }

// fetchData(templating);
// templating();


let postArray = [
    {
        title: "Angular 14 Feature",
        info: 'It removes support for IE'
    },
    {
        title: "Angular 15 Feature",
        info: `We don't have to import Routing Module to create Routing`
    }
]

function createBlog(post, cbFun) {
    setTimeout(() => {
        if (post.title && post.info) {
            postArray.push(post);
            cbFun()
        }
    }, 3000)
}


function fetchPosts() {
    setTimeout(() => {
        let data = postArray;
        templating(data);
    }, 2000);
}


function templating(arr) {
    let result = '';
    arr.forEach((post) => {
        result += `
        <div class="card mb-3">
            <div class="card-header">${post.title}</div>
            <div class="card-body">${post.info}</div>
        </div>
        `
    })
    postsContainer.innerHTML = result;
}

createBlog({
    title: "Angular 15 Feature",
    info: `We don't have to import HTTP Module to create HTTP`
}, fetchPosts);
// fetchPosts()