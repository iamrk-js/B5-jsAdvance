let cl = console.log;

let token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM1MjRlZmU0ZTcwMDAwOTIxNzA1NCIsImZpcnN0TmFtZSI6IkphbWVzIiwibWlkZGxlTmFtZSI6bnVsbCwibGFzdE5hbWUiOiJCb25kIiwidXNlcm5hbWUiOiI2MmIzNTI0ZWZlNGU3MDAwMDkyMTcwNTQiLCJlbWFpbCI6ImphdmFzY3JpcHRpc2Nvb2xzdHVmZkBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbCwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc1N1c3BlbmRlZCI6ZmFsc2UsInJvbGUiOlsiYyJdLCJpc0FyY2hpdmVkIjpmYWxzZSwibGFzdFNpZ25lZEluIjoxNjY3NzUwODM1LCJpc05ldyI6ZmFsc2UsIm9yZ05hbWUiOm51bGwsIm9yZ0lkIjoiNjBjODZjNWU5MDBkYTM0OTEwNDQ0Mzk3IiwiYWdyZWVtZW50QWNjZXB0ZWQiOnRydWUsImFsbG93ZWRPcGVyYXRpb25zIjpudWxsLCJpYXQiOjE2Njc4ODcyMjIsImV4cCI6MTY2Nzk3MzYyMn0.SI7whcm87cgIpZrdKF8_H4PU5GJb9byjLZ0if_nMEeA`


let baseUrl = `http://localhost:3000/posts`;
const postContainer = document.getElementById('postContainer');
const postForm = document.getElementById('postForm');
const titleControl = document.getElementById('title');
const infoControl = document.getElementById('info');
const btnSubmit = document.getElementById('btnSubmit');
const btnUpdate = document.getElementById('btnUpdate');


function makeApiCall(methodName, url, body) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(methodName, url, true);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("authorization", token);
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 201) {
                resolve(xhr.response)
            } else {
                reject("Error : Something went wrong")
            }
        }
        xhr.send(body);
    })
}

const onPostDelete = (ele) => {
    cl(ele.closest('.card'))
    let getDeleteId = ele.closest('.card').dataset.id;
    let deleteUrl = `${baseUrl}/${getDeleteId}`;
    makeApiCall("DELETE", deleteUrl)
        .then(cl)
        .catch(cl)
        // ele.closest('.card').remove()
}

const onPostEdit = (ele) => {
    let getEditId = ele.closest('.card').getAttribute("data-id");
    localStorage.setItem("updateId" , getEditId);
    let editUrl = `${baseUrl}/${getEditId}`;
    btnUpdate.classList.remove('d-none');
    btnSubmit.classList.add('d-none');
    makeApiCall("GET", editUrl)
        .then(post => {
            cl(post)
            let p = JSON.parse(post);
            titleControl.value = p.title;
            infoControl.value = p.body;
        })
        .catch(cl)
    
    cl(editUrl)
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


makeApiCall("GET", baseUrl)
    .then(res => {
        let data = JSON.parse(res);
        templating(data)
    })
    .catch(cl)

const onPostSubmit = (eve) => {
    eve.preventDefault();
    let obj = {
        title : titleControl.value ,
        body :infoControl.value,
        userId : Math.floor(Math.random() * 10) + 1
    }
    eve.target.reset();
    makeApiCall("POST", baseUrl, JSON.stringify(obj))
    .then(cl)
    .catch(cl)
}


const onPostUpdate = (eve) => {
    cl(`Updating Object`);
    let updateId = localStorage.getItem("updateId");
    cl(updateId);
    let obj = {
        title : titleControl.value,
        body : infoControl.value
    }
    let updateUrl = `${baseUrl}/${updateId}`;
    makeApiCall("PATCH", updateUrl, JSON.stringify(obj))
        .then(cl)
        .catch(cl)
}

postForm.addEventListener("submit", onPostSubmit);
btnUpdate.addEventListener("click", onPostUpdate);