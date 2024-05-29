import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private farms: any[] = [];
  private farmsSubject = new BehaviorSubject<any[]>([]);

  addFarm(farm: any) {
    console.log(farm); // Añade esta línea
    this.farms.push(farm);
    this.farmsSubject.next(this.farms);
  }

  getFarms() {
    return this.farmsSubject.asObservable();
  }
}
