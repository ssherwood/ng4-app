import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Ahi Tuna Steaks with Pesto',
      'The rich Italian flavors of pesto marry well with tuna steak.',
      'https://www.kroger.com/asset/5450705584ae5f4624625df8?data=1',
      [
        new Ingredient("Basil (bunch)", 1),
        new Ingredient("Italian Parsley Leaves (bunch)", 1),
        new Ingredient("Shallot", 1),
        new Ingredient("Garlic Clove", 1),
        new Ingredient("Ahi Tuna Steak", 2),
      ]),
    new Recipe('Almond Crusted Chicken Breasts',
      'This kid-friendly chicken also works well for an elegant meal.',
      'https://www.kroger.com/asset/5450706884ae5f4624625fb0?data=1',
      [
        new Ingredient("Sliced Almonds", 1),
        new Ingredient("Chicken Breast", 4),
        new Ingredient("Egg", 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // return exact copy
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipeId: number) {
    this.recipes.splice(recipeId, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
