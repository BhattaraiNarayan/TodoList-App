//Extracting with the help of ID.
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


let editTodo = null;  // globally defined variable

const addTodo = () => {
  const task = input.value.trim();
  if (!task) return;

  if (addBtn.value === "Update") {
    // Fix: Use `task`, not `inputText`
    editTodo.querySelector("p").innerHTML = task;
    addBtn.value = "Add";
    addBtn.textContent = "Add";
    input.value = "";
    editTodo = null;
  } else {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = task;
    li.appendChild(p);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    todoList.appendChild(li);
    input.value = '';
  }
};

// Edit/Delete handler
const updateTodo = (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    todoList.removeChild(e.target.parentElement);
    input.value = "";
    return;
  }

  if (e.target.classList.contains("editBtn")) {
    const li = e.target.parentElement;
    const p = li.querySelector("p");
    input.value = p.innerHTML;
    addBtn.value = "Update";  // Set correct value
    addBtn.textContent = "Update";
    editTodo = li;  // Fix: store the <li>, not the event

    setTimeout(() => {
      input.focus();
      input.selectionStart = input.selectionEnd = input.value.length;
    }, 0);
  }
};


//EventListener
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click',updateTodo);


//when i press the enter key,it directly goes to the addBtn
input.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Optional: stops form submission if inside a form
    addBtn.click();     // Simulate button click
  }
});
