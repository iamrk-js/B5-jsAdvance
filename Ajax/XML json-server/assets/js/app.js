let cl = console.log;

let token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM1MjRlZmU0ZTcwMDAwOTIxNzA1NCIsImZpcnN0TmFtZSI6IkphbWVzIiwibWlkZGxlTmFtZSI6bnVsbCwibGFzdE5hbWUiOiJCb25kIiwidXNlcm5hbWUiOiI2MmIzNTI0ZWZlNGU3MDAwMDkyMTcwNTQiLCJlbWFpbCI6ImphdmFzY3JpcHRpc2Nvb2xzdHVmZkBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbCwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc1N1c3BlbmRlZCI6ZmFsc2UsInJvbGUiOlsiYyJdLCJpc0FyY2hpdmVkIjpmYWxzZSwibGFzdFNpZ25lZEluIjoxNjY3NzUwODM1LCJpc05ldyI6ZmFsc2UsIm9yZ05hbWUiOm51bGwsIm9yZ0lkIjoiNjBjODZjNWU5MDBkYTM0OTEwNDQ0Mzk3IiwiYWdyZWVtZW50QWNjZXB0ZWQiOnRydWUsImFsbG93ZWRPcGVyYXRpb25zIjpudWxsLCJpYXQiOjE2Njc4ODcyMjIsImV4cCI6MTY2Nzk3MzYyMn0.SI7whcm87cgIpZrdKF8_H4PU5GJb9byjLZ0if_nMEeA`


let baseUrl = `http://localhost:3000`;
const postContainer = document.getElementById('postContainer');
const postForm = document.getElementById('postForm');
const titleControl = document.getElementById('title');
const infoControl = document.getElementById('info');
const btnSubmit = document.getElementById('btnSubmit');
const btnUpdate = document.getElementById('btnUpdate');


const makeApicall  = (method, url, data) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("content-type", "application/json; charset");
        xhr.onload = function () {
            if ((xhr.status === 200 || xhr.status === 201) && xhr.readyState === 4) {
                resolve((xhr.response))
            } else {
                reject("Some Thing Went Wrong ??")
            }
        }

        xhr.send(data)
    })

}



const createPostCards = (obj) => {
    let div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('mb-3');
    div.setAttribute('data-id', obj.id);
    let result = `
                    <div class="card-header">
                        <h4>
                            ${obj.title}
                        </h4>
                    </div>
                    <div class="card-body">
                        <p>
                            ${obj.body}
                        </p>
                        <div class="text-right">
                            <button class="btn btn-info"  onclick="onPostEdit(this)">Edit</button>
                            <button class="btn btn-danger"  onclick="onPostDelete(this)">Delete</button>
                        </div>
                    </div>
                `
    div.innerHTML = result;
    postContainer.append(div);
}

const templating = (arr) => {
    arr.forEach(ele => {
        createPostCards(ele);
    });
}

const onPostDelete = (ele) => {
    cl(ele)
    let getDeleteId = ele.closest('.card').dataset.id;
    cl(getDeleteId);
    let deleteUrl = `${baseUrl}/posts/${getDeleteId}`;
    makeApicall("DELETE", deleteUrl)
        .then(cl)
        .catch(cl)
}


// function makeApicall(methodName, apiUrl, body) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open(methodName, apiUrl);
//         // xhr.setRequestHeader("authorization", "Shidhant");
//         // xhr.setRequestHeader("content-type", "application/json; charset");
//         xhr.onload = function () {
//             cl(xhr.status)
//             if ((xhr.status === 200 || xhr.status === 201) && xhr.readyState === 4) {
//                 resolve(xhr.response)
//             } else {
//                 reject("Something went wrong.");
//             }
//         };
//         xhr.send(body)
//     })

// }
const onPostSubmit = (eve) => {
    eve.preventDefault();
    let post = {
        title: titleControl.value,
        body: infoControl.value,
        userId: (Math.floor(Math.random() * 10)),
    }
    let postUrl = `${baseUrl}/posts`
    makeApicall("POST", postUrl, JSON.stringify(post))
        .then(cl)
        .catch(cl)
    cl(post)
}
let getAllPostUrl = `${baseUrl}/posts`

makeApicall("GET", getAllPostUrl)
    .then(res => {
        let data = JSON.parse(res);
        templating(data);
    })
    .catch(err => cl(err))





postForm.addEventListener("submit", onPostSubmit)