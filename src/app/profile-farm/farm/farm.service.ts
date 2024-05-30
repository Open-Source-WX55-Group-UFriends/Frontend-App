import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private farms: any[] = [];
  private farmsSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    // Id generator
    this.farms = this.farms.map((farm, index) => {
      return { ...farm, id: `farm${index + 1}` };
    });
  }

  addFarm(farm: any) {
    console.log(farm);

    //Add an id for the farm xd
    const id = `farm${this.farms.length + 1}`;
    this.farms.push({ ...farm, id });
    this.farmsSubject.next(this.farms);
  }

  getFarms() {
    return this.farmsSubject.asObservable();
  }

  getFarmById(id: string) {
    const farm = this.farms.find(farm => farm.id === id);
    console.log('getFarmById called, found farm:', farm);
    return of(farm);
  }
}
