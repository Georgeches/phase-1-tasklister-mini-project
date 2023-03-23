document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let toDoList = document.querySelector("#tasks")
  form.addEventListener('submit', addToDo)

  function addToDo(e){
    e.preventDefault()
    let newToDo = document.createElement('li')
    let deleteToDo = document.createElement('button')
    let taskValue = document.getElementById("new_task").value
    deleteToDo.textContent = 'X'
    deleteToDo.addEventListener('click', deleteTask)
    newToDo.textContent = `${taskValue}      `
    newToDo.appendChild(deleteToDo)
    toDoList.appendChild(newToDo)
    form.reset()
  }

  function deleteTask(e){
    e.target.parentNode.remove()
  }
});
