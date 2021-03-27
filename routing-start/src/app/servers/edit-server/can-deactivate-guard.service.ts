import { Observable } from "rxjs/Observable";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

export interface CanComponentDeactivate {
  // contract implemented by a class/comp which forces class to provide some logic
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// angular router can execute candeactivate in service and can rely on the fact that
// comp we're currently on has candeactivate method too
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // angular router will call this method when user tries to leave route
    return component.canDeactivate();
  }
}
// CanDeactivate is a generic type that wraps our own interface which forces comp to implement CanDeactivate method
