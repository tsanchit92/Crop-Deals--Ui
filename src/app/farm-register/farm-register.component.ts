import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmModel } from '../farm-model';

@Component({
  selector: 'app-farm-register',
  templateUrl: './farm-register.component.html',
  styleUrls: ['./farm-register.component.css']
})
export class FarmRegisterComponent implements OnInit {
  farmModel = new FarmModel();

  constructor(private http: HttpClient,
    private router:Router) { }

  ngOnInit(): void { }

  onClickSubmit(fareModel: any) {
    console.log(fareModel);

    this.http.post<any>('http://localhost:10000/farm/register', fareModel)
      .subscribe(data => {
        console.log(data);
        alert("Registered Successfully")
      })
  }
  ClickLogin()
  {
    this.router.navigate(["farmer-login"])
  }
  ClickRegister()
  {
    this.router.navigate(["farmer-register"])
  }

}
