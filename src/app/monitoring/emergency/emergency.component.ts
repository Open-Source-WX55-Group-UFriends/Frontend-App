import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {EmergencyService} from "../service/emergency.service";
import {AuthenticationService} from "../../register/services/authentication.service";
import {Observable} from "rxjs";

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
  filteredUser: any;
  currentUser: any;
  userRole: string = '';
  farmId: number = 0;

  constructor(private emergencyService: EmergencyService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.loadEmployeeNames();
    this.loadUserMessages();
    this.loadUsers();
    this.getCurrentUser();
    this.getUserRole();
  }

  loadUsers(): void {
    this.emergencyService.getUsers().subscribe(
      users => {
        this.users = users;
        console.log('Usuarios obtenidos:', this.users);
      },
      error => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  getCurrentUser(): void {
    this.emergencyService.getCurrentEmployee().subscribe(
      employee => {
        this.currentUser = employee;
        if (this.currentUser) {
          console.log('Empleado actual:', this.currentUser);
          this.farmId = this.currentUser.farmId;
          console.log("farm id es", this.farmId);
          this.filterUsersByFarmId();
        } else {
          console.error('Error: Empleado actual no disponible.');
        }
      },
      error => {
        console.error('Error obteniendo el empleado actual:', error);
      }
    );
  }

  getUserRole(): void {
    this.authService.getUserRole().subscribe(
      role => {
        this.userRole = role;
        console.log('Rol del usuario:', this.userRole);
      },
      error => {
        console.error('Error al obtener el rol del usuario:', error);
      }
    );
  }

  filterUsersByFarmId(): void {
    this.filteredUser = this.users.find(user => user.id === this.farmId);
    if (this.filteredUser) {
      console.log('Usuario filtrado:', this.filteredUser);
    } else {
      console.error('Error: Usuario filtrado no encontrado.');
    }
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
    console.log('Buscando nombre para ID:', id);
    const employee = this.employees.find(emp => emp.id === id);
    console.log('Empleado encontrado:', employee);
    return employee ? employee.name : 'Desconocido';
  }


  onSubmit(form: NgForm) {
    const value = form.value;

    if(this.userRole === 'ROLE_FARMER') {
      const newData = {
        collaboratorId: value.collaboratorId,
        description: value.description,
      };

      console.log('Datos que se enviarán al servidor:', newData);

      this.emergencyService.sendEmergency(newData).subscribe(
        response => {
          console.log('Data sent successfully', response);
          const historyItem = {
            ...newData,
            employeeName: this.getEmployeeNameById(newData.collaboratorId),
            date: new Date()
          };
          this.history.push(historyItem);
          form.resetForm();
        },
        error => {
          console.error('Error sending data', error);
        }
      );

    } else if (this.userRole === 'ROLE_FARMWORKER') {
      const newDataEmployee = {
        collaboratorId: this.currentUser.id,
        farmerId: this.filteredUser.id,
        description: value.description,
      };

      console.log('Datos que se enviarán al servidor:', newDataEmployee);

      this.emergencyService.sendEmergency(newDataEmployee).subscribe(
        response => {
          console.log('Data sent successfully', response);
          const historyItem = {
            ...newDataEmployee,
            employeeName: this.getEmployeeNameById(newDataEmployee.collaboratorId),
            date: new Date()
          };
          this.history.push(historyItem);
          form.resetForm();
        },
        error => {
          console.error('Error sending data', error);
        }
      );
    }
  }
}
