import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { filter, map, reduce, pluck } from 'rxjs/operators';



@Injectable()
export class StockService {
    //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=demo
    url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
    symbol: string =  "MSFT"
    end: string = "&outputsize=compact&apikey=Y1UPJCU22ZH52Z7Z"
    demo: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"
    results: any;
  
  constructor(private http: HttpClient) {
      
  }
  /* demo return
  getData(){
          return this.http.get(this.demo)
          //return this.http.get(this.url+input+this.end)
  }
  */
  
  getData(symbol){
          let dateValues = []
          
          console.log("stock service concatenation", this.url+symbol+this.end)
          return this.http.get(this.url+symbol+this.end)
            .pipe( 
              pluck("Time Series (Daily)"),
              map( data => {
                let openValues = []
                console.log('stock service data', data);
                for(let key in data){ 
                  dateValues.push(key) 
                }
                
                console.log("date values", dateValues)

                for(let key in data){
                  openValues.push(data[key]["1. open"])
                }
                
                console.log("open values", openValues)
                return openValues
              })
            )
   //pluck 'Time Series (Daily)' object and 'for(let key in data){ openValues.push }'
  }
  
}
