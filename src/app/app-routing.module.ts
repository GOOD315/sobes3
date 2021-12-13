import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MyCoursesComponent } from './user-courses/my-courses.component';
import { UserProgramComponent } from './user-program/user-program.component';
// import { MainComponent } from './main/main.component';
// import { UserCoursesComponent } from './user-courses/user-courses.component';

const routes = [
  { path: 'main', component: MainComponent },
  { path: 'allCourses', component: AllCoursesComponent },
  { path: 'userCourses', component: MyCoursesComponent },
  { path: 'userProgram', component: UserProgramComponent },

  { path: '', component: LoginComponent, useAsDefault: true },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
