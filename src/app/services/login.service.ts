import { Injectable } from '@angular/core';
import { UserRoles } from '../classes/userRoles';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private globals: Globals) { }

  public Login(login: string, password: string): Promise<any> {

    let promise: Promise<any>;
    if ((login == "student" && password == "student") || (login == "teacher" && password == "teacher")) {
      this.globals.user.login = login;
      this.globals.user.password = password;
      
      if (login == "student") this.globals.user.role = UserRoles.student;
      else this.globals.user.role = UserRoles.teacher;
      promise = new Promise((resolve, reject) => { resolve(null); });
      return promise;
    } else {
      promise = new Promise((resolve, reject) => { reject(null); });
      return promise;
    }
  }
}
