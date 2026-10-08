import "./styles.css";
import { Todo } from "./todo";
import { Project } from "./project";
import { TodoManager } from "./todoManager";

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
school.removeTodo(homework);

manager.removeProject("School");

console.log(school);
console.log(manager);