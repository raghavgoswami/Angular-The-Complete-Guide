import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute, // inject to access
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data // data returned by resolver goes in data obj just like static data does
      .subscribe((data: Data) => {
        this.server = data["server"]; // "server" needs to match key in resolve map
      });
    // replace below with resolver
    // const id = +this.route.snapshot.params["id"]; // + to cast to a number
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params["id"]);
    // });
  }

  onEdit() {
    // this.router.navigate(["/servers", this.server.id, "edit"]);
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    }); // this.route includes edit/id
    // merge - merge old query params with new added ones
    // preserve - override default behaviour of dropping query params and ensure old ones are kept
    // it would override new added ones as well
  }
}
