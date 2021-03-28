import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false; // assume creating a new recipe, not in edit mode

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null; // if params has id if in edit mode, otherwise in new mode
      console.log(this.editMode);
      // note: in cases you create custom observables (not managed by angular, in which case angular does cleanup)
      //  need to add onDestroy() and unsubscribe
    });
  }
}
