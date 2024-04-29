import { Task } from './task.entity';
export class Worker {
  id: string;
  name: string;
  task: Task[];

  constructor() {
    this.id='';
    this.name='';
    this.task=[];
  }

}
