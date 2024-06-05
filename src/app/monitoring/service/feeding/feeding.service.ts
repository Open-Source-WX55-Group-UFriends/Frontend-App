import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedingService {
  private feedings: any[] = [];
  private feedingsSubject = new BehaviorSubject<any[]>([]);

  constructor() { }

  addFeeding(feeding: any) {
    console.log(feeding);

    const id = `${this.feedings.length + 2}`
    this.feedings.push({ ...feeding, id});
    this.feedingsSubject.next(this.feedings);
  }

  getFeedings()
  {
    return this.feedingsSubject.asObservable();
  }
}
