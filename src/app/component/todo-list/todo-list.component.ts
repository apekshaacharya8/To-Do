import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from 'src/app/service/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  //todos: Todo[] = [];
  isEditing: boolean = false;
  isModalOpen: boolean = false;
  todos: any[] = [];
  currentTodo = { title: '', description: '', id: '' };
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  newTodo(): void {
    const title = prompt('Enter title');
    if (title) {
      const description = prompt('Enter description');
      if (description) {
        this.todoService.addTodo({ id: 0, title, description, completed: false });
        this.todos = this.todoService.getTodos();
      }
    }
  }

  editTodo(todo: Todo): void {
    const title = prompt('Edit title', todo.title);
    if (title) {
      const description = prompt('Edit description', todo.description);
      if (description) {
        this.todoService.updateTodo({ ...todo, title, description });
        this.todos = this.todoService.getTodos();
      }
    }
  }

  // Function to open modal
  openModal(todo?: any): void {
    if (todo) {
      this.isEditing = true;
      this.currentTodo = { ...todo };
    } else {
      this.isEditing = false;
      this.currentTodo = { title: '', description: '', id: '' };
    }
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Save or update the to-do
  saveTodo(): void {
    if (this.isEditing) {
      // If editing, find and update the existing to-do
      const index = this.todos.findIndex(todo => todo.id === this.currentTodo.id);
      if (index !== -1) {
        this.todos[index] = { ...this.currentTodo };
      }
    } else {
      const newTodo = { ...this.currentTodo, id: this.generateId() };
      this.todos.push(newTodo); // Add the new to-do to the list
    }

    this.closeModal();
  }

  // Simple function to generate a unique ID for new todos
  generateId(): number {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  // Toggle the completion status of the todo
  toggleComplete(todo: { id: number, title: string, description: string, completed: boolean }): void {
    todo.completed = !todo.completed;
    this.saveTodosToLocalStorage();
  }

  saveTodosToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
