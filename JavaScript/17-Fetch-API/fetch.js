document.querySelector('#btn-text').addEventListener('click', getText);
async function getText(){
    const res = await fetch('sample.txt');
    const text = await res.text();
    document.querySelector('#output-text').append(text);
}



document.querySelector('#btn-users').addEventListener('click', getUsers);
async function getUsers(){
    const res = await fetch('users.json');
    const userList = await res.json();

    userList.forEach(user => {
        let output = `
        <ul>
        <li>UserID - ${user.id}</li>
        <li>UserName - ${user.name}</li>
        <li>UserEmail - ${user.email}</li>
        </ul>
        <hr>`;
        document.querySelector('#ouput-users').innerHTML += output;
    });
}



document.querySelector('#btn-posts').addEventListener('click', getPosts2);
async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    document.querySelector('#ouput-posts').innerHTML = '<h2>Posts</h2>'
    posts.forEach(post=>{
        let output = `
        <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${post.id}" aria-controls="collapse${post.id}">
                        ${post.title}
                    </button>
                </h2>
                <div id="collapse${post.id}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body text-black">
                        ${post.body}
                    </div>
                </div>
            </div>
        </div>
        `
        document.querySelector('#ouput-posts').innerHTML += output
    });
}

async function getPosts2(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    document.querySelector('#ouput-posts').innerHTML = '<h2>Posts</h2>'
    posts.forEach(post=>{
        let output = `
        <div class="card mb-3 text-dark">
            <div class="card-header bg-secondary fw-bold fs-3">
                ${post.title}
            </div>
            <div class="card-body">
                <p class="card-text">${post.body}</p>
            </div>
        </div>
        `
        document.querySelector('#ouput-posts').innerHTML += output
    });
}



document.querySelector('#add-post').addEventListener('submit', addPost);
async function addPost(e){
    e.preventDefault();
    let title = document.querySelector('#title').value
    let body = document.querySelector('#body').value

    const res = await fetch ('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    const myPost = await res.json();

    let output = `
    <div class="card mb-3 text-dark">
        <div class="card-header bg-secondary fw-bold fs-3">
            ${myPost.title}
        </div>
        <div class="card-body">
            <p class="card-text">${myPost.body}</p>
        </div>
    </div>
    `
    document.querySelector('#your-posts').innerHTML += output;
    document.querySelector('#title').value = '';
    document.querySelector('#body').value = '';
}