import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { NgFor } from '@angular/common';
import { Category } from '../models/models';
@Component({
  selector: 'app-suggested-products',
  standalone: true,
  imports: [ProductComponent,NgFor],
  templateUrl: './suggested-products.component.html',
  styleUrl: './suggested-products.component.css'
})
export class SuggestedProductsComponent implements OnInit{
  @Input() category: Category = {
    id: 0,
    category: '',
    subCategory: '',
  };
  @Input() count:number=4
  constructor(){}
ngOnInit(): void {}
}
