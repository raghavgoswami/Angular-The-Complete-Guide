import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
// don't need to include injected service in ngModule providers array if you add decorater like above
// only works in in angular 6+
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("active to inactive: " + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("inactive to active: " + this.inactiveToActiveCounter);
  }
}
