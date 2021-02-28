import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    //decorator enables other comps to listen to custom events created by event emitter
    serverName: string;
    serverContent: string;
  }>(); // set properties as events we can emit
  // <> indicates generic type, in between define the type of event data to emit
  // () at the end invokes its constructor of eventemitter to create new event emitter obj
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  // newServerContent = "";

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef //arg of viewChild is the selector of the element (or comp type e.g. CockpitComponent), can be a local ref
  //ElementRef is a ref to an element, an angular type w/ a useful native element prop access underlying element (input element)

  constructor() {}

  ngOnInit(): void {} // lifecycle hook
  // when a new comp is instantiated (added to DOM) when angular finds its selector, angular goes through a couple of phases in the creation process
  // gives us a chance to hook into these phases and execute code by implementing methods

  // ngOnChanges - executed multiple times, including @ component creation time. *called after a bound input property changes (@input decorated props).
  // ngOnInit - runs after constructor. *called when comp is initalized (not yet been added to DOM/displayed, but props can be accessed)
  // ngDoCheck - runs many times - *called during every change detection run (system that angular uses to det if it needs to change something in the template)
  //             performance optimized.  
  // ngAfterContentInit - *called after content (ng-content) has been projected into view (of parent comp)/initialized
  // ngAfterContentChecked - *called  every time the projected content has been checked
  // ngAfterViewInit - *called after the component's view (and child views) has been initialized/rendered
  // ngAfterViewChecked - *called every time the view (and child views) has been checked
  // ngOnDestroy - *called once the component is about to be destroyed
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverCreated.emit({
      // serverName: this.newServerName,  (using local ref instead of two-way databinding)
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName, (using local ref instead of two-way databinding)
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
