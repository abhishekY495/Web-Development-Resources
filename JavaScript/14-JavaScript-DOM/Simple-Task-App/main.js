const inputTask = document.querySelector('input[type=text]');
const taskList = document.querySelector('#tasks');
const addBtn = document.querySelector('.add-btn');
const deleteDoneTasksBtn = document.querySelector('.delete-done-tasks');
const errorToast = document.getElementById('error-toast');


const newTask = () => {
    // Creating elements
    let li = document.createElement('li');
    let buttonDone = document.createElement('button');
    let buttonDelete = document.createElement('button');
    let span = document.createElement('span');
    let div = document.createElement('div');
    let hr = document.createElement('hr');
    
    // Adding classes to elements
    li.className = 'list-group-item my-1 add-li-animation';
    buttonDone.className = 'btn-sm btn btn-success done px-3 my-1';
    buttonDelete.className = 'btn-sm btn btn-danger delete px-3 my-1 ms-1';
    span.className = 'text-break fs-5';
    div.className = 'button-group';
    hr.className = 'my-1';
    
    // Adding input-text
    span.textContent = inputTask.value;
    
    // Appending elements
    buttonDelete.appendChild(document.createTextNode('Delete'));
    buttonDone.appendChild(document.createTextNode('Done'));
    li.append(span);
    li.append(hr);
    div.append(buttonDone);
    div.append(buttonDelete);
    li.append(div);

    // Adding task to your-task-list
    taskList.prepend(li);
    
    // Clearing input text
    inputTask.value = '';
}

const addTask = () => {
    if (inputTask.value.length===0) {
        const toast = new bootstrap.Toast(errorToast);
        toast.show();
    } else {
        newTask();
    }
}
const addTask2 = (e) => {
    if (e.key === 'Enter') {
        if (inputTask.value.length===0) {
            const toast = new bootstrap.Toast(errorToast);
            toast.show();
        }
        else {
            newTask();
        }
    }
}


const doneTask = (e) => {
    if(e.target.classList.contains('done')){
        e.target.parentElement.parentElement.children[0].classList.toggle('text-decoration-line-through');
        e.target.parentElement.parentElement.children[0].classList.toggle('fw-bold');
        e.target.parentElement.parentElement.classList.toggle('bg-secondary');
        e.target.parentElement.parentElement.classList.toggle('bg-gradient');
        e.target.parentElement.parentElement.classList.toggle('opacity-75');
        e.target.parentElement.parentElement.classList.toggle('mx-2');
        
        // Changing button text to Undo
        if (e.target.parentElement.children[0].textContent === 'Done') {
            e.target.parentElement.children[0].textContent = 'Undo';
        } else {
            e.target.parentElement.children[0].textContent = 'Done';
        }
        
        // Appending done tasks to last
        if (e.target.parentElement.children[0].textContent === 'Undo') {
            e.target.parentElement.parentElement.parentElement.append(e.target.parentElement.parentElement);
        } else {
            e.target.parentElement.parentElement.parentElement.prepend(e.target.parentElement.parentElement);
        }
    }
}

const deleteTask = (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.className += ' delete-li-animation';
        e.target.parentElement.parentElement.addEventListener('animationend', ()=> {
            taskList.removeChild(e.target.parentElement.parentElement);
        });
    }
}

const deleteDoneTask = () => {
    let buttons = document.querySelectorAll('.done');
    buttons.forEach(btn => {
        if (btn.textContent === 'Undo') {
            btn.parentElement.parentElement.className += ' delete-li-animation';
            btn.parentElement.parentElement.addEventListener('animationend', ()=> {
                btn.parentElement.parentElement.remove();
            })
        }

    });
}

addBtn.addEventListener('click', addTask);
inputTask.addEventListener('keypress', addTask2);

taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', doneTask);
deleteDoneTasksBtn.addEventListener('click', deleteDoneTask);




// if (deleteDoneTasksBtn) {
//   deleteDoneTasksBtn.addEventListener('click', function () {
//     const toast = new bootstrap.Toast(errorToast);
//     toast.show();
//   })
// }