import { Injectable } from '@angular/core';
import { Course } from '../classes/course';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class UserProgramService {

  coursesList: Array<Course> = [];

  constructor(private globals: Globals) { }

  GetCourses() {
    this.coursesList = this.globals.userSelectedCourses;
  }
}
