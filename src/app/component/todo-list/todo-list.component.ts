import { Component, OnInit } from '@angular/core';
import { TodoService , Todo } from 'src/app/service/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

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

  deleteTodo(id: number): void {
    if (confirm('Are you sure you want to delete this to-do?')) {
      this.todoService.deleteTodo(id);
      this.todos = this.todoService.getTodos();
    }
  }
}
