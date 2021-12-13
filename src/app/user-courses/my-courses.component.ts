import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Building } from '../classes/building';
import { Classroom } from '../classes/classroom';
import { CourseTypes } from '../classes/courseTypes';
import { Globals } from '../globals';
import { UserCoursesService } from '../services/user-courses.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  sortOrder: number = 0;
  sortKey: any;
  sortField: string = '';

  courseNameErr: boolean = false;
  courseDateErr: boolean = false;
  courseDurationErr: boolean = false;
  urlErr: boolean = false;
  selectedBuildingErr: boolean = false;
  selectedClassroomErr: boolean = false;
  displayModal: boolean = false;

  constructor(public service: UserCoursesService, public globals: Globals) {
  }



  ngOnInit(): void {
    this.service.GetCourses();
  }


  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


  showModalDialog() {
    this.ClearErrStates();
    this.ClearInputs();
    this.displayModal = true;
  }

  CreateNewCourse() {
    if (this.ValidateInputs()) return;

    this.service.AddNewCourse();
    this.displayModal = false;
  }

  ValidateInputs(): boolean {
    this.ClearErrStates();
    let errorsCnt = 0;
    debugger;
    if (this.service.courseName.length == 0) {
      this.courseNameErr = true;
      errorsCnt += 1;
    }
    if (this.service.courseDuration.length == 0) {
      this.courseDurationErr = true;
      errorsCnt += 1;
    }

    let numberRegEx = /^\d+$/;
    if (this.service.selectedCourseType == 1 && (this.service.url.length == 0 || !this.service.url.match(numberRegEx))) {
      this.urlErr = true;
      errorsCnt += 1;
    }
    if (this.service.courseName.length == 0) {
      this.courseNameErr = true;
      errorsCnt += 1;
    }

    if (errorsCnt > 0) return true; else return false;
  }

  ClearErrStates() {
    this.courseNameErr = false;
    this.courseDateErr = false;
    this.courseDurationErr = false;
    this.selectedBuildingErr = false;
    this.selectedClassroomErr = false;
    this.urlErr = false;
  }

  ClearInputs() {
    this.service.courseName = '';
    this.service.courseDate = new Date();
    this.service.courseDuration = '';
    this.service.selectedCourseType = 1;
    this.service.url = '';
    this.service.selectedBuilding = new Building();
    this.service.selectedClassroom = new Classroom();
    this.service.courseNote = '';
  }
}
