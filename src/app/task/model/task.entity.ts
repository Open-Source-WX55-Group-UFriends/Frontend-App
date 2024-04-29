import {state} from "@angular/animations";

export class TaskEntity {
  id: number;
  employee: string;
  time: string;
  date: string;
  state: string
  description: string;

  constructor(id: number) {
    this.id = id;
    this.employee = '';
    this.time = ' ';
    this.date = '';
    this.state = '' ;
    this.description = '';
  }

}
