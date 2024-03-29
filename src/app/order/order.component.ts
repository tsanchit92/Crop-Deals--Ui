import { HttpClient } from '@angular/common/http';
import { HostListener, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

declare var Razorpay: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form: any = {};
  paymentId?: string;
  error?: string;

  constructor(private orderService: OrderService,private http:HttpClient,private router:Router) {

  }
  ngOnInit(): void {
    this.form.amount=localStorage.getItem("totalBill")
  }


  options = {
    "key": "",
    "amount": "",
    "name": "Crop-Deals",
    "description": "Web Development",
    "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  onSubmit(): void {
    this.paymentId = '';
    this.error = '';
    this.form.userName=localStorage.getItem("userName")
    this.orderService.createOrder(this.form).subscribe(
      data => {
        this.options.key = data.secretKey;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.name = this.form.name;
        this.options.prefill.email = this.form.email;
        this.options.prefill.contact = this.form.phone;
        var rzp1 = new Razorpay(this.options);
        rzp1.open();

        rzp1.on('payment.failed', function (response: any) {
          // Todo - store this information in the server
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
          let error = response.error.reason;
        }
        );
      }
      ,
      err => {
        this.error = err.error.message;
      }
    );
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    
    this.orderService.updateOrder(event.detail).subscribe(
      data => {
        this.paymentId = data.message;
        alert("Payment SuccessFull ,PaymentId = "+this.paymentId)
        this.router.navigate(['farmDashBoard'])
      }
      ,
      err => {
        this.error = err.error.message;
      }
    );
  }
}
