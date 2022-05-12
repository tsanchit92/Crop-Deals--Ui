import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Crops } from '../crops';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  crops:Crops[]=[];

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/farmer/getCrops").subscribe((data:any) => {
      this.crops=data;
      console.log(this.crops);
  })
  }

  clicked()
  {
    this.router.navigate(['farmer-login'])
    console.log("clicked");
    
  }
  dbclicked()
  {
    this.router.navigate(['farmer-register'])

  }
  triclicked()
  {
    this.router.navigate(['farm-Register'])
    
  }
}

