function renderProjects(manager) {
    const projectsList = document.querySelector(".projects-list");
    const projectTitle = document.querySelector(".current-project-title");
    
    projectsList.textContent = "";

    manager.projects.forEach((project) => {
        // console.log(project.name);
        const projectName = document.createElement("button");

        projectName.textContent = project.name;

        projectName.addEventListener("click", () => {
            // console.log(project.name);
            projectTitle.textContent = project.name;
            renderTodos(project);
        });

        projectsList.appendChild(projectName);
    });
}

function renderTodos(project) {
    const todoListContainer = document.querySelector(".todo-list");

    todoListContainer.textContent = "";
    
    project.todos.forEach((todo) => {
        // console.log(todo.title);
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.textContent = todo.title;

        todoListContainer.appendChild(todoItem);
    });
}

export { renderProjects, renderTodos };