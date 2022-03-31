document.querySelector('#github-btn').addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users',true);
    xhr.onload = function(){
        if(this.status===200){
            const userList = JSON.parse(this.responseText);
            userList.forEach(user => {
                let output = `
                <div class="d-flex align-items-center bg-light m-2">
                    <div class="flex-shrink-0">
                        <img src="${user.avatar_url}" style="width:150px; height:150px">
                    </div>
                    <div class="flex-grow-1 ms-2 text-dark fs-5">
                        <li style="list-style:none">User ID - ${user.id}</li>
                        <li style="list-style:none">UserName - ${user.login}</li>
                    </div>
                </div>
                `
                document.querySelector('#github-users-div').innerHTML += output;
            });
        }
    }
    xhr.send();
})