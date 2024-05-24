import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,ProductComponent,DatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
