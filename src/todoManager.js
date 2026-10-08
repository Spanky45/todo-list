import { Project } from "./project";

class TodoManager {
    constructor(){
        this.projects = [
            new Project("Default")
        ];
    }

    addProject(name) {
        const project = new Project(name);
        this.projects.push(project);
    }

    getProject(nameToFind) {
        return this.projects.find((project) => project.name === nameToFind);
    }

    removeProject(nameToRemove) {
        this.projects = this.projects.filter((project) => project.name !== nameToRemove);
    }
}

export { TodoManager}