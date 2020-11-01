import { CartService } from './../cart.service';
import { products } from './../products';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { stringify } from 'querystring';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit {
  events: string[] = [];
  products = products;
  form: FormGroup;
  product;

  constructor(private fb: FormBuilder, private CartService: CartService) {}

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(this.events);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(''),
        end: new FormControl(''),
      }),
    });
  }

  addToCart(product) {
    window.alert('Hello');
    this.CartService.addToCart(product);
    console.log(this.form.value);
    // let date = FormGroup;
    //  for (let prop in FormGroup) {
    //    console.log(prop, FormGroup[prop]);
    //  }
    // let date = JSON.stringify(this.form.value.FormGroup);

    this.CartService.addToCart(this.events);
    // console.log(date);
  }
}
