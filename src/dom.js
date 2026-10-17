
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
        todoItem.textContent = todo.title;

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
    });

    cancelProjectBtn.addEventListener("click", () => {
        // Discard unsaved input when the user cancels
        addProjectForm.hidden = true;
        projectNameInput.value = "";
    });
}

export { renderProjects, renderTodos, setupAddProject };
