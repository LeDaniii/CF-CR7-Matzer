import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = ['1', '2'];

  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.getItems;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  itemsLenght() {
    this.items.length;
  }
}
