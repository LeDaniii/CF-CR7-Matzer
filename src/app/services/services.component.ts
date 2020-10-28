import { CartService } from './../cart.service';
import { services } from './../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services = services;
  service;

  constructor(private CartService: CartService) {}

  addToCart(service) {
    window.alert('Hallo');
    this.CartService.addToCart(service);
  }

  ngOnInit(): void {}
}
