import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d'),
    new Recipe('A Test Recipe1', 'This is simple a test1', 'https://live.staticflickr.com/5836/30219331242_56aa4dfca9_b.jpg'),
    new Recipe('A Test Recipe2', 'This is simple a test2', 'https://c.pxhere.com/photos/a3/17/pizza_baking_fast_food_lunch_business_lunch_restaurant_snacks_food-1372752.jpg!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
