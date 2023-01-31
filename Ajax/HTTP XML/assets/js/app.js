let cl = console.log;
let baseUrl = `https://jsonplaceholder.typicode.com/posts`;
const postContainer = document.getElementById('postContainer');
const postForm = document.getElementById('postForm');
const titleControl = document.getElementById('title');
const infoControl = document.getElementById('info');
const btnSubmit = document.getElementById('btnSubmit');
const btnUpdate = document.getElementById('btnUpdate');

let postArray = [];
// CRUD  >> create, read, update and delete

const onPostEdit = (ele) => {
    cl(ele.closest('.card').dataset.id);
    let getEditId = +ele.closest('.card').dataset.id;

    // let updateUrl = `${baseUrl}/${getEditId}`
    // cl(updateUrl);
    // let obj = makeApiCall("GET", updateUrl);
    // cl("In Edit Fun", obj);
    // cl(postArray)
    let obj = postArray.find(post => post.id === getEditId);
    cl(obj);
    localStorage.setItem("updateId", getEditId);
    localStorage.setItem("updateObj", JSON.stringify(obj));
    btnSubmit.classList.add('d-none');
    btnUpdate.classList.remove('d-none');
    titleControl.value = obj.title;
    infoControl.value = obj.body;
}

const onPostDelete = (ele) => {
    cl(ele.closest('.card').dataset.id);
    let getDeleteId = ele.closest('.card').dataset.id;
    let deleteUrl = `${baseUrl}/${getDeleteId}`
    makeApiCall("DELETE", deleteUrl);
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
// Ajax >> async javascript XML

// To update web page with out reloading completly/partialy
// to communicate with server

// POST >> to create and save data in database
// GET >>  to get data from database
// DELETE >> to remove object from database
// PUT >> to update object completly
// PATCH >> to update data/object partialy/completly

// API >> client and server communication
// XMLHttpRequest >> constructor method

function makeApiCall(methodName, apiUrl, body) {
    // let body = undefined;
    // 1 create object of XMLHttpRequest constructor
    let xhr = new XMLHttpRequest();
    // 2 configration 
    // open(methodName, apiUrlLink, true for async js)
    xhr.open(methodName, apiUrl, true);
    // 3 
    xhr.onload = function () {
        // cl(xhr.readyState)
        if ((xhr.status === 200 || xhr.status === 201) && xhr.readyState === 4) {
            // cl(xhr.response);
            let data = JSON.parse(xhr.response);
            if (methodName === "GET" && Array.isArray(data)) {
                postArray = data;
                templating(postArray);
            } else {
                cl(xhr.response);
            }
        } else {
            cl('Error')
        }
    }
    // 4  send
    xhr.send(body);
}

makeApiCall('GET', baseUrl);

const onPostSubmit = (e) => {
    e.preventDefault();
    let obj = {
        title: titleControl.value,
        body: infoControl.value,
        userId: Math.floor(Math.random() * 10) + 1,
    }
    cl(obj)
    obj.id = 101;
    makeApiCall("POST", baseUrl, JSON.stringify(obj));
    createPostCards(obj);
    e.target.reset();
}

const onPostUpdate = (e) => {
    let updateObj = JSON.parse(localStorage.getItem("updateObj"));
    cl(updateObj);
    let obj = {
        title: titleControl.value,
        body: infoControl.value,
        id: updateObj.id,
        userId: updateObj.userId
    }
    let updateUrl = `${baseUrl}/${updateObj.id}`
    makeApiCall("PUT", updateUrl, JSON.stringify(obj));
    btnSubmit.classList.remove('d-none');
    btnUpdate.classList.add('d-none');

    postArray.forEach(post => {
        if (post.id === +updateObj.id) {
            post.title = titleControl.value;
            post.body = infoControl.value
        }
    })
    postContainer.innerHTML = '';
    templating(postArray);
    postForm.reset();
}

postForm.addEventListener("submit", onPostSubmit)
btnUpdate.addEventListener("click", onPostUpdate)
// readyState

// readyState === 0 >> request is not initialized
// 1 >> backend connection setup
// 2 >> request received
// 3 >> processing request
// 4 >> responce is ready


// status
// 200  successfull
// 201 >> creted successfull
// 404 >> not found
// 403 >> Forbidden
// 401 >> Unauthorized

// 5XX 
