import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FarmModel } from '../farm-model';

@Component({
  selector: 'app-show-dealers',
  templateUrl: './show-dealers.component.html',
  styleUrls: ['./show-dealers.component.css']
})
export class ShowDealersComponent implements OnInit {
  farmModel:FarmModel[]=[];


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:13000/admin/getAllFarm").subscribe((data:any) => {
      this.farmModel=data;
    })
  }
  deactivateFarm(userName:any)
  {
    if(confirm("Are you sure to delete "+userName))
    {
      this.http.delete("http://localhost:13000/admin/deleteFarm/"+ userName).subscribe(data =>
      
      console.log(data)
      )
  }
  else
{
  window.location.reload;
}
}


}