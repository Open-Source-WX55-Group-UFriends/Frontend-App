import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CropService {
  private crops: any[] = [];
  private cropsSubject = new BehaviorSubject<any[]>([]);
  constructor() { }

  addCrop(crop: any){
    console.log(crop);

    const id = `${this.crops.length + 2}`
    this.crops.push({ ...crop, id});
    this.cropsSubject.next(this.crops);
  }

  getCrops()
  {
    return this.cropsSubject.asObservable();
  }


}
