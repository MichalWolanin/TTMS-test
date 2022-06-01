import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentsComponent } from './pages/students/students.component';
import { StudentComponent } from './components/student/student.component';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {StudentDetailsComponent} from "./pages/student-details/student-details.component";
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
