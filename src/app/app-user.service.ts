import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppUserService {
baseUrl: string = "http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers"
registerUrl: string = "?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf"
loginUrl: string = "/login?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf"
//http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf

  constructor(private http: HttpClient) { }
    
    postData(user){
        return this.http.post(this.baseUrl+this.registerUrl, user)
    }
//http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf

    loginData(loginUser){
        console.log("loginData executed", loginUser)
        return this.http.post(this.baseUrl+this.loginUrl, loginUser)
    }
    
//http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf


}
