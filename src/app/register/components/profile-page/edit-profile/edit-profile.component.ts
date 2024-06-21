import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from "../../../model/profile.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  errorFields: Record<string, boolean> = {};

  currentProfile: any = {
    firstName: '',
    lastName: '',
    role: '',
    direction: '',
    phone: '',
    gender: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    documentNumber: '',
    documentType: ''
  };

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.getProfileById(id).subscribe(profile => {
        this.currentProfile = profile;
      });
    } else {
      console.error('No profile ID was provided');
    }
  }

  saveChanges(): void {
    this.profileService.updateProfile(this.currentProfile).subscribe(() => {
      console.log('Profile updated successfully');
      this.router.navigate(['/role-profile', this.currentProfile.id]);
    }, (error: any) => {
      console.error('Error updating profile:', error);
    });
  }

  convertCamelCaseToSpace(camelCase: string): string {
    return camelCase.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
  }

  showAlert(field: string) {
    this.errorFields[field] = true;
    setTimeout(() => this.errorFields[field] = false, 3000); // Oculta el mensaje después de 3 segundos
  }
  onFileChangeEdit(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.currentProfile.profileImage = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
