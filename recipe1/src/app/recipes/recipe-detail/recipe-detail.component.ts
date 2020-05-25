import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() abc;
  constructor() { }

  ngOnInit(): void {
  }

  recipeOut(rec: Recipe){
    console.log("recipe out: "+ rec.name);
  }

  
}
