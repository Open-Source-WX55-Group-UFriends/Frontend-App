import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {CropService} from "../../service/crop.service";
import {ShedService} from "../../service/shed.service";

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
  sheds: any[] = [];

  constructor(
    private cropService: CropService,
    private authService: AuthenticationService,
    private router: Router,
    private shedService: ShedService
  ) { }

  ngOnInit() {
    this.loadCrops();
    this.loadSheds();
  }

  loadSheds(): void {
    this.shedService.getAllSheds().subscribe(
      (data) => {
        console.log('Sheds obtenidos:', data);
        this.sheds = data;
      },
      (error) => {
        console.error('Error fetching collaborators', error);
      }
    );
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
