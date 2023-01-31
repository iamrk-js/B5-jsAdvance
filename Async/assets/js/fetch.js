

let cl = console.log;

let urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/photos/1",
    "https://jsonplaceholder.typicode.com/users/1"
]

const allUrls = async () => {
    // loader starts
    // const res = await fetch(urls[0]);
    // return res.json()
    // cl(res)
    // Promise.all >> returns promise
    try{
        const [posts, photos, users] = await Promise.all(urls.map(async (url) => {
            const res = await fetch(url);
            return res.json() // it returns promise
        }))
        cl(posts, photos, users)
        // loader hide 
    }catch(err) {
        cl(err)
        // loader hide 
    }
}

allUrls()


