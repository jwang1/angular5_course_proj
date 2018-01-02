import { Component, OnInit } from '@angular/core';
import {Ingrdient} from '../../../model/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrdient[] = [];

  constructor() { }

  ngOnInit() {
    this.ingredients.push(
      new Ingrdient('Apple', 3),
      new Ingrdient('Potato', 5)
    );
  }

}
