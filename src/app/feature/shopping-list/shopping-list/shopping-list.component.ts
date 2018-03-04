import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../../model/ingredient/ingredient.model';
import {ShoppingService} from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = null;

  constructor(private shoppingSvc: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingSvc.getIngredients();

    this.shoppingSvc.ingredientsUpdated.subscribe(
      i => this.ingredients = this.shoppingSvc.getIngredients());

  }

  update($event) {
    this.shoppingSvc.ingredientSelected.emit($event);
  }

}
