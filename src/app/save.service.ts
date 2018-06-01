import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SaveService {

baseUrl: string = "http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/stocks?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf"
  
  constructor(private http: HttpClient) { }
//http://jeremy-spring-2018-phortonssf.c9users.io:8080/api/stocks?access_token=YQyvpGYthmdqFwSnaQC9utkfrMyGHLK0ElGUoYtREMZbtOM7nBhAB1LppfFyvaGf

    saveStock(stockObject){
        console.log("saveStock executed", stockObject)
        return this.http.post(this.baseUrl, stockObject)
    }
}
