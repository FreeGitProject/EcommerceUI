import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,SuggestedProductsComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerceUI';
}
