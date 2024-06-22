import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, Subject, switchMap} from 'rxjs';
import { Task } from '../model/task.entity';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../register/services/authentication.service";
import {map} from "rxjs/operators";
import {EmployeeService} from "../../monitoring/service/employee.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService{

  private apiUrl = `${environment.serverBasePath}/task`;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  private getAuthHeaders(): Observable<HttpHeaders> {
    return this.authService.getToken().pipe(
      map(token => {
        console.log('Token de autenticación:', token);
        return new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
      })
    );
  }

  getAllTasks(): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers =>
        this.http.get<any>(`${this.apiUrl}/all/farmer/me`, { headers }).pipe(
          map((tasks: any[]) => tasks.map(tasks => ({
            taskId: tasks.taskId,
            description: tasks.description,
            status: tasks.status,
            time: tasks.time,
            endDate: tasks.endDate,
            collaboratorId: tasks.collaboratorId
          })))
        )
      ),
      catchError(error => {
        console.error('Error fetching tasks:', error);
        return of([]);
      })
    );
  }




































  /*private tasks: any[] = [
    { id: 1, employee: 'Bob', time: '1', date: '2024-06-01', description: 'Feed the chickens', state: 'pending'},
    { id: 2, employee: 'Bob', time: '2', date: '2024-05-01', description: 'Feed the cows', state: 'pending'},
    { id: 3, employee: 'Bob', time: '3', date: '2024-04-01', description: 'Feed the pigs', state: 'pending'},
    { id: 4, employee: 'Bob', time: '4', date: '2024-03-01', description: 'Feed the sheep', state: 'pending'},
    { id: 5, employee: 'Bob', time: '5', date: '2024-02-01', description: 'Feed the horses', state: 'pending'},
    { id: 6, employee: 'Jane', time: '6', date: '2024-01-01', description: 'Feed the goats', state: 'pending'},
    { id: 7, employee: 'Jane', time: '7', date: '2024-07-01', description: 'Feed the ducks', state: 'pending'},
    { id: 8, employee: 'Jane', time: '8', date: '2024-08-01', description: 'Feed the geese', state: 'pending'},
    { id: 9, employee: 'Jane', time: '9', date: '2024-09-01', description: 'Feed the turkeys', state: 'pending'},
    { id: 10, employee: 'Rodrigo Kunimoto', time: '10', date: '2024-10-01', description: 'Feed the rabbits', state: 'pending'},
    { id: 11, employee: 'Rodrigo Kunimoto', time: '11', date: '2024-11-01', description: 'Feed the cats', state: 'finished'},
    { id: 12, employee: 'Rodrigo Kunimoto', time: '12', date: '2024-12-01', description: 'Feed the dogs', state: 'pending'},
    { id: 13, employee: 'Rodrigo Kunimoto', time: '13', date: '2025-01-01', description: 'Feed the birds', state: 'pending'},
    { id: 14, employee: 'Rodrigo Kunimoto', time: '14', date: '2025-02-01', description: 'Feed the fish', state: 'pending'},
  ];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  tasks$ = this.tasksSubject.asObservable();

  addTask(task: any) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }
  finishTask(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.state = 'finished';
      this.tasksSubject.next(this.tasks);
    }
  }
  getFinishedTasks() {
    return this.tasks.filter(task => task.state === 'finished');
  }

  getTasksByDate() {
    return this.tasks.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }*/
}
