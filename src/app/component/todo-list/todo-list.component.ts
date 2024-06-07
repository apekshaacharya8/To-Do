import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/Model/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []; // Array to store list of todos
  newTodoDescription : string ='';
  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    // Fetch todos from the service when the component initializes
    this.fetchTodos();
  }

  // Method to fetch todos from the service
  fetchTodos() {
     this.todoService.getTodos();
  }

  // Method to add a new todo
  addTodo(description: string) {
    if (description.trim()) {
      this.todoService.addTodo({
        id: this.generateId(),
        description: description,
        completed: false
      });
      this.fetchTodos(); // Refresh the list of todos
    }
  }

  // Method to mark a todo as completed
  markAsCompleted(todo: Todo) {
    todo.completed = true;
    this.todoService.updateTodo(todo);
  }

  // Method to delete a todo
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
    this.fetchTodos(); // Refresh the list of todos
  }

  // Helper method to generate unique todo IDs
  generateId(): number {
    return Math.floor(Math.random() * 1000); // Replace with your preferred ID generation logic
  }
}
