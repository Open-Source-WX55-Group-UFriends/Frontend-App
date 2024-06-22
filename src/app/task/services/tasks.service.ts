import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, Subject, switchMap} from 'rxjs';
import { Task } from '../model/task.entity';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../register/services/authentication.service";
import {map} from "rxjs/operators";

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



  getAllEmployees(): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers =>
        this.http.get<any>(`${this.apiUrl}/employees/all`, { headers }).pipe(
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












}

/**
 *
 * /*
 * export class TaskService{
 *
 *   private apiUrl = `${environment.serverBasePath}/task`;
 *
 *   constructor(
 *     private http: HttpClient,
 *     private authService: AuthenticationService
 *   ) { }
 *
 *   private getAuthHeaders(): Observable<HttpHeaders> {
 *     return this.authService.getToken().pipe(
 *       map(token => {
 *         console.log('Token de autenticación:', token);
 *         return new HttpHeaders({
 *           'Content-Type': 'application/json',
 *           'Authorization': `Bearer ${token}`
 *         });
 *       })
 *     );
 *   }
 *
 *   getAllTasks(): Observable<any> {
 *     return this.getAuthHeaders().pipe(
 *       switchMap(headers =>
 *         this.http.get<any>(`${this.apiUrl}/all/farmer/me`, { headers }).pipe(
 *           map((tasks: any[]) => tasks.map(tasks => ({
 *             taskId: tasks.taskId,
 *             description: tasks.description,
 *             status: tasks.status,
 *             time: tasks.time,
 *             endDate: tasks.endDate,
 *             collaboratorId: tasks.collaboratorId
 *           })))
 *         )
 *       ),
 *       catchError(error => {
 *         console.error('Error fetching tasks:', error);
 *         return of([]);
 *       })
 *     );
 *   }
 *   */
