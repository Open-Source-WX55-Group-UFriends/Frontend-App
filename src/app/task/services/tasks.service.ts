import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { Task } from '../model/task.entity';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: any[] = [
    { id: 1, employee: 'John Doe', time: '8:00', date: '2024-06-01', description: 'Feed the chickens', state: 'pending'},
    {id: 2, employee: 'Frank', time: '9:00', date: '2024-05-01', description: 'Feed the cows', state: 'pending'},
    {id: 3, employee: 'Jane', time: '10:00', date: '2024-04-01', description: 'Feed the pigs', state: 'pending'},
    {id: 4, employee: 'Alice', time: '11:00', date: '2024-03-01', description: 'Feed the sheep', state: 'pending'},
    {id: 5, employee: 'Bob', time: '12:00', date: '2024-02-01', description: 'Feed the horses', state: 'pending'},
    {id: 6, employee: 'Charlie', time: '13:00', date: '2024-01-01', description: 'Feed the goats', state: 'pending'},
    {id: 7, employee: 'David', time: '14:00', date: '2024-07-01', description: 'Feed the ducks', state: 'pending'},
    {id: 8, employee: 'Eve', time: '15:00', date: '2024-08-01', description: 'Feed the geese', state: 'pending'},
    {id: 9, employee: 'Grace', time: '16:00', date: '2024-09-01', description: 'Feed the turkeys', state: 'pending'},
    {id: 10, employee: 'Heidi', time: '17:00', date: '2024-10-01', description: 'Feed the rabbits', state: 'pending'},
  ];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  tasks$ = this.tasksSubject.asObservable();

  addTask(task: any) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }
}
