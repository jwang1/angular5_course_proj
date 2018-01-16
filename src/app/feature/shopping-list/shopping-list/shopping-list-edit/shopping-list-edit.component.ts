import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {Ingredient} from '../../../../model/ingredient/ingredient.model';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Input('allIngredients')
  ingredients: Ingredient[];

  constructor() { }

  ngOnInit() {
  }

  onAdd(name: any, amount: any) {
    this.ingredients.push(new Ingredient(name.value, amount.value));
  }
}
