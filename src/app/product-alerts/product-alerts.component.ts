import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

/*
import to receive product data, core parameter + product ../products
*/

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  /*
  input decorator, with property name(Product), property value passes in from parent
  */
  @Output() notify = new EventEmitter();
  /*
  output decorator, with Event...() instance, output event on property change
  */

  constructor() {}

  ngOnInit(): void {}
}
