import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerUser: any = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

  constructor(private userService: AppUserService, private _router: Router) { }
    register(){
      console.log("register executed", this.registerUser)
      this.userService.postData(this.registerUser)
        .subscribe( data => 
          console.log("registration response", data),
          /*error = hide(){
                      var x = document.getElementById("error active");
                      if (x.style.display === "none") {
                          x.style.display = "block";
                      } else {
                          x.style.display = "none"; 
                    }
          }*/
        ) //try error method after, assign to a variable that will perform alert for taken user
          this._router.navigate([`/login`]);
    }

  ngOnInit() {
  }

}
