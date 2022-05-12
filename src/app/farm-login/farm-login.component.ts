import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Util } from '../util';

@Component({
  selector: 'app-farm-login',
  templateUrl: './farm-login.component.html',
  styleUrls: ['./farm-login.component.css']
})
export class FarmLoginComponent implements OnInit {
  login=new Login();
  util=new  Util();
  

  constructor(private http:HttpClient,
              private router:Router ) { }

  ngOnInit(): void {
  }
  onClickSubmit(logModel: any) {
    console.log(logModel);
          var header= this.util.authHeader();
    this.http.post<any>('http://localhost:12000/authenticate', logModel,{headers:header})
      .subscribe(data => {
        console.log(data);
        localStorage.setItem("token",data.jwt);
        let decodedJWT = JSON.parse(window.atob(data.jwt.split('.')[1]));
        localStorage.setItem("userName",decodedJWT.sub);
        localStorage.setItem("roles",decodedJWT.roles);

        this.router.navigate(['farmDashBoard']);
        alert("Login Successfully");
       
       
      })

}
}
