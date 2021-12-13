import { Component, OnInit } from '@angular/core';
import { UserProgramService } from '../services/user-program.service';

@Component({
  selector: 'app-user-program',
  templateUrl: './user-program.component.html',
  styleUrls: ['./user-program.component.scss']
})
export class UserProgramComponent implements OnInit {

  constructor(public service: UserProgramService) { }

  ngOnInit(): void {
    this.service.GetCourses();
  }

}
