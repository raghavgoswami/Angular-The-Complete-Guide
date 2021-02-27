import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //Emulated is default, can also pick None, ShadowDOM
  // Emulated: styles in .css of a comp are only applied to comp (None would apply the styles globally)
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string; name: string; content: string }; // add decorater to expose prop settable by parent comp
  // parent component is any comp hosting server comp/implementing it through its selector can bind to this prop
  constructor() {}

  ngOnInit(): void {}
}
