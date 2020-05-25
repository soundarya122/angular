import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }
  myRecipe: Recipe;
  //@Output() selectedRecipeOut = new EventEmitter<Recipe>();

  ngOnInit(): void {
  }

  recipeSelected(recipe1: Recipe){
    console.log("recipe component : "+ recipe1.name)
    this.myRecipe = recipe1;
    //this.selectedRecipeOut.emit(recipe1);
  }
}
