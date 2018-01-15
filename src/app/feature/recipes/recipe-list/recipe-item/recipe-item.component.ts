import { Component, OnInit, Input } from '@angular/core';

import {Recipe} from '../../../../model/recipe/recipe.model';
// import { Recipe } from '../../../model/recipe';   // my work missed recipe.model itself

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  allRecipes: Recipe[];

  constructor() { }

  ngOnInit() {
    console.log('allRecipes = ' + this.allRecipes);
  }

}
