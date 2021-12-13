import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = '';
  password: string = '';
  showIncorrectMessage: boolean = false;

  constructor(public service: LoginService, private globals: Globals) { }

  ngOnInit(): void {
  }


  onClick() {
    this.service.Login(this.login, this.password).then(
      result => {
        this.globals.Navigate('main');
      },
      error => {
        console.log(error);
        this.showIncorrectMessage = true;
      }
    )
  }
}
