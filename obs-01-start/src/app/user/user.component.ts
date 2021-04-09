import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // params is an observable that angular provides, you didn't need to create it yourself/import from rxjs
    // observables are constructs (a stream of data) to which you subscribe to be informed about changes in data
    // params is a stream of route params data
    // it sends a new route param whenever param in url changes (when we navigate to a new page)

    // pass function to subscribe to get new params and extract id from it
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    // this.userService.activatedEmitter.emit(true);
    this.userService.activatedEmitter.next(true); // call next b/c subject is a special kind of observable
  }
}
