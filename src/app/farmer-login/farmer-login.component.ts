import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Util } from '../util';



@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {

  login = new Login();
  util = new Util();
  error:string="";
  

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(logModel: any) {
    console.log(logModel);
    var header = this.util.authHeader();
    this.http.post<any>('http://localhost:10000/authenticate', logModel, { headers: header })
      .subscribe(data => {
        console.log(data);
        localStorage.setItem("token", data.jwt);
        let decodedJWT = JSON.parse(window.atob(data.jwt.split('.')[1]));
        localStorage.setItem("userName", decodedJWT.sub);
        localStorage.setItem("roles",decodedJWT.roles);

        if(localStorage.getItem("roles")==="farmer")
        {
         this.router.navigate(['farmer-dashboard']);
           alert("Loggedin Successfully");
           localStorage.setItem('loggedIn','true');
           
        }
        else if(localStorage.getItem("roles")==="dealer")
        {
          this.router.navigate(['farmDashBoard']);
           alert("Loggedin Successfully");
           localStorage.setItem('loggedIn','true');
        }
        else if(localStorage.getItem("roles")==="admin")
        {
          this.router.navigate(['adminDashboard']);
            alert("LoggedIn Successfully");
            localStorage.setItem('loggedIn','true');
        }
   

      },
      error=>{
      
          this.error=error.message;
          
        console.log(this.error);
      });
      

  }
}
