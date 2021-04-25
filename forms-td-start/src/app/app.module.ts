import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// includes form-related functionality needed for template-driven form approach
// angular auto-creates form for you when it detects form element in html code
// so the form element is basically a selector for angular directive which creates a js rep of form for you
// it can't detect inputs - you need to register them manually - b/c you may have inputs that
// you don't want add them as controls to your form (in JS form/obj)

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
