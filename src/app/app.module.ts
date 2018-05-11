import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StockService } from './stock.service';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, ClarityModule, HttpClientModule
  ],
  providers: [
    StockService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
