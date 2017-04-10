import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  recipeId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.recipeId = +params['id'];
      this.recipeDetail = this.recipeService.getRecipeById(this.recipeId);
    })
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredients(this.recipeDetail.ingredients);
  }

  onEditRecipe() {
    //this.router.navigate(['../', this.recipeId, 'edit'], {relativeTo: this.activatedRoute});
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute})
  }
}
