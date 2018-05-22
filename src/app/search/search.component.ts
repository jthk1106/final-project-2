import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any;
  symbol: any = '';
  data: any;
  lastRefreshed: any;
  
  
  constructor(private _stock: StockService) { 
    
  }

  ngOnInit() {

  }
  
  search(){
      /*working on pipe
      this._stock.getData(this.symbol)
        .pipe( data => {
          this.results = data
          console.log("see results object", this.results["Meta Data"]["2. Symbol"])
      */
      
      this._stock.getData(this.symbol).subscribe( data => {
        this.results = data
        console.log("results", this.results)
        
        //approach without pipe
        //this.returnedPhone = this.returnedData.phone_number
        console.log(this.results["Meta Data"]["3. Last Refreshed"])
        
        //access 'last refreshed date' to display it's 'open' property
        this.lastRefreshed = this.results["Meta Data"]["3. Last Refreshed"]
        console.log("lastRefreshed", this.lastRefreshed)
        console.log("open property", this.results["Time Series (Daily)"][this.lastRefreshed]["1. open"])
        
        
        let dateProperties = Object.keys(this.results["Time Series (Daily)"]);
        let something = [];
        for (let date of dateProperties) { 
          something.push(dateProperties[date]);
          console.log("dates array", something)
        }
        
      })
      
  }

}
