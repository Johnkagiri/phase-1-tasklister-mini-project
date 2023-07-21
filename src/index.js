document.addEventListener("DOMContentLoaded", () => {
  //create an event listener of the form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    task = document.querySelector("#new-task-description").value;
    handleTodo(task);
    document.querySelector("form").reset();
  });
});

//function adds to toDo
function handleTodo(toDo) {
  let p = document.createElement("p");
  p.textContent = toDo;
  document.querySelector("#list").appendChild(p);
  let btn = document.createElement("button");
  btn.textContent = "x";
  btn.addEventListener("click", handleDelete);
  p.appendChild(btn);
  let priority = document.querySelector("#priorities").value;
  console.log(priority);

  //conditions for priorities
  if (priority == "High") {
    p.style.color = "red";
  } else if (priority == "Moderate") {
    p.style.color = "green";
  } else if (priority == "Low") {
    p.style.color = "orange";
  } else {
    p.style.color = "black";
  }
}

//handles deleting of toDo lists
function handleDelete(e) {
  e.target.parentNode.remove();
}
