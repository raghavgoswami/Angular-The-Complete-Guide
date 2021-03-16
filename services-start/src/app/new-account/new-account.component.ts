import { Component } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // providers: [LoggingService], //tell angular how to create loggingservice instance at comp creation
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountService
  ) {
    // type is important
    //informing angular we need an instance of LoggingService at comp creation
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert("New status: " + status)
    ); //event emitter wraps an observable
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus); //access prop created using ts shortcut

    // do not instantiate service like below:
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log("A server status changed, new status: " + accountStatus);
  }
}
