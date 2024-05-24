import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { NgFor,NgIf } from '@angular/common';
import { Category, NavigationItem } from '../models/models';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleCasePipe,NgFor,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  navigationList: NavigationItem[] = [
    {
      category: "electronics",
      subcategories: ["mobiles","laptops"]
    },
    {
      category: "furniture",
      subcategories: ["chairs","tables"]
    }
  ];
  constructor(){}
  ngOnInit(): void {
        // Get Category List
    // this.navigationService.getCategoryList().subscribe((list: Category[]) => {
    //   for (let item of list) {
    //     let present = false;
    //     for (let navItem of this.navigationList) {
    //       if (navItem.category === item.category) {
    //         navItem.subcategories.push(item.subCategory);
    //         present = true;
    //       }
    //     }
    //     if (!present) {
    //       this.navigationList.push({
    //         category: item.category,
    //         subcategories: [item.subCategory],
    //       });
    //     }
    //   }
    // });
  }
}
