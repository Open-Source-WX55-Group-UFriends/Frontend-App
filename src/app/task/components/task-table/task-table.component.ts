
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Worker} from "../../model/worker.entity";
import {Task} from "../../model/task.entity";
@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit{  name = 'Angular';
  dcWorkers: string[] = ['id', 'name', 'time', 'date', 'state'];
  dsWorkers: MatTableDataSource<any>;
  tasks: Task[] = [
    { time: '10:00', date: '2021-10-10', state: 'pending', description: 'Task 1 my man' },
    { time: '06:00', date: '2021-10-10', state: 'pending', description: 'Task 2 my man' },
  ];
  workers: Worker[] = [
    new Worker('1', 'Mathias', this.tasks),
    new Worker('2', 'Francisco', this.tasks),
  ];

  constructor() {
    this.dsWorkers = new MatTableDataSource<Worker>();
  }

  ngOnInit() {
    this.updateTableTrainers();
  }

  updateTableTrainers() {
    this.dsWorkers.data = this.workers;
    console.log(this.dsWorkers.data);
  }

}
