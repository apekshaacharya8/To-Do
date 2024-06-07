import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { ResumeComponent } from './component/Resume/resume.component';
import { ResumeService } from './service/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
