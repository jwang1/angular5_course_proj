import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../model/recipe/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeToDisplay: Recipe;

  constructor() { }

  ngOnInit() {
  }

  showSelectedRecipe($event) {
    this.recipeToDisplay = $event;
  }
}
