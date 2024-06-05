import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../../model/profile.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-role-profile',
  templateUrl: './role-profile.component.html',
  styleUrl: './role-profile.component.css'
})
export class RoleProfileComponent implements OnInit {
  currentProfile: any;
  register : any;


  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getRegisters().subscribe(registers => {
      this.register = registers[registers.length - 1];
    });
    this.profileService.getProfiles().subscribe(profiles => {
      this.currentProfile = profiles[profiles.length - 1];
    });
    console.log('app-toolbar-farm initialized');
  }
  convertCamelCaseToSpace(role: string): string {
    return role.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
}
