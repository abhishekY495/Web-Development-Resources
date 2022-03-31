const request = new XMLHttpRequest();
console.log(request);

request.open('GET','file1.txt');
request.onload = ()=>{
    console.log(request.responseText);
    console.log(request.responseURL);
    console.log(request.readyState);
}
request.send();




const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','file1.txt',true);
    // xhr.open('GET','file2.txt',true);
    xhr.onload = function(){
        if (this.status===200){
            console.log(request.responseText);
            document.querySelector('#div1').append(xhr.responseText);
        } else if (this.status===404) {
            document.querySelector('#div1').append('File Not Found');
        }
    }
    xhr.send();


    // xhr.onreadystatechange = function(){
    //     if(this.readyState===4 && this.status===200){
    //         console.log(request.responseText);
    //     }
    // }
    // xhr.send();


    // used for loaders
    // xhr.onprogress = function(){
    //     console.log(xhr.readyState);
    // }
    // xhr.send()
    
});


