const todoGet = document.getElementById("todoGet");
const addBtn = document.getElementById("addbutton");
const todoListCard = document.getElementById("todoListCard");

const savedTodos = JSON.parse(localStorage.getItem('todosData'));
let todosData = savedTodos ? savedTodos : [];

// Function to save todos to localStorage
function saveTodos() {
    localStorage.setItem('todosData', JSON.stringify(todosData));
}

function addTodoFn(task, index) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    if (task.completed) {
        checkbox.checked = true;
        li.classList.add("completed");
    }

    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTodos();
        renderTodoData();
    });

    // Create a span to show the task text
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.classList.add("taskText");

    // Create an input field for editing the task
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = task.text;
    taskInput.classList.add("taskInput");
    taskInput.style.display = "none";  


    const editButton = document.createElement("button");
    editButton.textContent = "Edit";  
    editButton.classList.add("edit");

    editButton.addEventListener("click", () => {
        
        if (editButton.textContent === "Edit") {
            
            taskText.style.display = "none";   
            taskInput.style.display = "inline";
            taskInput.style.width = "55%"; 
            taskInput.style.padding = "5px"; 
            taskInput.focus(); 
            editButton.textContent = "Save"; 
        } else {            
            const newText = taskInput.value.trim();
            if (newText) {
                task.text = newText;  
                saveTodos();
                renderTodoData();
            }
            taskInput.style.display = "none"; 
            taskText.style.display = "inline"; 
            editButton.textContent = "Edit";  
        }
    });

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        const index = todosData.indexOf(task);
        if (index > -1) {
            todosData.splice(index, 1);
            renderTodoData();
            saveTodos();
        }
    });


    li.prepend(checkbox);
    li.append(taskText);  
    li.append(taskInput);  
    li.append(removeBtn);
    li.appendChild(editButton);
    todoListCard.append(li);
}

function renderTodoData() {
    todoListCard.innerHTML = "";
    todosData.forEach(addTodoFn);
}

renderTodoData();

addBtn.addEventListener("click", () => {
    const taskText = todoGet.value.trim();
    if (taskText) {
        const newTask = { text: taskText, completed: false };
        todosData.push(newTask);
        saveTodos();
        todoGet.value = "";
        renderTodoData();
    }
});

todoGet.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});
