import { Component, OnInit } from '@angular/core';
import { FarmService } from '../../../profile-farm/services/farm/farm.service';
import {ProfileService} from "../../../register/model/profile.service";
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  farms: any;
  profile:any;
  userRole: any;
  userFarms: any;

  constructor( private router: Router, private farmService: FarmService, private profileService: ProfileService) { }



  ngOnInit(): void {
    this.getFarmData();
    this.getUserFarms();
    this.getUserRole();
  }
  getUserFarms(): void {
    this.farmService.getUserFarms(this.userRole).subscribe((data: any) => {
      this.userFarms = data;
      console.log(this.userFarms);
    });
  }
  getUserRole(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.userRole = profiles[profiles.length - 1].role;
    });
  }

  getFarmData(): void {
    this.farmService.getFarms().subscribe((data: any) => {
      this.farms = data.map((farm: any, index: number) => {
        return { ...farm, id: `farm${index + 1}` };
      });
      console.log(this.farms);
    });
  }
  navigateToDescriptions(id: string): void {
    if (id) {
      this.router.navigate(['/descriptions', id]);
    } else {

      console.error('No farm ID was provided');
    }
  }
  navigateToDescriptionsUndefined(id: string): void {
    if (id === 'farm3' || id === 'farm4' || id === 'farm5') {
      alert('Si quieres disfrutar de todo el contenido, tienes que registrarte o iniciar sesión');
      this.router.navigate(['/login']);
    } else if (id) {
      this.router.navigate(['/descriptions', id]);
    } else {
      console.error('No farm ID was provided');
    }
  }
}
