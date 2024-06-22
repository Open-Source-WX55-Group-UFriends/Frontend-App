import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/tasks.service";
import {Task} from "../../model/task.entity";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {AuthenticationService} from "../../../register/services/authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, switchMap} from "rxjs";
import {EmployeeService} from "../../../monitoring/service/employee.service";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

export class TaskFormComponent implements OnInit{
  isTaskCreated = false;
  employees: any[] = [];

  task = {
    description: '',
    time: '',
    endDate: '',
    collaboratorId: ''
  };

  private baseURL = environment.serverBasePath;

  constructor(private http: HttpClient,
              private authService: AuthenticationService,
              private router: Router,
              private employeeService: EmployeeService) {  }

  ngOnInit(): void {
    this.loadCollaborators();
  }

  loadCollaborators(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        console.log('Empleados obtenidos:', data);
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching collaborators', error);
      }
    );
  }

  addTask(taskRequest: any): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Token de autenticación:', token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          })
        };

        return this.http.post<any>(`${this.baseURL}/task`, taskRequest, httpOptions);
      }),
      catchError(error => {
        console.error('Error al crear el task:', error);
        throw error;
      })
    );
  }

  /*saveTask() {
    console.error('El task no existe, creando uno nuevo:');
    this.addTask(this.task).subscribe(createdTask => {
      console.log('Animal creado con éxito:', createdTask);
      this.router.navigate(['/']);
      this.isTaskCreated = false;
    }, error => {
      console.error('Ocurrió un error al crear el task:', error);
      console.log('Datos del task que se intentaron enviar:', this.task);
      this.router.navigate(['/']);

    });
  }*/

  saveTask(): void {
    console.log('Task antes de enviar:', this.task);
    this.addTask(this.task).subscribe(
      createdTask => {
        console.log('Task creado con éxito:', createdTask);
        this.router.navigate(['/']);
        this.isTaskCreated = false;
      },
      error => {
        console.error('Ocurrió un error al crear el task:', error);
        this.router.navigate(['/']);
      }
    );
  }



}
































/*export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      employee: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = new Task(
        this.taskForm.value.time,
        this.taskForm.value.date,
        'pending',
        this.taskForm.value.description,
        this.taskForm.value.employee
      );
      this.taskService.addTask(newTask);
      this.router.navigate(['/tasks']);
    }
  }
}*/
