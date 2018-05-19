import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObject = {
    
  }
  constructor() { }
//http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf

  ngOnInit() {
  }

}
