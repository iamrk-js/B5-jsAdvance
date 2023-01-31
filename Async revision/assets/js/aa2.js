let cl = console.log;
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

function createBlog(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = (Math.random() > .5) ? false : true
            if (error) {
                reject(`Something went wrong`)
            } else {
                if (post.title && post.info) {
                    postArray.push(post)
                    resolve(postArray)
                }
            }
        }, 3000)
    })
}


function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = (Math.random() > .5) ? false : true
            if (error) {
                reject('Data is not getting')
            } else {
                let data = postArray;
                resolve(data)
            }
        }, 2000);
    })
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


async function init() {
    try {
        
        let res1 = await createBlog({
            title: "Angular 15 Feature",
            info: `We don't have to import HTTP Module to create HTTP`
        })
        let data = await fetchPosts();
        templating(data)

    }
    catch (err) {
        throw new Error(err)
    }
}

init()






// createBlog({
//     title: "Angular 15 Feature",
//     info: `We don't have to import HTTP Module to create HTTP`
// })
//     .then(res => {
//         return fetchPosts()
//     })
//     .then(res => templating(res))
//     .catch(err => {
//         throw new Error(err)
//     })

