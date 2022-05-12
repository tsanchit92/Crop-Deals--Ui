import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../order-details';

@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.css']
})
export class GetOrdersComponent implements OnInit {
  orderModel:OrderDetails[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:10000/admin/getAllOrders").subscribe((data:any) => {
      this.orderModel=data;
    })
    

  }

}
