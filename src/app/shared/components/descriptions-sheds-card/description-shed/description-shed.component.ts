import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmService } from '../../../../profile-farm/services/farm/farm.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../register/model/profile.service';

@Component({
  selector: 'app-description-shed',
  templateUrl: './description-shed.component.html',
  styleUrls: ['./description-shed.component.css']
})
export class DescriptionShedComponent {

  farm: any;

  constructor(private route: ActivatedRoute, private farmService: FarmService, private profileService: ProfileService, private router: Router) { }
  currentProfile: any;

  ngOnInit(): void {
    this.getFarmData();
    this.profileService.getProfiles().subscribe(profiles => {
      this.currentProfile = profiles[profiles.length - 1];
    });
  }


  getFarmData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.farmService.getFarmById(id).subscribe((data: any) => {
        this.farm = data;
        console.log(this.farm);
      });
    } else {
      console.error('No se proporcionó un ID de granja');
      return;
    }
  }


  Handle(event:number) {
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

