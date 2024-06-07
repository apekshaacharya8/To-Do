import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { ToDoService } from './service/todo.service';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { ToDoItemComponent } from './component/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    TodoListComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
