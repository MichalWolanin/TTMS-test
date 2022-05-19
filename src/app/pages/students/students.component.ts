import { Component } from '@angular/core';
import {StudentView} from "../../models/student.interface";
import {Student} from "../../models/student.enum";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: StudentView[] = [
    {
      name: Student.MICHAL,
      result: 2
    },
    {
      name: Student.KACPER,
      result: 1
    },
    {
      name: Student.JAKUB,
      result: 4
    },
    {
      name: Student.MACIEJ,
      result: 5
    },
    {
      name: Student.KRYSTIAN,
      result: 3
    }
  ]
}
