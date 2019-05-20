import { StockService } from './../stock.service';
import { Router } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';
import { Stock } from '../stock.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;
  private nameFilter: FormControl = new FormControl();
  private keyWord: string;
  constructor(public router: Router, public stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.keyWord = value)
  }

  create() {
    this.router.navigateByUrl("/stock/0")
  }

  update(stock: Stock) {
    this.router.navigateByUrl("/stock/" + stock.id);
  }
}


