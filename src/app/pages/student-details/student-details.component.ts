import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {StudentView} from "../../models/student.interface";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  student?: Observable<StudentView>;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const name = this.route.snapshot.params["name"];
  }
}
