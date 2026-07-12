const addbutton = document.getElementById('add-btn');
const taskinput = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');

addbutton.addEventListener('click',function(){
    const tasktext = taskinput.value;
    if(tasktext == ''){
        alert('Please enter a task');
        return;
    }
    const li = document.createElement('li');
    li.textContent = tasktext;
    tasklist.appendChild(li);
    taskinput.value = '';
});