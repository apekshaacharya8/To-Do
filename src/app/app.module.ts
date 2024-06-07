import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { ToDoListComponent } from './component/todo-list/todo-list.component';
import { ToDoService } from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ToDoListComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
