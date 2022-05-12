import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FarmerModel } from '../farmer-model';
import { Util } from '../util';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    farmerModel=new FarmerModel();
    util=new Util();
  
  constructor(private http:HttpClient) { }

 

  ngOnInit(): void {
    var header=this.util.authHeader();
      this.http.get("http://localhost:10000/farmer/getFarmerDetails/"+localStorage.getItem("userName"),{headers:header}).subscribe(data => {
          this.farmerModel=data;
      })

    
  }

  onClickSubmit(fareModel: any) {
    console.log(fareModel);
    var header=this.util.authHeader();
    this.http.put<any>('http://localhost:10000/farmer/editProfile', fareModel,{headers:header})
      .subscribe(data => {
        console.log(data);

      })

      
  }
  
}
