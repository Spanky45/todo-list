import { Todo } from "./todo";


/**
 * Displays all projects in the sidebar.
 * Updates the main content when a project is selected.
 *
 * @param {TodoManager} manager - The application's project manager.
 */
function renderProjects(manager) {
    const projectsList = document.querySelector(".projects-list");
    const projectTitle = document.querySelector(".current-project-title");

    // Clear existing buttons to prevent duplicates when re-rendering
    projectsList.textContent = "";

    manager.projects.forEach((project) => {
        const projectName = document.createElement("button");

        projectName.textContent = project.name;

        projectName.addEventListener("click", () => {
            projectTitle.textContent = project.name;
            renderTodos(project);
            manager.activeProject = project
        });

        projectsList.appendChild(projectName);
    });
}

/**
 * Displays the todos belonging to a selected project.
 *
 * @param {Project} project - The project whose todos will be displayed.
 */
function renderTodos(project) {
    const todoListContainer = document.querySelector(".todo-list");

    // Clear previously displayed todos when switching projects
    todoListContainer.textContent = "";

    project.todos.forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const todoHeader = document.createElement("div");
        todoHeader.classList.add("todo-header");
        todoItem.appendChild(todoHeader);

        const todoTitle = document.createElement("h3");
        todoTitle.textContent = todo.title;

        const todoPriority = document.createElement("span");
        todoPriority.textContent = todo.priority.toUpperCase();

        todoHeader.append(todoTitle, todoPriority);

        const todoDetails = document.createElement("div");
        todoDetails.classList.add("todo-details");
        todoItem.appendChild(todoDetails);

        const todoDue = document.createElement("p");
        todoDue.classList.add("todo-date");

        if (todo.dueDate === "") {
            todoDue.textContent = "No due date";
        } else {
            const date = new Date(todo.dueDate + "T00:00:00");

            todoDue.textContent = "Due: " + date.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
            });
        }

        todoDetails.appendChild(todoDue);

        todoListContainer.appendChild(todoItem);
    });
}

/**
 * Sets up the Add Project form and its event listeners.
 * Handles opening, submitting, and canceling the form.
 *
 * @param {TodoManager} manager - The application's project manager.
 */
function setupAddProject(manager) {
    const addProjectBtn = document.querySelector(".add-project-btn");
    const addProjectForm = document.querySelector(".add-project-form");
    const projectNameInput = document.querySelector(".project-name-input");
    const cancelProjectBtn = document.querySelector(".cancel-project-btn");
    
    addProjectBtn.addEventListener("click", () => {
        addProjectForm.hidden = false;
        addProjectBtn.hidden = true;
    });

    addProjectForm.addEventListener("submit", (event) => {
        // Prevent the browser's default form submission and page reload
        event.preventDefault();

        const inputValue = projectNameInput.value.trim();

        // Reject empty or whitespace-only project names
        if (inputValue === "") {
            return;
        }

        manager.addProject(inputValue);
        renderProjects(manager);

        // Reset and hide the form after successful submission
        projectNameInput.value = "";
        addProjectForm.hidden = true;
        addProjectBtn.hidden = false;
    });

    cancelProjectBtn.addEventListener("click", () => {
        // Discard unsaved input when the user cancels
        addProjectForm.hidden = true;
        projectNameInput.value = "";
        addProjectBtn.hidden = false;
    });
}

function setupAddTodo(manager) {
    const addTodoBtn = document.querySelector(".add-todo-btn");
    const addTodoForm = document.querySelector(".add-todo-form");
    const cancelTodoBtn = document.querySelector(".cancel-todo-btn");
    const todoTitle = document.querySelector(".todo-title");
    const todoDescription = document.querySelector(".todo-description");
    const todoDue = document.querySelector(".todo-due");
    const todoPriority = document.querySelector("#todo-priority");
    const todoNotes = document.querySelector(".todo-notes");


    addTodoBtn.addEventListener("click", () => {
        addTodoForm.hidden = false;
        addTodoBtn.hidden = true;
    });

    cancelTodoBtn.addEventListener("click", () => {
        addTodoForm.hidden = true;
        addTodoBtn.hidden = false;

        // inputs empty here
        todoTitle.value = "";
        todoDescription.value = "";
        todoNotes.value = "";
        todoDue.value = "";
        todoPriority.value = "low";
    });

    addTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = todoTitle.value.trim();
        const description = todoDescription.value.trim();
        const priority = todoPriority.value;
        const notes = todoNotes.value.trim();
        const due = todoDue.value;
            // if (todoDue.value = undefined) {
            //     todo.due
            // }

        const newTodo = new Todo(title, description, due, priority, notes);

        manager.activeProject.addTodo(newTodo);

        renderTodos(manager.activeProject);

        addTodoForm.hidden = true;
        addTodoBtn.hidden = false;
        

        todoTitle.value = "";
        todoDescription.value = "";
        todoNotes.value = "";
        todoDue.value = "";
        todoPriority.value = "low";
    });
}

export { renderProjects, renderTodos, setupAddProject, setupAddTodo };