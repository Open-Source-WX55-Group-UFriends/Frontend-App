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
  employees: any[] = [];

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      employee: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.loadEmployeeNames();
  }

  loadEmployeeNames(): void {
    this.taskService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
      console.log('Lista de empleados cargada:', this.employees); // Imprime la lista de empleados cargada
    }, error => {
      console.error('Error loading employee names:', error);
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;
      const endDate = new Date(formValue.date).toISOString();

      console.log('Valor del formulario:', formValue);
      console.log('Lista de empleados:', this.employees);

      const selectedEmployee = this.employees.find(emp => emp.name === formValue.employee);
      console.log('Empleado seleccionado:', selectedEmployee);

      if (selectedEmployee) {
        const newTask = {
          description: formValue.description,
          time: formValue.time,
          endDate: endDate,
          collaboratorId: selectedEmployee.id
        };

        console.log('Datos de la nueva tarea:', newTask); // Imprime los datos de la tarea antes de enviarla

        this.taskService.createTask(newTask).subscribe(response => {
          console.log('Respuesta del servidor:', response); // Imprime la respuesta del servidor
          this.router.navigate(['/tasks']);
        }, error => {
          console.error('Error creating task:', error);
        });
      } else {
        console.error('Employee not found');
      }
    }
  }
}
/*
  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = {
        time: this.taskForm.value.time,
        date: this.taskForm.value.date,
        status: 'pending',
        description: this.taskForm.value.description,
        employee: this.taskForm.value.employee
      };

      this.taskService.createTask(newTask).subscribe(response => {
        this.router.navigate(['/tasks']); // Redirigir a la lista de tareas u otra vista
      }, error => {
        console.error('Error creating task:', error);
      });
    }
  }

*/
