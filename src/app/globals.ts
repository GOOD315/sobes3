import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from "./classes/course";
import { User } from "./classes/User";


@Injectable()
export class Globals {
    constructor(private router: Router) { }

    user: User = new User();
    userSelectedCourses: Array<Course> = [];

    public Navigate(path: string) {
        this.router.navigate([path]);
        console.log(path);
    }

    public LogOut() {
        this.router.navigate(['']);
    }

}