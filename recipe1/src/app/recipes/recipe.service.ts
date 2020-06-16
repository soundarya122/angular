import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simple a test', 'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d'),
        new Recipe('A Test Recipe1', 'This is simple a test1', 'https://live.staticflickr.com/5836/30219331242_56aa4dfca9_b.jpg'),
        new Recipe('A Test Recipe3', 'This is simple a test3', 'https://c.pxhere.com/photos/a3/17/pizza_baking_fast_food_lunch_business_lunch_restaurant_snacks_food-1372752.jpg!d')
    ];

    getRecipe(){
        return this.recipes.slice();
    }

    recipeSelected = new EventEmitter<Recipe>();
}