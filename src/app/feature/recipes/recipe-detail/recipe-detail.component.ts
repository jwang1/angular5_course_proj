import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../model/recipe/recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(r => this.recipe = r);
  }

  shopIngredients() {
    this.recipeService.shopIngredients(this.recipe.ingredients);
  }

}
