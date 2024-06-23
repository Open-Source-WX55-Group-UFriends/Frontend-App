import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmService } from '../../../../profile-farm/services/farm/farm.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../register/model/profile.service';
import {AuthenticationService} from "../../../../register/services/authentication.service";

@Component({
  selector: 'app-description-shed',
  templateUrl: './description-shed.component.html',
  styleUrls: ['./description-shed.component.css']
})
export class DescriptionShedComponent implements OnInit {

  farm: any;
  currentProfile: any;
  canEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private farmService: FarmService,
    private profileService: ProfileService,
    private router: Router,
    private AuthService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.getFarmData();
    this.profileService.getProfiles().subscribe(profiles => {
      this.currentProfile = this.AuthService.getIdSignIn()
      this.checkEditPermission();
    });
  }

  getFarmData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.farmService.getFarmById(id).subscribe((data: any) => {
        this.farm = data;
        this.checkEditPermission();
      });
    } else {
      console.error('No se proporcionó un ID de granja');
      return;
    }
  }

  checkEditPermission(): void {
    if (this.farm && this.currentProfile) {
      this.canEdit = this.farm.userId === this.currentProfile.userId;
    }
  }

  Handle(event: number) {
    alert(`You rate ${event}`);
  }

  navigateToEdit(id: string, event: Event): void {
    event.stopPropagation();
    if (id) {
      this.router.navigate(['/edit-farm', id]);
    } else {
      console.error('No farm ID was provided');
    }
  }

}

