import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {EmergencyService} from "../service/emergency.service";

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.css'
})
export class EmergencyComponent implements OnInit {
  collaboratorId: any;
  date: any;
  description: any;
  history: any[] = [];
  employees: any[] = [];
  userMessages: any[] = [];
  users: any[] = [];
  constructor(private emergencyService: EmergencyService) {}

  ngOnInit() {
    this.loadEmployeeNames();
    this.loadUserMessages();
  }

  loadEmployeeNames(): void {

    this.emergencyService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
        console.log('Lista de empleados cargada:', this.employees);
      },
      error => {
        console.error('Error loading employee names:', error);
      }
    );
  }


  loadUserMessages(): void {
    this.emergencyService.getUserMessages().subscribe(
      messages => {
        this.userMessages = messages;
        console.log('Mensajes obtenidos:', this.userMessages);
      },
      error => {
        console.error('Error loading user messages:', error);
      }
    );
  }

  getUserNameById(id: number): string {
    console.log('Buscando nombre para ID:', id);
    const user = this.users.find(user => user.id === id);
    console.log('Usuario encontrado:', user);
    return user ? user.username : 'Desconocido';
  }

  getEmployeeNameById(id: number): string {
    console.log('Buscando nombre para ID:', id);  // Log para verificar el ID
    const employee = this.employees.find(emp => emp.id === id);
    console.log('Empleado encontrado:', employee);  // Log para verificar el empleado encontrado
    return employee ? employee.name : 'Desconocido';
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    // Create new data object
    const newData = {
      collaboratorId: value.collaboratorId,
      description: value.description,
    };

    console.log('Datos que se enviarán al servidor:', newData);

    // Send new data to the server
    this.emergencyService.sendEmergency(newData).subscribe(
      response => {
        console.log('Data sent successfully', response);
        // Add new data to history array
        const historyItem = {
          ...newData,
          employeeName: this.getEmployeeNameById(newData.collaboratorId),
          date: new Date()
        };
        this.history.push(historyItem);
        // Reset the form
        form.resetForm();
      },
      error => {
        console.error('Error sending data', error);
      }
    );

    this.emergencyService.sendEmergency(newData).subscribe(
      response => {
        console.log('Data sent successfully', response);
        // Add new data to history array
        const historyItem = {
          ...newData,
          userName: this.getUserNameById(newData.collaboratorId),
          date: new Date()
        };
        this.history.push(historyItem);
        // Reset the form
        form.resetForm();
      },
      error => {
        console.error('Error sending data', error);
      }
    );
  }
}
