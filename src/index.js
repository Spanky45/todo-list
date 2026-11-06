import "./styles.css";
import { Todo } from "./todo";
import { Project } from "./project";
import { TodoManager } from "./todoManager";
import { renderProjects } from "./dom";
import { renderTodos } from "./dom";
import { setupAddProject } from "./dom";
import { setupAddTodo } from "./dom";
import { setupTodoSort } from "./dom";

const manager = new TodoManager();
const homework = new Todo(
    "Finish homework",
    "Finish JavaScript assignment",
    "2026-10-10",
    "high",
    "Do chapter 5 first"
);
const poop = new Todo(
    "Finish pooping",
    "Finish poop assignment",
    "2026-12-11",
    "low",
    "Do chapter poop first"
);
const fart = new Todo(
    "Fart practice",
    "Finish fart assignment",
    "2026-11-10",
    "medium",
    "Do chapter fart first"
);

manager.addProject("School");
manager.addProject("Work");

const school = manager.getProject("School");

school.addTodo(homework);
school.addTodo(homework);
school.addTodo(poop);
school.addTodo(poop);
school.addTodo(fart);
school.addTodo(fart);

console.log(school);
console.log(manager);

renderProjects(manager);
setupAddProject(manager);
setupAddTodo(manager);
setupTodoSort(manager);
