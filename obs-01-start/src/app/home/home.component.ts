import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // GENERAL IDEA: observables wrap some event source e.g. setInterval and give you data, errors, or complete events
    // you use subscribe and pass in functions to deal with that data or errors

    // // build custom observable using interval method, a utility method kind of like set interval
    // // .subscribe returns a subscription that we store
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   // pass anon function to subscribe, handler for data values
    //   // observable fires new value evey sec continuously - should stop to prevent mem leak
    //   // so unsubscribe from any observable with values you no longer care about by storing sub in prop
    //   // so you can destroy
    //   console.log(count);
    // });

    // pass anon function to observable.create to create observable which gets an observor arg
    // passed to it by rxjs
    const customIntervalObservable = Observable.create((observor) => {
      // observor listens for new data, errors, observable completion
      let count = 0;
      setInterval(() => {
        observor.next(count); //emit a new value
        if (count === 5) {
          // observable completes, no other values emitted
          observor.complete();
        }
        if (count > 3) {
          observor.error(new Error("count is greater than 3"));
          // observerable gets cancelled on error so don't need to unsubscribe
        }
        count++;
      }, 1000);
    });
    // with pipe, you can add multiple rxjs operators like map and filter as args to pipe method
    // GENERAL IDEA: operators allow you to build up a chain of steps you want to funnel
    // your observable data through which can be helpful when it comes to transforming data,
    // filtering out data, etc.
    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }), // boolean value determines if data point continues through pipe or is dropped
        map((data: number) => {
          return "round: " + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          // handle error
          console.log(error);
          alert(error.message);
        },
        () => {
          // completion handler, does not get triggered on error, can do cleanup work here
          // no need to unsubscribe if observable completes
          console.log("completed");
        }
      );
  }

  ngOnDestroy() {
    // clear sub when you leave comp
    this.firstObsSubscription.unsubscribe();
  }
}
