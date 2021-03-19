import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen: boolean = false; //bind to prop of element dir is placed on
  // class is an array of all the classes
  // below implementation opens and closes dropdown by clicking on it
  //   @HostListener("click") toggleOpen() {
  //     //listen to event and execute method
  //     this.isOpen = !this.isOpen;
  //   }

  // close dropdown by clicking anywhere outside
  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !!this // this is gross
      : !this; // and this too
  }

  constructor(private elRef: ElementRef) {}
  // attaches open class to the element it sits on when it's clicked on
}
