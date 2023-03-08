import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  public cartArray: any = [];
  public cartList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {
    // Get cart items from local storage on initialization
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartArray = JSON.parse(storedCartItems);
      this.cartList.next(this.cartArray);
    }
  }

  public addtocart(product: any) {
    this.cartArray.push(product);
    this.cartList.next(this.cartArray);
    // Store cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(this.cartArray));
  }

  public removeFromCart(item: any) {
    const index = this.cartArray.indexOf(item);
    if (index > -1) {
      this.cartArray.splice(index, 1);
      this.cartList.next(this.cartArray);
      // Update local storage with modified cart items
      localStorage.setItem('cartItems', JSON.stringify(this.cartArray));
    }
  }

  public clearCart() {
    this.cartArray = [];
    this.cartList.next(this.cartArray);
    // Remove cart items from local storage
    localStorage.removeItem('cartItems');
  }
  public getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartArray) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
}
