import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public totalPrice = 0;
  
  cartitem:any=[]
  constructor(private cart:CartService) {

  }

  ngOnInit(): void {
    
       this.cart.cartList.subscribe(
         (data:any)=>{
           console.log(data);
           this.cartitem=data
          
         }
       )
      this.totalPrice = this.cart.getTotalPrice();
  }
   removeFromCart(item: any) {
    this.cart.removeFromCart(item);
  }
  clearCart() {
    this.cart.clearCart()
  }

  

}
