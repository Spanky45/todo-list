class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }

    toggleComplete() {
        let completed = false
        completed = !completed
        this.completed = completed
    }

    toggleComplete() {
        this.completed = !this.completed
    }


}

export { Todo };