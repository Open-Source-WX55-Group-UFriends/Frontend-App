import {state} from "@angular/animations";

export class Task {

  time: string;
  date: string;
  state: string
  employee:string;
  description: string;


  constructor(time: string, date: string, state: string, description: string, employee:string) {
    this.time = time;
    this.date = date;
    this.state = state;
    this.description = description;
    this.employee = employee;
  }

}
