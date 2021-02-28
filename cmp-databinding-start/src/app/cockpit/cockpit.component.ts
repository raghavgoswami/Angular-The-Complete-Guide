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
  //ElementRef is a ref to an element, an angular type w/ a useful native element prop to access underlying element (input element)
  // need to include {static: true} if we want to use the selected element in ngoninit

  constructor() {}

  ngOnInit(): void {} // lifecycle hook

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
