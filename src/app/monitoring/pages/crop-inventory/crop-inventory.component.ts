import {Component, OnInit} from '@angular/core';
import {CropService} from "../../service/crop/crop.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-crop-inventory',
  templateUrl: './crop-inventory.component.html',
  styleUrl: './crop-inventory.component.css'
})
export class CropInventoryComponent implements OnInit {
  crops: any[] = [

  ];

  searchTerm: string = '';
  isLoading = false;
  previousAnimals: any[] = [];
  searchPerformed = false;

  filteredCrops = this.crops;
  selectedShed = '';

  constructor(private cropService: CropService, private location: Location) {  }

  ngOnInit() {
    this.getCrops();
    this.filterCrops();
  }

  getCrops() {
    this.cropService.getCrops().subscribe(data =>{
      this.crops = [...this.crops, ...data];
      this.filteredCrops = this.crops;
    })
  }

  filterCrops() : void {
    if (this.selectedShed) {
      this.filteredCrops = this.crops.filter(crop => crop.shed === this.selectedShed);
    } else {
      this.filteredCrops = this.crops;
    }
  }

}
