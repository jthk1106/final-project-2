import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUser = {
    email: "",
    password: ""
  }
  
  results: any;
  
  constructor(private userService: AppUserService, private _router: Router) { }
//http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf
    login(){
      console.log("login() executed", this.loginUser)
      this.userService.loginData(this.loginUser)
        .subscribe( (data: any) => {
          console.log("login response", data);
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('userId', data.userId);
          //get session storage item "let token = sessionStorage.getItem('token', this.results.token)"

      })
      this._router.navigate([`/search`]);
    }

  ngOnInit() {
  }

}
