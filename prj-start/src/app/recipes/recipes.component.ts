import { Component, OnInit } from "@angular/core";
// import { Recipe } from "./recipe.model";
// moved recipe service to app module so that it doesn't get destroyed when we navigate to shopping list
// import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  // providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe; //listener
  constructor() {}
  // constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    //   this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   });
    // }
  }
}
