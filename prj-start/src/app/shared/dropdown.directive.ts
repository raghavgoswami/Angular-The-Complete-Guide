import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen: boolean = false; //bind to prop of element dir is placed on
  //class is an array of all the classes
  @HostListener("click") toggleOpen() {
    //listen to event and execute method
    this.isOpen = !this.isOpen;
  }
  // attaches open class to the element it sits on when it's clicked on
}
