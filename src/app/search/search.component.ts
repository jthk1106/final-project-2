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
  chartData: Array<any> = [
  {data: [], label: 'Open'}
  ];
  
  
  constructor(private _stock: StockService) { 
    
  }

  ngOnInit() {

  }
  
  search(){
      
      this._stock.getData(this.symbol)
        .subscribe( data => {
          this.results = data
          console.log("last from search component", data)
          // console.log("results", this.results['5-22-18']['1. open'])
          for(let value of data){
            this.chartData[0]["data"].push(value)
          }
          
          console.log(this.chartData)
          /*
          //approach without pipe
          //this.returnedPhone = this.returnedData.phone_number
          console.log(this.results["Meta Data"]["3. Last Refreshed"])
          
          //access 'last refreshed date' to display it's 'open' property
          this.lastRefreshed = this.results["Meta Data"]["3. Last Refreshed"]
          console.log("lastRefreshed", this.lastRefreshed)
          console.log("open property", this.results["Time Series (Daily)"][this.lastRefreshed]["1. open"])
          
          //get object properties and push them into an empty array
          let dateProperties = Object.keys(this.results["Time Series (Daily)"]);
          let something = [];
          for (let date of dateProperties) { 
            something.push(dateProperties[date]);
            console.log("dates array", something)
          }
          */
        })
      
  }

}
