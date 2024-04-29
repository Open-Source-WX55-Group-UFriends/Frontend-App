import { Task } from './task.entity';
export class Worker {
  id: string;
  name: string;
  task: Task[];

  constructor(id: string, name: string, task: Task[] = []) {
    this.id = id;
    this.name = name;
    this.task = task;
  }

}
