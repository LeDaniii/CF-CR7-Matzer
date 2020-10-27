import { CartService } from './../cart.service';
import { products } from './../products';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit {
  products = products;
  form: FormGroup;

  constructor(private fb: FormBuilder, private CartService: CartService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
      }),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
