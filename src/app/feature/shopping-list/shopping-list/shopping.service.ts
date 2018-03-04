import {Ingredient} from '../../../model/ingredient/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingService {
  ingredientSelected: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  ingredientsUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 3),
    new Ingredient('Potato', 5)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addOrUpdateIngredient(ingredient: Ingredient) {
    if (ingredient !== null && ingredient.name !== '' && ingredient.amount !== 0) {

      this.ingredients.push(ingredient);

      // indicates the updates, so other components can pull the updated ingredients array.
      // This method, pushing the whole array, if big size, then performance will be degraded.
      this.ingredientsUpdated.emit(true);

    } else {
      console.error('ingredient: ' + ingredient + ', is either null, or its attributes are null');
    }
  }

  shopIngredients(ingredients: Ingredient[]) {
      // ES6 operator ... converts array into a list, note, push allows list (not array)
      this.ingredients.push(...ingredients);

      this.ingredientsUpdated.emit(true);
  }
}
