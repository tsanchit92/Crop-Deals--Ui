import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userName=localStorage.getItem("userName");

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    if(confirm("Are you sure to logout ?"))
    {
        localStorage.setItem("loggedIn","false");
        this.router.navigate([""]);
    }
    else
    {
      window.location.reload;
    }

  }

}
