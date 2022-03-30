document.querySelector('#btn-1').addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','user.json',true);
    xhr.onload = function(){
        if(this.status===200){
            const user = JSON.parse(this.responseText);
            let output = `<ul>
            <li>UserID - ${user.id}</li>
            <li>UserName - ${user.name}</li>
            <li>UserEmail - ${user.email}</li>
            </ul>`
            document.querySelector('#user-div').innerHTML = output;
        }
    }
    xhr.send();
})



document.querySelector('#btn-2').addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','users.json',true);
    xhr.onload = function(){
        if(this.status===200){
            const userList = JSON.parse(this.responseText);
            userList.forEach(user => {
                let output = `<li>${user.id} / ${user.name} / ${user.email}</li>`
                document.querySelector('#users-div').innerHTML += output;
            });
        }
    }
    xhr.send();
})
