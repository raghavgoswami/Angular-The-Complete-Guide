import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); //event can be caught outside comp
  count = 0
  interval; // interval stored in this prop so it can be cleared later

  constructor() { }

  onStartClick() {
    console.log("start button clicked")
    this.interval = setInterval(()=>{ // es6 arrow fn executed on ea tick. if using normal fn the would have to bind this to get the correct ref
      this.count++
      this.intervalFired.emit(this.count) // emit event
    }, 1000)
  }

  onStopClick() {
    console.log("stop button clicked")
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
  ngOnInit(): void {
  }

}
