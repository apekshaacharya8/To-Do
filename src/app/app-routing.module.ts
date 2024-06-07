import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { ToDoListComponent } from './component/todo-item/todo-item.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent },
  {path:'todo' , component: ToDoListComponent},
  { path: '**', component: DashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
