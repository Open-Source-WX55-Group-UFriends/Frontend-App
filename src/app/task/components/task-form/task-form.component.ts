import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/tasks.service";
import {Task} from "../../model/task.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
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

      }
    }

}
