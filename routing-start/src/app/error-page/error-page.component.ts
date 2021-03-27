import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"],
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // if it doesn't change while you're on page
    // this.errorMessage = this.route.data["message"];
    // if it changes while you're on the page
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data["message"];
    });
  }
}
