import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {StudentsComponent} from "./pages/students/students.component";
import {NgModule} from "@angular/core";
import {StudentComponent} from "./components/student/student.component";

const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: 'students', component: StudentsComponent, children: [
          { path: 'student', component: StudentComponent}
        ]},
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
