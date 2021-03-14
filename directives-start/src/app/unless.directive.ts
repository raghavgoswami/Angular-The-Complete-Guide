import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    //prop has to share name of directive***
    if (!condition) {
      // display something
      // create view in view container which is the template ref
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // display nothing
      this.vcRef.clear(); // remove everything from this place in DOM
    }
  }
  // this is a setter of a property, a method executed whenever the prop changes (i.e outside of dir)

  //template gives access to template (the WHAT)
  //vcref is view container ref (view container is WHERE we place dir in document)
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
