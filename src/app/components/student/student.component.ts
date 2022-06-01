import {Component, Input} from '@angular/core';
import {StudentView} from "../../models/student.interface";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  name?: string;

  @Input() student?: StudentView
}
