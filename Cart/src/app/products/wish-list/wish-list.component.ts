import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{
 wishlist:any=[]
 eMsg:any
 quantity:any

constructor(private api:ApiService,private cart:CartService,private route:Router ){


}

ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data: any) => {
        this.wishlist = data.products
        if(this.wishlist.length==0){
          this.eMsg="Your Wishlist is empty"
        }
      },
      (data:any)=>{
        this.eMsg = data.error.message
      }
    )
}

deletewish(product:any){

  this.api.deletewish(product.id).subscribe(
    (result:any)=>{
      //alert(result.msg)
      window.location.reload()
    },
    (result:any)=>{
      //alert(result.error.msg)
    }
  )

}

addtocart(product:any){
  this.cart.addtocart(product)
  this.deletewish(product)
  
 } 

}
