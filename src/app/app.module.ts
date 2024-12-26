import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from './service/todo.service';
import { TodoListComponent } from './component/todo-list/todo-list.component';


@NgModule({
  declarations: [AppComponent , TodoListComponent],
  imports: [BrowserModule, FormsModule , ReactiveFormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
