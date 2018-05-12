import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StockService {
    //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=demo
    url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
    symbol: "MSFT"
    end: "&outputsize=compact&apikey=Y1UPJCU22ZH52Z7Z"
  constructor(private http: HttpClient) {
      
  }
  
  getData(){
          return this.http.get(this.url+this.symbol+this.end)
  }

}
