import {Component, OnInit} from '@angular/core';
import {AnimalServiceService} from "../../service/animal.service.service";
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {CropService} from "../../service/crop.service";

@Component({
  selector: 'app-crop-inventory',
  templateUrl: './crop-inventory.component.html',
  styleUrl: './crop-inventory.component.css'
})
export class CropInventoryComponent implements OnInit{
  crops: any[] = [];
  //filteredCrops: any[] = [];
  isLoading: boolean = true;
  filteredCrops = this.crops;
  selectedShed = '';

  constructor(
    private cropService: CropService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCrops();
  }

  loadCrops() {
    this.isLoading = true;
    this.cropService.getAllCrops().subscribe(
      (data) => {
        this.crops = data;
        this.filteredCrops = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching crops', error);
        this.isLoading = false;
        if (error.status === 401) {
          this.authService.signOut();
        }
      }
    );
  }

  filterCrops(): void {
    if (this.selectedShed) {
      this.filteredCrops = this.crops.filter(crop => crop.shed === this.selectedShed);
    } else {
      this.filteredCrops = this.crops;
    }
  }

}
