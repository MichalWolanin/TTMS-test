import {Component, Input} from '@angular/core';
import {StudentView} from "../../models/student.interface";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  name?: string;

  @Input() student?: StudentView

  ngOnInit(): void {
    this.name = this.student?.name.split('../students/')[1];
  }
}
