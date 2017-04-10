import {Component, Input, OnInit} from "@angular/core";
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeId: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
}
