import {Recipe} from '../../model/recipe/recipe.model';
import {Ingredient} from '../../model/ingredient/ingredient.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipes: Recipe[] = [];

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {
    this.recipes.push(
      new Recipe('Test Recipe', 'for testing',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Salad-Kitchen-Foodie-Food-Dish-Gastronomy-1069916.jpg',
        [new Ingredient('Corrots', 3.5),
          new Ingredient('tomato', 5.3)]),
      new Recipe('Test2', 'check multi-list',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Ingredients-Eat-Meals-Plate-Kitchen-Food-2833735.jpg',
        [new Ingredient('fish', 1.3),
          new Ingredient('berry', 2.1)])
    );
  }

}
