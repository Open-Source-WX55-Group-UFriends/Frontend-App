import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../service/employee/employee.service";
import {Location} from "@angular/common";
import {AnimalService} from "../../service/animal/animal.service";

@Component({
  selector: 'app-animal-inventory',
  templateUrl: './animal-inventory.component.html',
  styleUrl: './animal-inventory.component.css'
})
export class AnimalInventoryComponent implements OnInit {
  animals: any[] = [
    { id: 1, age: 5, location: 'Field', shed: 'Shed 1', healtstatus: 'Healthy' },
    { id: 2, age: 2, location: 'Barn', shed: 'Shed 2', healtstatus: 'Sick' },
    { id: 3, age: 3, location: 'Pasture', shed: 'Shed 3', healtstatus: 'Recovering' },
    { id: 4, age: 4, location: 'Field', shed: 'Shed 1', healtstatus: 'Healthy' },
  ];

  searchTerm: string = '';
  isLoading = false;
  previousAnimals: any[] = [];
  searchPerformed = false;

  filteredAnimals = this.animals;
  selectedShed = '';

  constructor(private animalService: AnimalService, private location: Location) { }
  ngOnInit() {
    this.getAnimals();
    this.filterAnimals();
  }

  getAnimals() {
    this.animalService.getAnimals().subscribe(data => {
      this.animals = [...this.animals, ...data];
      this.filteredAnimals = this.animals;
    });
  }

  filterAnimals(): void {
    if (this.selectedShed) {
      this.filteredAnimals = this.animals.filter(animal => animal.shed === this.selectedShed);
    } else {
      this.filteredAnimals = this.animals;
    }
  }

}
