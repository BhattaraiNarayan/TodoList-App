//Extracting with the help of ID.
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


const addField = () => {
  const task = input.value.trim();
  
  if (task) {
    const li = document.createElement('li');
    const p= document.createElement('p')
    p.innerHTML = task;
    li.appendChild(p);

//creating Delete Button
const deleteBtn=document.createElement("button");
deleteBtn.innerHTML="Delete";
deleteBtn.classList.add("btn","deleteBtn")
li.appendChild(deleteBtn);

//creating Edit Button
const editBtn=document.createElement("button");
editBtn.innerHTML="Edit";
editBtn.classList.add("btn","editBtn");
li.appendChild(editBtn);


todoList.appendChild(li);
input.value = '';   
  }
};

//EditFunction
const editTodo = (e) =>{
  console.log(e.target.innerHTML);
}



//EventListener
addBtn.addEventListener('click', addField);
todoList.addEventListener('click',editTodo);


//when i press the enter key,it directly goes to the addBtn
input.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Optional: stops form submission if inside a form
    addBtn.click();     // Simulate button click
  }
});
