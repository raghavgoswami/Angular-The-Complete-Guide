import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //Emulated is default, can also pick None, ShadowDOM
  // Emulated: styles in .css of a comp are only applied to comp (None would apply the styles globally)
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy { // implementing interfaces/methods for comps is good practice - clear which methods will be called in your comp 
  
  @Input("srvElement") element: { type: string; name: string; content: string }; // add decorater to expose prop settable by parent comp
  // parent comp is any comp hosting server comp/implementing it through its selector can bind to this prop
  @Input() name: string;
  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef // contentchild lets you access content stored in another comp and passed on via ng-content 
  // this can be accessed in contentinit
  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges) { // only lifecycle hook that receives an argument - arg is element obj and metadata
    console.log("ngonchanges called, changes:")
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("ngoninit called")
    console.log("text content: " + this.header.nativeElement.textContent) //blank since view/template elements hasn't initialized at this point
    console.log("paragraph text content: " + this.paragraph.nativeElement.textContent)
  }
  
  ngDoCheck() {
    console.log("ngodocheck called")
  }

  ngAfterContentInit() {
    console.log("ngaftercontentinit called")
    console.log("paragraph text content: " + this.paragraph.nativeElement.textContent)

  }

  ngAfterContentChecked() {
    console.log("ngaftercontentchecked called")
  }

  ngAfterViewInit() {
    console.log("ngafterviewinit called")
    console.log("text content: " + this.header.nativeElement.textContent) //value displayed since view/template elements initialized at this point

  }

  ngAfterViewChecked() {
    console.log("ngafterviewchecked called")
  }

  ngOnDestroy() {
    console.log("ngondestroy called")

  }
}
  // life cycle hooks

  // when a new comp is instantiated (added to DOM) when angular finds its selector, angular goes through a couple of phases in the creation process
  // gives us a chance to hook into these phases and execute code at specific points by implementing methods
  // ngOnChanges - executed multiple times, including @ component creation time. *called after a bound input property changes (@input decorated props).
  // ngOnInit - runs after constructor. *called when comp is initalized (not yet been added to DOM/displayed, but props can be accessed)
  // ngDoCheck - runs many times b/c it has a lot of triggers - *called during every change detection run (system that angular uses to det if it needs to change something in the template)
  //             performance optimized.  
  // ngAfterContentInit - *called after content (ng-content) has been projected into view (of parent comp)/initialized
  // ngAfterContentChecked - *called  every time the projected content has been checked
  // ngAfterViewInit - *called after the component's view (and child views) has been initialized/rendered
  // ngAfterViewChecked - *called every time the view (and child views) has been checked
  // ngOnDestroy - *called once the component is about to be destroyed