import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: any[] = [];
  private profilesSubject = new BehaviorSubject<any[]>([]);
  private register: any[] = [];
  private registersSubject = new BehaviorSubject<any[]>([]);
  constructor() {}

  addProfile(profile: any) {
    console.log(profile);

    //Add an id for the profile
    const id = `profile${this.profiles.length + 1}`;
    this.profiles.push({ ...profile, id });
    this.profilesSubject.next(this.profiles);
  }

  getProfiles() {
    return this.profilesSubject.asObservable();
  }

  addRegister(register: any) {
    console.log(register);

    //Add an id for the register
    const id = `register${this.register.length + 1}`;
    this.register.push({ ...register, id });
    this.registersSubject.next(this.register);
  }

  getRegisters() {
    return this.registersSubject.asObservable();
  }

}
