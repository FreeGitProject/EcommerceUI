import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf} from '@angular/common';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
selectedPaymentMethodName = 'a';
selectedPaymentMethod = new FormControl('0');
constructor(){}
ngOnInit(): void {
  this.selectedPaymentMethod.valueChanges.subscribe((res: any) => {
    if (res === '0') this.selectedPaymentMethodName = '';
    else this.selectedPaymentMethodName = res.toString();
  });
}
}
