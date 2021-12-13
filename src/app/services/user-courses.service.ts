import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs';
import { Building } from '../classes/building';
import { Classroom } from '../classes/classroom';
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class UserCoursesService {
  courseName: string = '';
  courseDate: Date = new Date();
  courseDuration: string = '';
  selectedCourseType: number = 1;
  url: string = '';
  buildings: Array<Building> = [{ id: 1, name: "Здание №1" }, { id: 2, name: "Здание №2" }, { id: 3, name: "Здание №3" }];
  selectedBuilding: Building = new Building();
  classrooms: Array<Classroom> = [{ id: 1, name: "Аудитория №1" }, { id: 2, name: "Аудитория №2" }, { id: 3, name: "Аудитория №3" }];
  selectedClassroom: Classroom = new Classroom();
  courseNote: string = '';

  coursesList: Course[] = [];

  constructor(private http: HttpClient) {

  }


  public GetCourses() {
    // debugger;
    return this.http.get<any>('assets/allCourses.json').pipe(
      take(1),
      map(x => x.data),
      map((courses: Array<Course>) => courses.map(x => Object.assign(new Course, x))),
      tap(courses => {
        this.coursesList = courses;
        console.log(this.coursesList);

      }),
    ).subscribe();
  }

  public AddNewCourse() {
    let course = new Course();
    course.name = this.courseName;
    course.duration = parseInt(this.courseDuration);
    course.note = this.courseNote;
    course.url = this.url;
    course.building = this.selectedBuilding.name;
    course.classroom = this.selectedClassroom.name;
    course.type = this.selectedCourseType;

    let arr: Array<Course> = [];
    Object.assign(arr, this.coursesList);
    arr.push(course);
    this.coursesList = arr;
  }
}
