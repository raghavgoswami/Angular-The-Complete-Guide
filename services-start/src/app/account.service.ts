import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

// need to attach metadata to use a service in here
@Injectable()
// this service is injectable meaning something can be injected in here,
// it's a receiving/to-be-injected-in service
// in new angular versions, it's recommended you add it to everything so it doesn't unexpectedly break
export class AccountService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  // provide event triggerable in one componenent and listenable in another
  // see account component onSetTo method body
  statusUpdated = new EventEmitter<string>(); // can also use observables to emit and subscribe to events

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
