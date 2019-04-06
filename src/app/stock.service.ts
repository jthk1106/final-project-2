import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { filter, map, reduce, pluck } from 'rxjs/operators';



@Injectable()
export class StockService {

    url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
    symbol: string =  "MSFT"
    end: string = "&outputsize=compact&apikey=Y1UPJCU22ZH52Z7Z"
    demo: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"
    results: any;
    dateValues: any = [];
    
  constructor(private http: HttpClient) {
      
  }

  getData(symbol){
          this.dateValues = [];
          console.log("stock service concatenation", this.url+symbol+this.end)
          return this.http.get(this.url+symbol+this.end)
            .pipe( 
              pluck("Time Series (Daily)"),
              map( data => {
                console.log('stock service data', data);
                //let dateValues = []
                let openValues = []
                let highValues = []
                let lowValues = []
                let closeValues = []
                let volumeValues = []
                
                for(let key in data){ 
                  this.dateValues.push(key)
                  openValues.push(Math.round(Number(data[key]["1. open"])))
                  highValues.push(Math.round(Number(data[key]["2. high"])))
                  lowValues.push(Math.round(Number(data[key]["3. low"])))
                  closeValues.push(Math.round(Number(data[key]["4. close"])))
                  volumeValues.push(Math.round(Number(data[key]["5. volume"])))
                }
                
                console.log("date values from stock service", this.dateValues)
                console.log("open values from stock service", openValues)
                console.log("high values from stock service", highValues)
                console.log("low values from stock service", lowValues)
                console.log("close values from stock service", closeValues)
                console.log("volume values from stock service", volumeValues)
                /*
                for(let key in data){
                  //Number(data[key]["1. open"])
                  //openValues.push(Number((data[key]["1. open"]).slice(0, 3)))
                  openValues.push(Math.round(Number(data[key]["1. open"])))
                }
                */
                
                return openValues
               
              })
            )
  }
  
}
