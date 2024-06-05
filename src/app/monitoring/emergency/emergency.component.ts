import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.css'
})
export class EmergencyComponent {
  recipient: any;
  date: any;
  description: any;
  history: any[] = [];

  onSubmit(form: NgForm) {
    const value = form.value;

    // create new data object
    const newData = {
      recipient: value.recipient,
      date: new Date(value.date),
      description: value.description,
    }

    console.log(newData);
    // add new data to history array
    this.history.push(newData);

    // reset the form
    form.reset();
  }
}
