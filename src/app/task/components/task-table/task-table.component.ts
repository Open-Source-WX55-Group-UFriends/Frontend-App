import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatExpansionPanel } from '@angular/material/expansion';
import {TaskService} from "../../services/tasks.service";
import {ProfileService} from "../../../register/model/profile.service"; // Import MatExpansionPanel

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class  TaskTableComponent implements OnInit {
  displayedColumns: string[] = ['employee', 'time', 'date', 'description', 'state'];
  dataSource: MatTableDataSource<any>;
  userRole: any;
  employeeName: string = '';
  taskState: string = '';

  constructor(private taskService: TaskService, private profileService: ProfileService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getUserRole();
    this.getTasksForFarmer(); // Llama al método para obtener las tareas
  }

  getUserRole(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.userRole = profiles[profiles.length - 1];
    });
  }

  getTasksForFarmer(): void {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.dataSource.data = tasks;
    });
  }

  /*
  finishTask(taskId: number, expansionPanel: MatExpansionPanel) {
    this.taskService.finishTask(taskId);
    expansionPanel.close();
  }

  showFinishedTasks() {
    this.dataSource.data = this.taskService.getFinishedTasks();
  }

  showTasksByDate() {
    this.dataSource.data = this.taskService.getTasksByDate();
  }

  filterTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      let filteredTasks = tasks;
      if (this.employeeName) {
        filteredTasks = filteredTasks.filter(task => task.employee.toLowerCase().includes(this.employeeName.toLowerCase()));
      }
      if (this.taskState) {
        filteredTasks = filteredTasks.filter(task => task.status === this.taskState);
      }
      this.dataSource.data = filteredTasks;
    });
  }

  clearInput(inputField: any) {
    this.employeeName = '';
    inputField.focus();
  }

   */
}
