let cl = console.log;
const postsContainer = document.getElementById('postsContainer')
let posts = [
    {
        title: 'Angular 14',
        info: 'Angular 14 remove support for IE'
    },
    {
        title: 'Angular 15',
        info: 'Angular 15 we can create Angular Routing with out Router Module'
    },
    {
        title: 'Angular 15',
        info: 'Angular 15 we can create Angular HTTP call with out HTTPMudule Module'
    }
]


// create a new post and save in database

function createBlogs(postObj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = (Math.floor(Math.random() * 10) + 1);
            if ((postObj.title && postObj.info) && num >= 5) {
                posts.push(postObj);
                resolve(posts);
            } else {
                reject(`Enter proper data`)
            }
        }, 3000);
    })


}



// createBlogs({
//     title: 'Es7 features',
//     info: 'Async await is added over Promises'
// }, getdata)

// new Post is updated in UI for reader

function getdata(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = (Math.floor(Math.random() * 10) + 1)
            if (num >= 6) {
                resolve(arr)
            } else {
                reject(`Something went Wrong !!!`)
            }

        }, 1000);
    })

}

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



createBlogs({
    title: 'Es7 features',
    info: 'Async await is added over Promises'
})
    .then(res => {
        return getdata(res)  // returns promise
    })
    .then(templating)
    .catch(err => {
        throw new Error(err)
    })