import { Component } from '@angular/core';
import {ShedService} from "../../service/shed/shed.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-sheds',
  templateUrl: './add-sheds.component.html',
  styleUrl: './add-sheds.component.css'
})
export class AddShedsComponent {
  shed = {
    id: '',
    shedType: '',
    species: ''
  };

  speciesOptions: string[] = [];

  animalSpecies = ['Chickens', 'Pigs', 'Sheep'];
  cropSpecies = ['Wheat', 'Corn', 'Barley'];

  constructor(private shedService: ShedService, private router: Router) {  }

  saveShed() {
    this.shedService.addShed(this.shed);
    this.shed = {
      id: '',
      shedType: '',
      species: ''
    };
    this.router.navigate(['monitoring/list-sheds'])
  }

  goBack() {
    this.router.navigate(['monitoring/list-sheds']);
  }

  updateSpeciesOptions(): void {
    if (this.shed.shedType === 'Animals') {
      this.speciesOptions = this.animalSpecies;
    } else if (this.shed.shedType === 'Crops') {
      this.speciesOptions = this.cropSpecies;
    } else {
      this.speciesOptions = [];
    }

    // Reset species selection when changing shed type
    this.shed.species = '';
  }

}
