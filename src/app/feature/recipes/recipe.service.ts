import {Recipe} from '../../model/recipe/recipe.model';
import {Ingredient} from '../../model/ingredient/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {ShoppingService} from '../shopping-list/shopping-list/shopping.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'for testing',
    'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Salad-Kitchen-Foodie-Food-Dish-Gastronomy-1069916.jpg',
    [new Ingredient('Corrots', 3.5),
      new Ingredient('tomato', 5.3)]),

    new Recipe('Test2', 'check multi-list',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Ingredients-Eat-Meals-Plate-Kitchen-Food-2833735.jpg',
      [new Ingredient('fish', 1.3),
        new Ingredient('berry', 2.1)])];

  // used to communite between components.
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) { }

  getRecipes(): Recipe[] {
    // returns a COPYE of the recipes array, so that callers not able to change the recipes.
    return this.recipes.slice();
  }

  shopIngredients(ingredients: Ingredient[]) {
      this.shoppingService.shopIngredients(ingredients);
  }
}
