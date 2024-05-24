import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';
import { NgForOf } from '@angular/common';
import { SuggestedProductsComponent } from '../suggested-products/suggested-products.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf,SuggestedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subCategory: 'mobiles',
      },
    },
    {
      banerimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 1,
        category: 'electronics',
        subCategory: 'laptops',
      },
    },
    {
      banerimage: 'Baner/Baner_Chair.png',
      category: {
        id: 1,
        category: 'furniture',
        subCategory: 'chairs',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}




