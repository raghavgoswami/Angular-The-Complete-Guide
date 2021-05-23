import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Observable";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  // forms package contains lots of useful classes like ngform - auto-created formgroup (group of ctrls) wrapper
  signupForm: FormGroup; // prop will hold form
  forbiddenUsernames = ["Chris", "Anna"];

  ngOnInit() {
    // use this lifecycle hook to initialize form before rendering the template
    // ctrls are k-v pairs we pass to this object passed to the overall form group
    // wrapping keys as string ensures it doesnt get mangled during minification
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this), // js trick to ensure 'this' refers to what we want it to refer to
        ]), // form constructor
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
    // need to sync up ts form with template form

    // if you want to watch and react to updates to form or individual ctrls,
    // you can use hooks like statusChanges and valueChanges
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    // use setvalue and patchvalue
    this.signupForm.setValue({
      userData: {
        email: "anna@test.com",
        username: "Anna",
      },
      gender: "female",
      hobbies: [],
    });

    this.signupForm.patchValue({
      userData: {
        username: "Barbara",
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset(); // can pass vals to reset to only reset specific vals
  }

  getControls() {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }

  onAddHobby() {
    // need to cast it as form array  to notify ts and prevent an error
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  // a validator is just a function that gets executed by angular automatically when it checks
  // validity of form control - whenever you change the ctrl
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null; // returning null is how you tell angular formcontrol is valid
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbbiden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
