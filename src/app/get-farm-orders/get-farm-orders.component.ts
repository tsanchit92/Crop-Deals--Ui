import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../order-details';

@Component({
  selector: 'app-get-farm-orders',
  templateUrl: './get-farm-orders.component.html',
  styleUrls: ['./get-farm-orders.component.css']
})
export class GetFarmOrdersComponent implements OnInit {
  orderModel:OrderDetails[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:11000/farm/getFarmOrders/"+localStorage.getItem("userName")).subscribe((data:any) => {
      this.orderModel=data;
    })
  }

}
