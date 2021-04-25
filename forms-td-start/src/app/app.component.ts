import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm; // can use for any local ref in template
  defaultQuestion = "teacher";
  answer = "";
  genders = ["male", "female"];
  user = {
    // not related to form directly
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });

    // use patchvalue only overwrite specific ctrls, not set all form ctrls like setvalue helper function
    this.signupForm.form.patchValue({ userData: { username: suggestedName } });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm); // lets you access form not just at the time you hit submit, but earlier too
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
  // onSubmit(form: NgForm) {
  //   console.log("submitted");
  //   console.log(form);
  // }
}
