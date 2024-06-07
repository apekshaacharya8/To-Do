import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent },
  {path:'todo' , component: TodoListComponent},
  { path: '**', component: DashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
