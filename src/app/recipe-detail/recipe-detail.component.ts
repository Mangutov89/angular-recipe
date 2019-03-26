import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  currentImg:number=0;
  @Input() recipe:Recipe
  constructor() { }

  ngOnInit() {
    this.changeIndex();
  }
  changeIndex(){
    setInterval(()=>{
      if (this.currentImg+1>=this.recipe.imgURL.length){
        this.currentImg=0;
      } else{
        this.currentImg++;
      }
    },3000)
  }
  // swap() {
  //   let storedImage = './../assets/imgs/cookies2.jpeg';
  //   let temp = '';
  //   setInterval(() => {
  //     temp = this.recipe.imgURL;
  //     this.recipe.imgURL = storedImage;
  //     storedImage = temp;
  //
  //   }, 3000)
  // }
}
