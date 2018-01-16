import {Ingredient} from '../ingredient/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, ipath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = ipath;
    this.ingredients = ingredients;
  }

  public toString(): string {
    return '{ name: ' + this.name + ', description: ' + this.description +
      ', imagePath: ' + this.imagePath + '}';
  }
}
