import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription"; //offers observables functionality

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    //ActivateRoute is an object containing curr loaded route metadata
  }

  ngOnInit() {
    this.user = {
      // using this snapshot works for first initialization
      // but not subsequent changes, which will not cause comp to be rerendered
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };
    // dont need the below approach if component is unreachable while being on the comp
    // othw need to take below approach to react to changes to route params
    this.paramsSubscription = this.route.params.subscribe(
      //subscription set up on initial render
      (params: Params) => {
        // this only runs and updates user obj when params change
        this.user.id = params["id"];
        this.user.name = params["name"];
      }
    );
    // params is an observable - feat added by 3rd party pkg but used heavily by angular
    // observables allow you to easily work with async tasks (like params of curr loaded route)
    // observables allows you to easily subscribe to some event which
    // might happen at some pt in the future to then execute code when it happens
    // without having to wait for it now
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe(); // not necessary here b/c angular does this under the hood for route observables
    // have to unsub to your own observables though
  }
}
