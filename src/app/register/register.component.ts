import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user: any = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

  constructor(private userService: AppUserService) { }
    register(){
      this.userService.postData(this.user)
        .subscribe( data => 
          console.log(data)) //try error method after, assign to a variable that will perform alert for taken user
    }

  ngOnInit() {
  }

}
