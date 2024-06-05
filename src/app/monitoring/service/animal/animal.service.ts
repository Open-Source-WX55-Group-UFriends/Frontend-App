import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animals: any[] = [];
  private animalsSubject = new BehaviorSubject<any[]>([]);

  constructor() { }

  addAnimal(animal: any) {
    console.log(animal);

    const id = `${this.animals.length + 2}`
    this.animals.push({ ...animal, id});
    this.animalsSubject.next(this.animals);
  }

  getAnimals()
  {
    return this.animalsSubject.asObservable();
  }
}
