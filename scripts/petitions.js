const API_URL = "https://my-json-server.typicode.com/FelipeRomeroCo/Proyecto-final/task"

axios.get(API_URL)
    .then( resp => fillTask(resp.data))
    .catch(err => console.log(err))

function fillTask(data) {
    data.map(d =>{
        let newTask = document.createElement("article")
        newTask.classList.add("task")
        let taskTitle = document.createElement("h3")
        taskTitle.innerText = d.title
        let personTask = document.createElement("p")
        personTask.innerHTML = `Responsable: <span>${d.person}</span>`
        let deadline = document.createElement("p")
        deadline.innerHTML = `Plazo: <span>${unixToDate(d.deadline)}</span>`

        newTask.appendChild(taskTitle) 
        newTask.appendChild(personTask) 
        newTask.appendChild(deadline) 

        let columnTodo = document.getElementById("todoTasks")
        let columnInProgres = document.getElementById("inProgressTasks")
        let columnDone = document.getElementById("doneTasks")

        if (d.state ==="To Do"){
            columnTodo.appendChild(newTask)
        }
        if (d.state ==="In Progress"){
            columnInProgres.appendChild(newTask)
        }
        if (d.state ==="Done"){
            columnDone.appendChild(newTask)
        } 
    })
}