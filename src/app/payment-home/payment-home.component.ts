import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentPojo } from '../payment-pojo';

@Component({
  selector: 'app-payment-home',
  templateUrl: './payment-home.component.html',
  styleUrls: ['./payment-home.component.css']
})
export class PaymentHomeComponent implements OnInit {
  payment=new PaymentPojo();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onclickSubmit(payment:any)
  {
    this.http.post("http://localhost:11000/submitPaymentDetail/"+localStorage.getItem("userName"),payment).subscribe(data=>
    console.log(data)
    )
  }

}
