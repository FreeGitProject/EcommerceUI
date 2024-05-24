import { Component, OnInit } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { SuggestedProductsComponent } from '../suggested-products/suggested-products.component';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf,NgFor,SuggestedProductsComponent,DatePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  imageIndex: number = 1;
  constructor(){}
  ngOnInit(): void {
  }

}
