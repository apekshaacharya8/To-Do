import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { ResumeComponent } from './component/Resume/resume.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent },
  {path:'resume' , component: ResumeComponent},
  { path: '**', component: DashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
