let cl = console.log;


let token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM1MjRlZmU0ZTcwMDAwOTIxNzA1NCIsImZpcnN0TmFtZSI6IkphbWVzIiwibWlkZGxlTmFtZSI6bnVsbCwibGFzdE5hbWUiOiJCb25kIiwidXNlcm5hbWUiOiI2MmIzNTI0ZWZlNGU3MDAwMDkyMTcwNTQiLCJlbWFpbCI6ImphdmFzY3JpcHRpc2Nvb2xzdHVmZkBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbCwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc1N1c3BlbmRlZCI6ZmFsc2UsInJvbGUiOlsiYyJdLCJpc0FyY2hpdmVkIjpmYWxzZSwibGFzdFNpZ25lZEluIjoxNjY3NzUwODM1LCJpc05ldyI6ZmFsc2UsIm9yZ05hbWUiOm51bGwsIm9yZ0lkIjoiNjBjODZjNWU5MDBkYTM0OTEwNDQ0Mzk3IiwiYWdyZWVtZW50QWNjZXB0ZWQiOnRydWUsImFsbG93ZWRPcGVyYXRpb25zIjpudWxsLCJpYXQiOjE2Njc4ODcyMjIsImV4cCI6MTY2Nzk3MzYyMn0.SI7whcm87cgIpZrdKF8_H4PU5GJb9byjLZ0if_nMEeA`


const postContainer = document.getElementById('postContainer');
const postForm = document.getElementById('postForm');
const titleControl = document.getElementById('title');
const infoControl = document.getElementById('info');
const btnSubmit = document.getElementById('btnSubmit');
const btnUpdate = document.getElementById('btnUpdate');

let baseUrl = `http://localhost:3000/posts`;

const createCard = (post) => {
    let div = document.createElement("div");
    div.classList.add("card")
    div.classList.add("mb-4")
    div.setAttribute('data-id', post.id);
    div.innerHTML = `
   <div class="card-header">
        ${post.title}
   </div>
   <div class="card-body">
        ${post.body}
       <div class="mt-3 text-right">
           <button class="btn btn-primary" onclick="onPostEdit(this)">Edit</button>
           <button class="btn btn-danger"  onclick="onPostDelete(this)">Delete</button>
       </div>
   </div>
    `
    postContainer.append(div)
}

const templating = (arr) => {
    arr.forEach(post => {
        createCard(post)
    })
}

// const onPostEdit = (ele) => {
//     let editId = ele.closest(".card").getAttribute('data-id');
//     localStorage.setItem("updateId", editId);
//     let editUrl = `${baseUrl}/${editId}`;

//     fetchApi("GET", editUrl)
//         .then(data => {
//             titleControl.value = data.title;
//             infoControl.value = data.body;

//             btnUpdate.classList.remove('d-none')
//             btnSubmit.classList.add('d-none')

//         })
//         .catch(cl)
// }
const onPostEdit = async (ele) => {
    try {
        let editId = ele.closest(".card").getAttribute('data-id');
        localStorage.setItem("updateId", editId);
        let editUrl = `${baseUrl}/${editId}`;

        let data = await fetchApi("GET", editUrl)
        cl(data);

        if (data.title && data.body) {
            titleControl.value = data.title;
            infoControl.value = data.body;

            btnUpdate.classList.remove('d-none')
            btnSubmit.classList.add('d-none')
        }


    } catch (err) {
        cl(err)
    }
}

// const onPostDelete = (ele) => {
//     cl(ele.closest('.card'))
//     let getDeleteId = ele.closest('.card').dataset.id;
//     let deleteUrl = `${baseUrl}/${getDeleteId}`;
//     fetchApi("DELETE", deleteUrl)
//         .then(cl)
//         .catch(cl)

// }

const onPostDelete = async (ele) => {
    try {
        cl(ele.closest('.card'))
        let getDeleteId = ele.closest('.card').dataset.id;
        let deleteUrl = `${baseUrl}/${getDeleteId}`;
        let res = await fetchApi("DELETE", deleteUrl);
        cl(res)

    } catch (err) {
        cl(err)
    }

}


async function fetchApi(methodName, url, body) {
    const res = await fetch(url, {
        method: methodName,
        body: body,
        headers: {
            "content-type": "application/json"
        }
    });
    return await res.json(); //  res.json() also returns promise
    // if method is get >>> data 
}

// fetchApi("GET", baseUrl)
// .then(data => {
//     templating((data))
// })
// .catch(err => cl(err))

async function getAllPost() {
    try {
        let data = await fetchApi("GET", baseUrl);
        templating(data);
    } catch (err) {
        throw new Error("Error : Something went Wrong")
    }
}

getAllPost();

// const onPostCreate = (eve) => {
//     eve.preventDefault();
//     let post = {
//         title: titleControl.value,
//         body: infoControl.value,
//         userId: Math.floor(Math.random() * 10) + 1
//     }
//     fetchApi("POST", baseUrl, JSON.stringify(post))
//         .then(cl)
//         .catch(cl)
//     eve.target.reset();
//     cl(post)
// }

const onPostCreate = async (eve) => {
    eve.preventDefault();
    try {
        let post = {
            title: titleControl.value,
            body: infoControl.value,
            userId: Math.floor(Math.random() * 10) + 1
        }
        let res = await fetchApi("POST", baseUrl, JSON.stringify(post))
        eve.target.reset();
    } catch (err) {
        cl(err)
    }

}
const onPostUpdate = async (e) => {
    try {
        let getUpdateId = localStorage.getItem('updateId');
        cl(getUpdateId);
        let updateUrl = `${baseUrl}/${getUpdateId}`;
        let post = {
            title: titleControl.value,
            body: infoControl.value
        }
        let res = await fetchApi("PATCH", updateUrl, JSON.stringify(post))
        cl(res)
    } catch (err) {
        cl(err)
    }

}

postForm.addEventListener("submit", onPostCreate);
btnUpdate.addEventListener("click", onPostUpdate)