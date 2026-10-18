import "./styles.css";
import { Todo } from "./todo";
import { Project } from "./project";
import { TodoManager } from "./todoManager";
import { renderProjects } from "./dom";
import { renderTodos } from "./dom";
import { setupAddProject } from "./dom";
import { setupAddTodo } from "./dom";

const manager = new TodoManager();
const homework = new Todo(
    "Finish homework",
    "Finish JavaScript assignment",
    "2026-10-10",
    "high",
    "Do chapter 5 first"
);

manager.addProject("School");
manager.addProject("Work");

const school = manager.getProject("School");

school.addTodo(homework);

console.log(school);
console.log(manager);

renderProjects(manager);
setupAddProject(manager);
setupAddTodo(manager);
