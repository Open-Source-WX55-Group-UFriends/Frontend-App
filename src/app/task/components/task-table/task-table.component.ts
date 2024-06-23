import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatExpansionPanel } from '@angular/material/expansion';
import { TaskService } from "../../services/tasks.service";
import { ProfileService } from "../../../register/model/profile.service";
import {AuthenticationService} from "../../../register/services/authentication.service"; // Import MatExpansionPanel

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  displayedColumns: string[] = ['employee', 'time', 'date', 'description', 'state'];
  dataSource: MatTableDataSource<any>;
  userRole: string = '';
  employeeName: string = '';
  taskState: string = '';
  allTasks: any[] = [];
  employees: any[] = []; // Agregado para almacenar la lista de empleados

  constructor(private taskService: TaskService, private authService: AuthenticationService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getUserRole();
  }

  getUserRole(): void {
    this.authService.currentUserRole.subscribe(role => {
      this.userRole = role;
      console.log('User Role:', this.userRole);
      if (this.userRole === 'ROLE_FARMWORKER') {
        this.loadTasksForCollaborator();
      } else if (this.userRole === 'ROLE_FARMER') {
        this.loadAllTasks();
      }
    });
  }

  loadTasksForCollaborator(): void {
    this.taskService.getTasksForCollaborator().subscribe(
      tasks => {
        this.allTasks = tasks;
        this.filterTasks();
        console.log('Tareas cargadas en la tabla para colaborador:', tasks);
      },
      error => {
        console.error('Error al cargar las tareas para colaborador:', error);
      }
    );
  }

  loadAllTasks(): void {
    this.taskService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
      console.log('Lista de empleados cargada:', this.employees);
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
