const form = document.querySelector('form');
const task = document.getElementById('task');
const addBtn = document.getElementById('addBtn');
const contentcontainer = document.getElementById('contentcontainer');

const taskList = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [] ;

console.log(taskList); 
showAllTasks() ;

function showAllTasks(){
    contentcontainer.innerHTML = '';
    taskList.forEach((item,index)=>{
        const div = document.createElement('div')
        div.setAttribute('class',"content")

        const h  = document.createElement('h1')
        h.innerHTML = item
        h.setAttribute("class","h")
        div.append(h)
        
        const btn = document.createElement('button')
        btn.setAttribute("class","deleteButton")
        btn.innerHTML = " - "
        div.append(btn)

        btn.addEventListener('click',()=>{
            taskList.splice(index,1)
            localStorage.setItem("tasks",JSON.stringify(taskList))
            showAllTasks()
        })

        contentcontainer.append(div)       

    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    taskList.push(task.value)
    console.log(taskList)
    localStorage.setItem("tasks",JSON.stringify(taskList))
    showAllTasks()
})

