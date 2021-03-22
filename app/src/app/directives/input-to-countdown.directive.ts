import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appInputToCountdown]'
})
export class InputToCountdownDirective {

  private state = new BehaviorSubject({
    seconds: 0,
    minutes: 0,
    hours: 0,
    totalTime: 0
  });
  public obs$ = this.state.asObservable();

  private intervalState = new BehaviorSubject({
    min: 0,
    max: 0
  });
  public intervalObs$ = this.intervalState.asObservable();

  updateState(value, command) {
    let valToNumber = parseInt(value);
    if (valToNumber < 0) valToNumber = 0;
    let update = this.state.value;
    if (command === 'seconds') update.seconds = valToNumber;
    if (command === 'minutes') update.minutes = valToNumber;
    if (command === 'hours') update.hours = valToNumber;
    update.totalTime = this.calculateSeconds(update);
    this.state.next(update);
    console.log('totalTime', update.totalTime);
    console.log(this.state.next(update));
    console.log(update);
    console.log(valToNumber);
  }

  updateIntervalState(value, command) {
    let valToNumber = parseInt(value);
    if (valToNumber < 0) valToNumber = 0;
    let update = this.intervalState.value;
    if (command === 'min') update.min = valToNumber;
    if (command === 'max') update.max = valToNumber;
    this.intervalState.next(update);
  }

  calculateSeconds(update) {
    let totalTime = update.seconds;
    totalTime += update.minutes * 60;
    totalTime += (update.hours * 60) * 60;
    return totalTime;
  }



  constructor() {
  }

  getSeconds() {
    return this.state.value.seconds;
  }

  getMinutes() {
    return this.state.value.minutes;
  }

  getHours() {
    return this.state.value.hours;
  }

  getTotalSeconds() {
    return this.state.value.totalTime;
  }


  getMin() {
    return this.intervalState.value.min;
  }

  getMax() {
    return this.intervalState.value.max;
  }

}
