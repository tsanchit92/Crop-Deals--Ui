import { Component, OnInit } from '@angular/core';
import { FarmerModel } from '../farmer-model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-register',
  templateUrl: './farmer-register.component.html',
  styleUrls: ['./farmer-register.component.css']
})
export class FarmerRegisterComponent implements OnInit {

  farmerModel = new FarmerModel();

  constructor(private http: HttpClient
    ,private router:Router) {


  }

  ngOnInit(): void {

  }
  ClickLogin()
  {
    this.router.navigate(["farmer-login"])
  }
  ClickRegister()
  {
    this.router.navigate(["farm-Register"])
  }
  onClickSubmit(farModel: any) {
    console.log(farModel);

    this.http.post<any>('http://localhost:10000/farmer/register', farModel)
      .subscribe(data => {
        console.log(data);
        alert("Registered Successfully")

      })



  }

}



