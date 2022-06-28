import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {StudentsComponent} from "./pages/students/students.component";
import {NgModule} from "@angular/core";
import {StudentDetailsComponent} from "./pages/student-details/student-details.component";

const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: 'students', component: StudentsComponent },
      { path: 'students/:id', component: StudentDetailsComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
