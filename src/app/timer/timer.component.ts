import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  count = 0;
  timerRunning = false;
  t;

  constructor() { }

  ngOnInit() {
  }

  tick(){
    this.count += 1
    this.t = setTimeout(()=> {
      this.tick()
    }, 1000)
  }

  onStart(){
    if (this.timerRunning !== true) {
      this.timerRunning = true;
      this.tick();
    }
  }

  onStop(){
    clearTimeout(this.t);
    this.timerRunning = false;
  }

  onReset(){
    this.timerRunning = false;
    this.count = 0;
  }

}
