import {state} from "@angular/animations";

export class Task {

  time: string;
  date: string;
  state: string
  description: string;

  constructor() {

    this.time = ' ';
    this.date = '';
    this.state = '' ;
    this.description = '';
  }

}
