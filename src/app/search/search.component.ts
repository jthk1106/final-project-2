import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any;
  input: '';
  data: any;
  lastRefreshed: any;
  
  constructor(private _stock: StockService) { 
    
  }

  ngOnInit() {

  }
  
  search(){
      this._stock.getData().subscribe( data => {
        this.results = data
        console.log("results", this.results)
        //this.returnedPhone = this.returnedData.phone_number
        console.log(this.results["Meta Data"]["3. Last Refreshed"])
        
        this.lastRefreshed = this.results["Meta Data"]["3. Last Refreshed"]
        console.log("lastRefreshed", this.lastRefreshed)
        console.log(this.results["Time Series (Daily)"][this.lastRefreshed]["1. open"])
      })
  }

}
