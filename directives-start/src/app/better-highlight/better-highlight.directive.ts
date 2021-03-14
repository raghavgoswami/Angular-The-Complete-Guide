import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]", //attr selector
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "blue";

  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {} //inject elementref

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // ); //element, style to set, value to set it as, optional flags obj (e.g. important tag)
  }
  // host listener is a convenient way of listening to events on element
  @HostListener("mouseenter") mouseOver(eventData: Event) {
    //mouseenter is an event supported by DOM element this dir sits on
    //you also have all events available that you could use with event binding before
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event) {
    //   this.renderer.setStyle(
    //     this.elRef.nativeElement,
    //     "background-color",
    //     "transparent"
    //   );
    this.backgroundColor = this.defaultColor;
  }
  // use camel when accessing DOM property, which doesn't understand dashes
  // on the element on which this dir sits, access the style prop
}
