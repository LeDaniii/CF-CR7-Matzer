import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items;

  constructor(private CartService: CartService) {}

  ngOnInit(): void {
    this.items = this.CartService.getItems();
  }
}
