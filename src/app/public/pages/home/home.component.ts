import { Component, OnInit } from '@angular/core';
import { FarmService } from '../../../profile-farm/services/farm/farm.service';
import {ProfileService} from "../../../register/model/profile.service";
import { Router } from '@angular/router';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Farm} from "../../../shared/model/farm.entity";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  farms: any[] = [];
  userFarms: any[] = [];

  constructor(private farmService: FarmService, private router: Router) { }
  ngOnInit(): void {
    this.loadFarms();
  }
  loadFarms(): void {
    this.farmService.getFarms().subscribe(data => {
      console.log('Data from API:', data); // Imprime los datos en la consola
      // @ts-ignore
      this.farms = data;
    }, error => {
      console.error('Error al cargar las farms', error);
    });
  }
  navigateToDescriptions(id: string): void {
    if (id) {
      this.router.navigate(['/description-shed', id]);
    } else {
      console.error('No farm ID was provided');
    }
  }
  /*
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

  */
}
