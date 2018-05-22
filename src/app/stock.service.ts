import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class StockService {
    //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=demo
    url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
    symbol: string =  "MSFT"
    end: string = "&outputsize=compact&apikey=Y1UPJCU22ZH52Z7Z"
    demo: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"
  
  constructor(private http: HttpClient) {
      
  }
  /* demo return
  getData(){
          return this.http.get(this.demo)
          //return this.http.get(this.url+input+this.end)
  }
  */
  getData(symbol){
          console.log("stock service concatenation", this.url+symbol+this.end)
          return this.http.get(this.url+symbol+this.end)
          //return this.http.get(this.url+input+this.end)
            .pipe( data: any => {
              this.results = data
              console.log("pipe results", this.results["Meta Data"]["2. Symbol"])
            })
  }
}
