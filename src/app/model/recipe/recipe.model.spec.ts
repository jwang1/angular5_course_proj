import { Recipe } from './recipe.model';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new Recipe('recipe1', 'recipe for testing', './')).toBeTruthy();
  });
});
