import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  username = 'rgoswami';
  serverCreated = false;
  servers = ['test server 1', 'test server 2'];
  toggleButton = false;
  count = 0;
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onToggleButtonClick() {
    this.toggleButton = !this.toggleButton;
    this.count += 1;
    this.clicks.push(new Date());
  }

  checkUsernameEmpty() {
    if (!this.username) {
      return true;
    }
    return false;
  }

  onButtonClick() {
    this.username = '';
  }
  onCreateServer() {
    //on tells us this gets triggered via event when user interacts with template
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    //$event is a reserved var name you can use in the template when using event binding
    // it's the data emitted with that event e.g. click emits obj with clicked coordinates
    this.serverName = (<HTMLInputElement>event.target).value; //target is of type input element.
    // can explicitly inform IDE/typescript about it by add <...> in front (explicit casting)
  }
}
