import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: '';
  input: any;
  
  constructor(private _stock: StockService) { 
    
  }

  ngOnInit() {

  }
  
  search(){
      this._stock.getData().subscribe( data => {
        console.log(data)
        //this.results = data
        //console.log(this.results)
        //this.returnedPhone = this.returnedData.phone_number
      })
  }

}
