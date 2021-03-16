import { Component, Input } from "@angular/core";
import { LoggingService } from "../logging.service"; //tells typescript where loggingservice comes from
import { AccountService } from "../account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  // providers: [LoggingService], // tell angular how to create logging service
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountService
  ) {}

  onSetTo(status: string) {
    // console.log("A server status changed, new status: " + status);
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    // emitting event set up in the service
    this.accountsService.statusUpdated.emit(status);
  }
}
