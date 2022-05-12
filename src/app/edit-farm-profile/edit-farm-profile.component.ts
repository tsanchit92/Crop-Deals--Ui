import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FarmModel } from '../farm-model';
import { RatingDto } from '../rating-dto';
import { Util } from '../util';


@Component({
  selector: 'app-edit-farm-profile',
  templateUrl: './edit-farm-profile.component.html',
  styleUrls: ['./edit-farm-profile.component.css']
})
export class EditFarmProfileComponent implements OnInit {
  farmModel =new FarmModel();
  util=new Util();


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    var header = this.util.authHeader();
    this.http.get("http://localhost:11000/farm/getDetails/"+localStorage.getItem("userName"),{headers:header}).subscribe(data=>
    this.farmModel=data
    )
  }
  onClickSubmit(farmModel:any)
  {
    var header = this.util.authHeader();
      this.http.put("http://localhost:11000/farm/editProfile",farmModel,{headers:header}).subscribe(data=>
      {console.log(data);
      window.location.reload()}
      )
      
  }
 
}
