class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
        this.createdAt = new Date();
        this.id = crypto.randomUUID();
    }

    toggleComplete() {
        this.completed = !this.completed
    }

}

export { Todo };