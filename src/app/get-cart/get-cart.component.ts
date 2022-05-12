import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { GetCart } from '../get-cart';
import { Router } from '@angular/router';
import { Util } from '../util';



@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit {
  carts = new GetCart();
  cart = new Cart();
  util = new Util();
  userName=localStorage.getItem("userName");
 

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
   
         this.http.get("http://localhost:11000/cart/getCart/" + localStorage.getItem("userName")).subscribe((data: any) => {
          this.carts = data;
          console.log(this.carts);
        })
      
    

  }

  onDelete(cart: any, id: any) {
    if(confirm("Are you sure to delete "+id))
    {
    cart.userName = localStorage.getItem("userName");
    cart.id = id;
    console.log(cart);
    const options = {
      body: cart
    }
    this.http.delete("http://localhost:11000/cart/deleteItems", options).subscribe(data => console.log(data));

    alert("item deleted successfulyy");
    window.location.reload();
  }
  else{
    window.location.reload();
  }


  }
  paymentClicked(totalBill:any)
  {
    this.router.navigate(["payment"]);
    localStorage.setItem("totalBill",totalBill);
  }

}
