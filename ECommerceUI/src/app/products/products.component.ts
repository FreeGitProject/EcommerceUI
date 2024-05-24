import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor,NgIf } from '@angular/common';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass,NgFor,NgIf,ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  view: 'grid' | 'list' = 'list';
  sortby: 'default' | 'htl' | 'lth' = 'default';

  ngOnInit(): void {
  //   this.activatedRoute.queryParams.subscribe((params: any) => {
  //     let category = params.category;
  //     let subcategory = params.subcategory;

  //     if (category && subcategory)
  //       this.navigationService
  //         .getProducts(category, subcategory, 10)
  //         .subscribe((res: any) => {
  //           this.products = res;
  //         });
  //   });
  // }
}
}