import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Crops } from '../crops';
import { Util } from '../util';

@Component({
  selector: 'app-add-crops',
  templateUrl: './add-crops.component.html',
  styleUrls: ['./add-crops.component.css']
})
export class AddCropsComponent implements OnInit {

  crops= new Crops();
  util=new Util();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  addCrop(crop:any)
  {
    var header=this.util.authHeader();
    crop.userName=localStorage.getItem("userName");
    this.http.post<any>('http://localhost:10000/farmer/addCrop', crop ,{headers:header})
      .subscribe(data=> {
        console.log(data);
      
      },error=>{
        alert("Crop-Added-Successfully");
      })
      window.location.reload();
  }
}
