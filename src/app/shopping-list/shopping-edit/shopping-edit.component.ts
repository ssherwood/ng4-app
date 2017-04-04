import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addItem() {
    this.shoppingListService.addIngredient(
      new Ingredient(this.nameRef.nativeElement.value,
        this.amountRef.nativeElement.value));
  }
}
