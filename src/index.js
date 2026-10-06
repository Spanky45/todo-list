import "./styles.css";
import { Todo } from "./todo";
import { Project } from "./project";

const school = new Project("School");

const homework = new Todo(
    "Finish homework",
    "Finish JavaScript assignment",
    "2026-10-10",
    "high",
    "Do chapter 5 first"
);

school.addTodo(homework);

console.log(school);
console.log("Webpack is working!");
