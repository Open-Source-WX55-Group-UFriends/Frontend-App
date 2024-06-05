import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShedService {
  private sheds: any[] = [];
  private shedsSubject = new BehaviorSubject<any[]>([]);

  constructor() { }

  addShed(shed: any) {
    console.log(shed);

    const id = `${this.sheds.length + 2}`
    this.sheds.push({ ...shed, id});
    this.shedsSubject.next(this.sheds);
  }

  getSheds()
  {
    return this.shedsSubject.asObservable();
  }
}
