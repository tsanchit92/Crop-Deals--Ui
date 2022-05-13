import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SoldCrops } from '../sold-crops';
import { Util } from '../util';

@Component({
  selector: 'app-sold-crops',
  templateUrl: './sold-crops.component.html',
  styleUrls: ['./sold-crops.component.css']
})
export class SoldCropsComponent implements OnInit {
  soldCrops:SoldCrops[]=[];
  util=new Util();
  error:string="";
 

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    var header =this.util.authHeader();
    this.http.get("http://localhost:10000/farmer/getSoldCrops/"+localStorage.getItem("userName"),{headers:header}).subscribe((data:any) => {
      this.soldCrops=data;

    },error=>
    {
      this.error=error;
    })
  }

}
