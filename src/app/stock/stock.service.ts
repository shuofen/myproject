import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[] = [
    new Stock(1, "第一只股票", 3, 2.5, "这是第一只股票描述", ["IT", "金融"]),
    new Stock(2, "第二只股票", 3, 1.5, "这是第二只股票描述", ["IT", "金融"]),
    new Stock(3, "第三只股票", 3, 4.5, "这是第三只股票描述", ["IT", "金融"]),
    new Stock(4, "第四只股票", 3, 3.5, "这是第四只股票描述", ["IT", "金融"]),
    new Stock(5, "第五只股票", 3, 2.5, "这是第五只股票描述", ["IT", "金融"]),
    new Stock(6, "第六只股票", 3, 4.5, "这是第六只股票描述", ["IT", "金融"]),
    new Stock(7, "第七只股票", 3, 1.5, "这是第七只股票描述", ["IT", "金融"]),
    new Stock(8, "第八只股票", 3, 2.5, "这是第八只股票描述", ["IT", "金融"]),
  ]

  constructor(private routerInfo: Router) { }

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    var stock = this.stocks.find((stock) => stock.id == id);
    if (!stock) {
      stock = new Stock(0, "", 0, 0, "", [])
    }
    return stock;
  }
}


export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}