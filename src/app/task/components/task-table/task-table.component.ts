import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatExpansionPanel } from '@angular/material/expansion'; // Import MatExpansionPanel
import { ProfileService } from "../../../register/model/profile.service";
import { TaskService } from "../../services/tasks.service";
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {Task} from "../../model/task.entity";

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  tasks: any[] = [];
  isLoading: boolean = true;

  constructor(
    private taskService: TaskService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe(
      (data) => {
        this.tasks = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching animals', error);
        this.isLoading = false;
        if (error.status === 401) {
          this.authService.signOut();
        }
      }
    );
  }












  /*displayedColumns: string[] = ['employee', 'time', 'date', 'description', 'state'];
  dataSource: MatTableDataSource<any>;
  userRole: any;
  employeeName: string = '';
  taskState: string = '';


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

  finishTask(taskId: number, expansionPanel: MatExpansionPanel) { // Add MatExpansionPanel as a second argument
    this.taskService.finishTask(taskId);
    expansionPanel.close(); // Close the expansion panel
  }

  showFinishedTasks() {
    this.dataSource.data = this.taskService.getFinishedTasks();
  }

  showTasksByDate() {
    this.dataSource.data = this.taskService.getTasksByDate();
  }

  filterTasks() {
    this.taskService.tasks$.subscribe(tasks => {
      let filteredTasks = tasks;
      if (this.employeeName) {
        filteredTasks = filteredTasks.filter(task => task.employee.toLowerCase().includes(this.employeeName.toLowerCase()));
      }
      if (this.taskState) {
        filteredTasks = filteredTasks.filter(task => task.state === this.taskState);
      }
      this.dataSource.data = filteredTasks;
    });
  }
  clearInput(inputField: any) {
    this.employeeName = '';
    inputField.focus();
  }*/
}
