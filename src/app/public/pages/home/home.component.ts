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
  searchProduct: string = '';
  searchUbication: string = '';
  allFarms: any;
  uniqueProducts: string[] = [];
  uniqueUbications: string[] = [];
  constructor( private router: Router, private farmService: FarmService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getFarmData();
    this.getUserFarms();
    this.getUserRole();
    this.getUniqueProducts();
    this.getUniqueUbications();
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
      this.allFarms = data.map((farm: any, index: number) => {
        return { ...farm, id: `farm${index + 1}` };
      });
      this.farms = [...this.allFarms];
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
      alert('If you want to enjoy all the content, you need to register or log in');
      this.router.navigate(['/login']);
    } else if (id) {
      this.router.navigate(['/descriptions', id]);
    } else {
      console.error('No farm ID was provided');
    }
  }

  searchFarms(): void {
    if (!this.searchProduct && !this.searchUbication) {
      this.farms = [...this.allFarms];
      return;
    }

    const filterFunction = (fieldValue: string, searchValue: string) => {
      return !searchValue || fieldValue.toLowerCase().includes(searchValue.toLowerCase());
    };

    this.farms = this.allFarms.filter((farm: any) => {
      return filterFunction(farm.product, this.searchProduct) && filterFunction(farm.ubication, this.searchUbication);
    });
  }
  getUniqueProducts(): void {
    this.farmService.getFarms().subscribe((data: any[]) => {
      this.uniqueProducts = [...new Set(data.map((farm: { product: string }) => farm.product))];
    });
  }
  getUniqueUbications(): void {
    this.farmService.getFarms().subscribe((data: any[]) => {
      this.uniqueUbications = [...new Set(data.map((farm: { ubication: string }) => farm.ubication))];
    });
  }
}
