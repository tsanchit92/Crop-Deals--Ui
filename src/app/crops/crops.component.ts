import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Crops } from '../crops';
import { Util } from '../util';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {
  crops:Crops[]=[];
  util=new Util();
  logo?:string;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    var header =this.util.authHeader();
    this.http.get("http://localhost:10000/farmer/getFarmerCrops/" + localStorage.getItem("userName"),{headers:header}).subscribe((data:any) => {
      this.crops=data;
      console.log(this.crops);

      
  })
  }
  onDelete(id:any)
  {
    if(confirm("Are you sure to delete "+id))
    {
    var header =this.util.authHeader();
    this.http.delete("http://localhost:8000/farmer/removeCrop/"+ localStorage.getItem("userName")+"/"+id,{headers:header}).subscribe(data =>
    console.log(data), error=>{ 
   console.log(error)
    alert("Item deleted successfully")
    window.location.reload()
   })
    
    console.log(id);
  }
  else{
    window.location.reload;
  }
}

}
