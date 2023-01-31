let cl = console.log;

let token = ` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM1MjRlZmU0ZTcwMDAwOTIxNzA1NCIsImZpcnN0TmFtZSI6IkphbWVzIiwibWlkZGxlTmFtZSI6bnVsbCwibGFzdE5hbWUiOiJCb25kIiwidXNlcm5hbWUiOiI2MmIzNTI0ZWZlNGU3MDAwMDkyMTcwNTQiLCJlbWFpbCI6ImphdmFzY3JpcHRpc2Nvb2xzdHVmZkBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbCwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc1N1c3BlbmRlZCI6ZmFsc2UsInJvbGUiOlsiYyJdLCJpc0FyY2hpdmVkIjpmYWxzZSwibGFzdFNpZ25lZEluIjoxNjY3NzUwODM1LCJpc05ldyI6ZmFsc2UsIm9yZ05hbWUiOm51bGwsIm9yZ0lkIjoiNjBjODZjNWU5MDBkYTM0OTEwNDQ0Mzk3IiwiYWdyZWVtZW50QWNjZXB0ZWQiOnRydWUsImFsbG93ZWRPcGVyYXRpb25zIjpudWxsLCJpYXQiOjE2Njc4ODcyMjIsImV4cCI6MTY2Nzk3MzYyMn0.SI7whcm87cgIpZrdKF8_H4PU5GJb9byjLZ0if_nMEeA`


let baseUrl = `http://localhost:3000/posts`;
const postContainer = document.getElementById('postContainer');
const postForm = document.getElementById('postForm');
const titleControl = document.getElementById('title');
const infoControl = document.getElementById('info');
const btnSubmit = document.getElementById('btnSubmit');
const btnUpdate = document.getElementById('btnUpdate');


const makeApicall = (methodName, url, body) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(methodName, url, true);
        xhr.setRequestHeader("content-type","application/json")
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 201) {
                resolve(xhr.responseText)
            } else {
                reject("Error")
            }
        }
        xhr.send(body)
    })
}

makeApicall("GET", baseUrl)
    .then(cl)
    .catch(cl)

const onPostSubmit = (eve) => {
    eve.preventDefault();
    let post = {
        title : titleControl.value,
        body : infoControl.value,
        userId : 5
    }
    makeApicall("POST", baseUrl, JSON.stringify(post))
        .then(res => cl(res))
        .catch(cl)
}


postForm.addEventListener("submit", onPostSubmit)