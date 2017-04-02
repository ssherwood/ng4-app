import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Ahi Tuna Steaks with Pesto',
      'The rich Italian flavors of pesto marry well with tuna steak.',
      'https://www.kroger.com/asset/5450705584ae5f4624625df8?data=1'),
    new Recipe('Almond Crusted Chicken Breasts',
      'This kid-friendly chicken also works well for an elegant meal.',
      'https://www.kroger.com/asset/5450706884ae5f4624625fb0?data=1')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipeEvent.emit(recipe);
  }
}
