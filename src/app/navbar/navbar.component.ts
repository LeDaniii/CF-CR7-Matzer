import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.itemsLenght();
  }
}
