
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Worker} from "../../model/worker.entity";
import {Task} from "../../model/task.entity";
import {TaskService} from "../../services/tasks.service";
@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit {
  displayedColumns: string[] = ['employee', 'time', 'date', 'description', 'state'];
  dataSource: MatTableDataSource<any>;

  constructor(private taskService: TaskService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => {
      this.dataSource.data = tasks;
    });
  }
}
