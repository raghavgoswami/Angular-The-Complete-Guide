import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
      // note: in cases you create custom observables (not managed by angular, in which case angular does cleanup)
      //  need to add onDestroy() and unsubscribe
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // straightforward way
    this.router.navigate(["edit"], { relativeTo: this.route });
    // alternative, more complex way just for demo purposes: go up to "/recipes", add id, then add edit
    // this.router.navigate(["../", this.id, "edit"], { relativeTo: this.route });
  }
}
