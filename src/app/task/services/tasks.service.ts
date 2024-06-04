import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { Task } from '../model/task.entity';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  tasks$ = this.tasksSubject.asObservable();

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }
}
