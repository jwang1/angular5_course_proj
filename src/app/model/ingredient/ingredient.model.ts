export class Ingredient {
  constructor(public name: string, public amount: number) {}

  toString() {
    return '{Ingredient: {name: ' + this.name + ', amount: ' + this.amount + '}';
  }
}
