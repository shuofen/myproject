import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks:Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks=[
      new Stock(1,"第一只股票",3,2.5,"这是第一只股票描述",["IT","金融"]),
      new Stock(2,"第二只股票",3,1.5,"这是第二只股票描述",["IT","金融"]),
      new Stock(3,"第三只股票",3,4.5,"这是第三只股票描述",["IT","金融"]),
      new Stock(4,"第四只股票",3,3.5,"这是第四只股票描述",["IT","金融"]),
      new Stock(5,"第五只股票",3,2.5,"这是第五只股票描述",["IT","金融"]),
      new Stock(6,"第六只股票",3,4.5,"这是第六只股票描述",["IT","金融"]),
      new Stock(7,"第七只股票",3,1.5,"这是第七只股票描述",["IT","金融"]),
      new Stock(8,"第八只股票",3,2.5,"这是第八只股票描述",["IT","金融"]),
    ]
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