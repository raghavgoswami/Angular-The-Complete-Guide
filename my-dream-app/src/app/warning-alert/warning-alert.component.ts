import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  templateUrl: 'warning-alert.component.html',
  styles: [
    `
      p {
        border: 1px solid red;
        padding: 20px;
        background-color: mistyrose;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
