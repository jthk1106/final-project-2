import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppUserService {
url: string = "http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf"


  constructor(private http: HttpClient) { }
    
    postData(user){
        return this.http.post(this.url, user)
    }
    
    loginData(user){
        return this.http.post(this.url, user)
    }
    
//http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/appUsers?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf


}
