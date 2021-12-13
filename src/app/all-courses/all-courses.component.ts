import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Course } from '../classes/course';
import { Globals } from '../globals';
import { AllCoursesService } from '../services/all-courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  sortOptions: SelectItem[];

  sortOrder: number = 0;
  sortKey: any;

  sortField: string = '';

  constructor(public service: AllCoursesService, public globals:Globals) {


    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }



  ngOnInit(): void {
    this.service.GetCourses();
  }

  AddToProgram(course:Course) {
    this.service.AddCourse(course);
  }

}
