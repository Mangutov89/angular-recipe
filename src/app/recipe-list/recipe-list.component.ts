import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "./../recipe";
import { RECIPES } from "./../mock-recipes"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeList implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[] = RECIPES;
  constructor() { }

  ngOnInit() {

  }
  onSelect(recipe:Recipe){
    this.selectedRecipe= recipe;
    console.log(this.selectedRecipe.name)
  }

}
