import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../model/recipe/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
    this.recipes.push(
      new Recipe('Test Recipe', 'for testing',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Salad-Kitchen-Foodie-Food-Dish-Gastronomy-1069916.jpg'),
      new Recipe('Test2', 'check multi-list',
        'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Ingredients-Eat-Meals-Plate-Kitchen-Food-2833735.jpg')
    );
  }

}
