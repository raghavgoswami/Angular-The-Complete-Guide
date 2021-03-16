import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({ providedIn: "root" })
export class UsersService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  constructor(private counterService: CounterService) {} // since injecting counterservice

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.counterService.incrementActiveToInactive();
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.counterService.incrementInactiveToActive();
    this.inactiveUsers.splice(id, 1);
  }
}

// needs to up the counter in counter service every time a user status change takes place
// needs to manage two arrays and methods to transfer users between arrays
