import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class Recipe implements OnInit {
  @Input() recipe: Recipe;
  name:string ="recipe";
  constructor() {
}

  ngOnInit() {

  }

}
