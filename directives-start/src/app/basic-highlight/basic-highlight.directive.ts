import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]", // attr selector, recognized when appBasicHighlight attr added to element
})
export class BasicHighlightDirective implements OnInit {
  // can inject element the directive sits on into directive
  constructor(private elementRef: ElementRef) {} // list args you want to get when an instance of this class is created by angular

  ngOnInit() {
    // access exact element the directive was placed on and then overwrite its style
    this.elementRef.nativeElement.style.backgroundColor = "green";
    // not good pracice to directly access your html elements like this
    // inject the renderer instead (see better-highlight directive)
    // this is b/c angular is not limited to running in the browser, it also works with service workers,
    // envs without access to DOM. use the renderer for any DOM manipulations.
    // renderer has a lot of other methods
  }
}
