
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProfileService} from "../../../register/model/profile.service";
import {TaskService} from "../../services/tasks.service";
@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit {
  displayedColumns: string[] = ['employee', 'time', 'date', 'description', 'state'];
  dataSource: MatTableDataSource<any>;
  userRole: any;

  constructor(private taskService: TaskService, private profileService: ProfileService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getUserRole();
    this.taskService.tasks$.subscribe(tasks => {
      this.dataSource.data = tasks;
    });
  }
  getUserRole(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.userRole = profiles[profiles.length - 1];
    });
  }
}
