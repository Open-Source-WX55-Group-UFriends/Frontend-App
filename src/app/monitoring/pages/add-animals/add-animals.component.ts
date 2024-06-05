import { Component } from '@angular/core';
import {AnimalService} from "../../service/animal/animal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrl: './add-animals.component.css'
})
export class AddAnimalsComponent {
  animal = {
    id: '',
    shed: '',
    age: '',
    location: '',
    healtstatus: '',
  };

  constructor(private animalService: AnimalService, private router: Router) {  }

  saveAnimal() {
    this.animalService.addAnimal(this.animal);
    this.animal = {
      id: '',
      shed: '',
      age: '',
      location: '',
      healtstatus: '',
    };
    this.router.navigate(['monitoring/animal-inventory'])
  }

  goBack() {
      this.router.navigate(['monitoring/animal-inventory']);
  }

}
