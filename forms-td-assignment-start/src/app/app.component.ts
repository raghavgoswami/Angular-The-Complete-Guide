import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: false }) signupForm: NgForm; // could also pass this via the form's (ngSubmit)
  isSubmitted = false;
  user = {
    username: "",
    email: "",
    password: "",
  };
  subscriptions = ["Basic", "Advanced", "Pro"];
  selectedSubscription = "Basic";

  onSubmit() {
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.selectedSubscription = this.signupForm.value.subscription;
    // this.signupForm.clear()
  }
}
