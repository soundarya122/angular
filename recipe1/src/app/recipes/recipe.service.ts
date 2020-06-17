import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    constructor(private shoppingListService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'World\'s Best Lasagna', 
            'It takes a little work, but it is worth it.', 
            'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d',
            [
                new Ingredient("pound sweet Italian sausage",1),
                new Ingredient("pound lean ground beef",3/4),
                new Ingredient("cup minced onion",1/2),
                new Ingredient("cloves garlic, crushed",2)
                
            ]
            ),
        new Recipe(
            'A Test Recipe1', 
            'This is simple a test1', 
            'https://live.staticflickr.com/5836/30219331242_56aa4dfca9_b.jpg',
            [
                new Ingredient("Meat",5),
                new Ingredient("Sausage",2)
            ]
            )
    ];

    getRecipe(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
        console.log("addIngredientsToShoppingList : "+ ingredients)
    }
}