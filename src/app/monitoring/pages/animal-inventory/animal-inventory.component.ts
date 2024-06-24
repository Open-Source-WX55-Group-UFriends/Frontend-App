import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {AnimalServiceService} from "../../service/animal.service";
import {ShedService} from "../../service/shed.service";

@Component({
  selector: 'app-animal-inventory',
  templateUrl: './animal-inventory.component.html',
  styleUrl: './animal-inventory.component.css'
})
export class AnimalInventoryComponent implements OnInit {
  animals: any[] = [];
  //filteredAnimals: any[] = [];
  isLoading: boolean = true;
  sheds: any[] = [];

  filteredAnimals = this.animals;
  selectedShed = '';

  constructor(
    private animalService: AnimalServiceService,
    private authService: AuthenticationService,
    private router: Router,
    private shedService: ShedService
  ) { }

  ngOnInit() {
    this.loadAnimals();
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

  loadAnimals() {
    this.isLoading = true;
    this.animalService.getAllAnimals().subscribe(
      (data) => {
        this.animals = data;
        this.filteredAnimals = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching animals', error);
        this.isLoading = false;
        if (error.status === 401) {
          this.authService.signOut();
        }
      }
    );
  }

  filterAnimals(): void {
    if (this.selectedShed) {
      this.filteredAnimals = this.animals.filter(animal => animal.shed === this.selectedShed);
    } else {
      this.filteredAnimals = this.animals;
    }
  }
}
