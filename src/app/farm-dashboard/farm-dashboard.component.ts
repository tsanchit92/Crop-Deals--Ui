import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmModel } from '../farm-model';
import { OrderDetails } from '../order-details';

@Component({
  selector: 'app-farm-dashboard',
  templateUrl: './farm-dashboard.component.html',
  styleUrls: ['./farm-dashboard.component.css']
})
export class FarmDashboardComponent implements OnInit {
  userName = localStorage.getItem("userName");
  farmModel = new FarmModel();

  orderDetail=new OrderDetails();
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  this.checkFirst();
  }
  checkFirst()
  {
    if (localStorage.getItem("loggedIn")=="false"){
      this.router.navigate([""]);
    }
  }

  logout() {
    if(confirm("Are you sure to logout ?"))
    {
      localStorage.setItem("loggedIn", "false");
      this.router.navigate([""]);
    }
    else {
      window.location.reload;
    }

  }


}
