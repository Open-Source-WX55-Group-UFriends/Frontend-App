import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import {ProfileService} from "../../../model/profile.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-profile',
  templateUrl: './role-profile.component.html',
  styleUrls: ['./role-profile.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class RoleProfileComponent implements OnInit {
  currentProfile: any;
  register : any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private router: Router) { } // Inyecta ActivatedRoute en el constructor

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID del perfil de los parámetros de la ruta
    if (id) {
      this.profileService.getProfileById(id).subscribe(profile => { // Obtiene el perfil por su ID
        this.currentProfile = profile;
      });
    } else {
      console.error('No profile ID was provided');
    }

    this.profileService.getRegisters().subscribe(registers => {
      this.register = registers[registers.length - 1];
    });
    console.log('app-toolbar-farm initialized');
  }

  convertCamelCaseToSpace(role: string): string {
    return role.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
}
