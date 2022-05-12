import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { FarmerModel } from '../farmer-model';

@Component({
  selector: 'app-farmer-dahboard',
  templateUrl: './farmer-dahboard.component.html',
  styleUrls: ['./farmer-dahboard.component.css']
})
export class FarmerDahboardComponent implements OnInit {
  
  userName= localStorage.getItem("userName");


  farmerModel =new FarmerModel();

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.checkFirst();
  }
  checkFirst()
  {
    if(localStorage.getItem("loggedIn")=="false"){
      this.router.navigate([""]);
    }
   
  }
  logout()
  {
    if(confirm("Are you sure to delete ?"))
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
