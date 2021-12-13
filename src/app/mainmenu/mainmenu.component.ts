import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserRoles } from '../classes/userRoles';
import { Globals } from '../globals';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  items: MenuItem[] = [];
  item: MenuItem = {};

  constructor(private globals: Globals, private router: Router) { }

  ngOnInit(): void {
    this.items = [];


    if (this.globals.user.role == UserRoles.student) {
      this.items.push(
        { label: 'Список курсов', command: (event: any) => { this.router.navigate(['allCourses']); } },
        { label: 'Моя программа', command: (event: any) => { this.router.navigate(['userProgram']); } },
        { label: 'Выход', command: (event: any) => { this.globals.LogOut(); } });
    }

    if (this.globals.user.role == UserRoles.teacher) {
      this.items.push(
        { label: 'Список курсов', command: (event: any) => { this.router.navigate(['allCourses']); } },
        { label: 'Мои курсы', command: (event: any) => { this.router.navigate(['userCourses']); } },
        { label: 'Выход', command: (event: any) => { this.globals.LogOut(); } });
    }
  }

  ngOnDestroy() {
    console.log("AAAAAAAA");
  }
}
