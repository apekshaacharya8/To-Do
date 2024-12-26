import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private storageKey = 'todos';

  constructor() {
    const savedTodos = localStorage.getItem(this.storageKey);
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    todo.id = new Date().getTime();
    this.todos.push(todo);
    this.saveTodos();
  }

  updateTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      this.saveTodos();
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
  }

  private saveTodos(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }
}
