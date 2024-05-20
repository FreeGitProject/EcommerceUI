import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() view: 'grid' | 'list'='grid';
  ngOnInit(): void {}
}
