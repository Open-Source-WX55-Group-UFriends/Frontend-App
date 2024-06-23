import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatExpansionPanel } from '@angular/material/expansion';
import { TaskService } from "../../services/tasks.service";
import { ProfileService } from "../../../register/model/profile.service"; // Import MatExpansionPanel

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  displayedColumns: string[] = ['employee', 'time', 'date', 'description', 'state'];
  dataSource: MatTableDataSource<any>;
  userRole: any;
  employeeName: string = '';
  taskState: string = '';
  employees: any[] = [];
  allTasks: any[] = [];

  constructor(private taskService: TaskService, private profileService: ProfileService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getUserRole();
    this.loadEmployeesAndTasks();
  }

  getUserRole(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.userRole = profiles[profiles.length - 1];
    });
  }

  loadEmployeesAndTasks(): void {
    this.taskService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
      console.log('Lista de empleados cargada:', this.employees);
      this.loadTasks();
    });
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(tasks => {
      const tasksWithEmployeeNames = tasks.map(task => {
        const employee = this.employees.find(emp => emp.id === task.collaboratorId);
        return {
          ...task,
          employeeName: employee ? employee.name : 'Desconocido'
        };
      });
      this.allTasks = tasksWithEmployeeNames;
      this.filterTasks();
      console.log('Tareas cargadas en la tabla:', tasksWithEmployeeNames);
    });
  }

  filterTasks(): void {
    let filteredTasks = this.allTasks;

    if (this.taskState) {
      filteredTasks = filteredTasks.filter(task => task.status === this.taskState);
    }

    if (this.employeeName) {
      filteredTasks = filteredTasks.filter(task => task.employeeName.toLowerCase().includes(this.employeeName.toLowerCase()));
    }

    this.dataSource.data = filteredTasks;
  }

  clearInput(inputField: any): void {
    this.employeeName = '';
    inputField.focus();
    this.filterTasks();
  }
}
