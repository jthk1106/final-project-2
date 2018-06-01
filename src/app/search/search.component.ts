import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs/Observable';
import { ChartsModule } from 'ng2-charts';
import { SaveService } from '../save.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any;
  symbol: any = '';
  saveSymbol: any = '';
  data: any;
  lastRefreshed: any;
  chartData: Array<any> = [
    {data: [], label: 'Opening Dollar Values'}
  ];
  chartLabels: any = [];
  display: any = false;
  stockObject: any = {
    "ticker": "",
    "id": ""
  }
  
    // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  
  constructor(private _stock: StockService, private _save: SaveService) { 
  }

  ngOnInit() {
  }
  
  search(){
      this.chartData = [{data: [], label: 'Opening Dollar Values'}];
      this.display = false;
      this._stock.getData(this.symbol)
        .subscribe( data => {
          this.results = data
          console.log("last from search component", data)
          // console.log("results", this.results['5-22-18']['1. open'])
          for(let value of data){
            this.chartData[0]["data"].push(value)
          }
          console.log("chartData from search", this.chartData)
          this.lineChartData = this.chartData;
          this.lineChartLabels = this._stock.dateValues;
          
          this.display = true;
          
          this.saveSymbol = this.symbol
          this.symbol = ''
          
          console.log("dateValues", this._stock.dateValues)
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
  /*
  save(){
    
    this._save.saveStock(this.stockObject)
      .subscribe( (data:any) => {
        let id = sessionStorage.getItem(this.data.userId);
        this.stockObject["ticker"] = this.saveSymbol);
        this.stockObject["id"] = id;
      })
  }
  */
}
