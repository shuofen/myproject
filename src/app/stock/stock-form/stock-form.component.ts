import { StockService } from './../stock.service';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;
  stockId: number;
  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) { }

  ngOnInit() {
    this.stockId = this.routeInfo.snapshot.params["id"];
    this.stock = this.stockService.getStock(this.stockId);
  }

  cancel() {
    this.router.navigateByUrl("/stock");
  }

  save() {
    this.router.navigateByUrl("/stock");
  }

}
