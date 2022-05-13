import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Address } from '../address';
import { BankAccountDetails } from '../bank-account-details';
import { Cart } from '../cart';
import { Crops } from '../crops';
import { RatingDto } from '../rating-dto';
import { Util } from '../util';

@Component({
  selector: 'app-get-crops',
  templateUrl: './get-crops.component.html',
  styleUrls: ['./get-crops.component.css']
})
export class GetCropsComponent implements OnInit {
 count=0;
  crops:Crops[]=[];
  cart=new Cart();
  address =new Address();
  bankDetails=new BankAccountDetails();
   userName = localStorage.getItem("userName");
   clicked:boolean=false;
   doubleclicked:boolean=false;
   util=new Util();
   ratingDto=new RatingDto();



  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    var header = this.util.authHeader();
    this.http.get("http://localhost:10000/farm/getCrops",{headers:header}).subscribe((data:any) => {
      this.crops=data;
      console.log(this.crops);
  })
  }
  onAddCrt(item:any)
  {   
    item.quantity=parseInt(window.prompt("Enter Quantity")!)
    if(item.quantity<=0 || typeof item.quantity ==='undefined')
    {
      alert("add proper quantity")
    }
    else{
    item.userName=this.userName;
    this.http.post("http://localhost:11000/cart/addItems",item).subscribe(data =>{
      console.log(data);

      
    })

    alert("item Added to cart successfully")
  }
}
  ongetAddress(item:any)
  {
     this.clicked=!this.clicked;
      this.http.get("http://localhost:11000/farm/getAddress/"+item.id)
      .subscribe(data=>{
        this.address=data;
      })
  }
  ongetBankDetails(item:any)
{
  this.doubleclicked=!this.doubleclicked;
  this.http.get("http://localhost:11000/farm/getBankAccountDetails/"+item.id)
  .subscribe(data=>{
    this.bankDetails=data;
  })
}
onRate(cropId:any)
{
  this.ratingDto.cropId=cropId;
  this.ratingDto.rating= parseInt(window.prompt("Enter Value")!);
  this.http.post("http://localhost:11000/farm/rateFarmer",this.ratingDto).subscribe(data=>
  console.log(data)
  )
}

}
