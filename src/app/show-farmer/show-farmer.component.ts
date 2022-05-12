import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FarmerModel } from '../farmer-model';

@Component({
  selector: 'app-show-farmer',
  templateUrl: './show-farmer.component.html',
  styleUrls: ['./show-farmer.component.css']
})
export class ShowFarmerComponent implements OnInit {
  farmerModel:FarmerModel[]=[];
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:13000/admin/getAllFarmer").subscribe((data:any) => {
      this.farmerModel=data;
    })
  }
  deactivateFarmer(userName:any)
  {
    if(confirm("Are you sure to deactivate "+userName))
    
    {
      this.http.delete("http://localhost:13000/admin/deleteFarmer/"+ userName).subscribe(data =>
      
      console.log(data)
      )
  }
  else
{
  window.location.reload()
}
}


}
