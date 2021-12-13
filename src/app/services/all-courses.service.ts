import { Injectable } from '@angular/core';
import { Course } from '../classes/course';
import { CourseTypes } from '../classes/courseTypes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, Subscription, take, tap } from 'rxjs';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class AllCoursesService {

  coursesList: Course[] = [];

  constructor(private http: HttpClient, private globals: Globals) {

  }


  public GetCourses(): Subscription {
    // debugger;
    return this.http.get<any>('assets/allCourses.json').pipe(
      take(1),
      map(x => x.data),
      map((courses: Array<Course>) => courses.map(x => Object.assign(new Course(), x))),
      tap(courses => this.coursesList = courses),
    ).subscribe();

  }


  public AddCourse(course: Course) {
    this.globals.userSelectedCourses.push(course);    
  }
}
