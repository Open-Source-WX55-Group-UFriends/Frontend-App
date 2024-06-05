import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private userFarms: any[] = [];
  private farms: any[] = [
    {
      id: 'farm1',
      name: 'Los Alamos Farm',
      ubication: 'Asia',
      product: 'Chicken',
      totalSurface: 150,
      price: 7500,
      images: ["/assets/farm-1.png"],
      highlight1: 'Ecological farm',
      highlight2: 'High production',
      highlight3: 'ISO certification',
      infrastructure: 'Modern facilities',
      farmType: 'Poultry',
      service: 'Chicken sales',
      certifications: 'ISO 9001'
    },
    {
      id: 'farm2',
      name: 'El Sol Farm',
      ubication: 'Arequipa',
      product: 'Cattle',
      totalSurface: 300,
      price: 12000,
      images: ["/assets/farm-2.png"],
      highlight1: 'High quality livestock',
      highlight2: 'Innovative breeding techniques',
      highlight3: 'Organic certification',
      infrastructure: 'Wide pastures',
      farmType: 'Livestock',
      service: 'Beef sales',
      certifications: 'Organic certification'
    },
    {
      id: 'farm3',
      name: 'Green Valley Farm',
      ubication: 'Cusco',
      product: 'Sheep',
      totalSurface: 200,
      price: 8000,
      images: ["/assets/farm-3.png"],
      highlight1: 'Free range sheep',
      highlight2: 'Sustainable practices',
      highlight3: 'Wool production',
      infrastructure: 'Natural grazing lands',
      farmType: 'Sheep',
      service: 'Wool and mutton sales',
      certifications: 'Sustainable farming certification'
    },
    {
      id: 'farm4',
      name: 'Blue Mountain Farm',
      ubication: 'Cusco',
      product: 'Alpaca',
      totalSurface: 250,
      price: 10000,
      images: ["/assets/farm-4.png"],
      highlight1: 'Alpaca breeding',
      highlight2: 'High altitude farming',
      highlight3: 'Alpaca wool production',
      infrastructure: 'High altitude pastures',
      farmType: 'Alpaca',
      service: 'Alpaca wool sales',
      certifications: 'High altitude farming certification'
    },
    {
      id: 'farm5',
      name: 'River Side Farm',
      ubication: 'Ica',
      product: 'Pigs',
      totalSurface: 180,
      price: 7000,
      images: ["/assets/farm-5.png"],
      highlight1: 'Pig farming',
      highlight2: 'River side location',
      highlight3: 'Pork production',
      infrastructure: 'Modern pig pens',
      farmType: 'Pig',
      service: 'Pork sales',
      certifications: 'Pig farming certification'
    },
    {
      id: 'farm6',
      name: 'Sunset Farm',
      ubication: 'Asia',
      product: 'Chicken',
      totalSurface: 200,
      price: 8000,
      images: ["/assets/farm-1.png"],
      highlight1: 'Free range chicken',
      highlight2: 'Sustainable practices',
      highlight3: 'Organic certification',
      infrastructure: 'Natural grazing lands',
      farmType: 'Poultry',
      service: 'Chicken sales',
      certifications: 'Organic certification'
    },
    {
      id: 'farm7',
      name: 'Moonlight Farm',
      ubication: 'Arequipa',
      product: 'Cattle',
      totalSurface: 350,
      price: 13000,
      images: ["/assets/farm-3.png"],
      highlight1: 'High quality livestock',
      highlight2: 'Innovative breeding techniques',
      highlight3: 'ISO certification',
      infrastructure: 'Wide pastures',
      farmType: 'Livestock',
      service: 'Beef sales',
      certifications: 'ISO 9001'
    },
    {
      id: 'farm8',
      name: 'Starlight Farm',
      ubication: 'Cusco',
      product: 'Sheep',
      totalSurface: 220,
      price: 8500,
      images: ["/assets/farm-4.png"],
      highlight1: 'Free range sheep',
      highlight2: 'Sustainable practices',
      highlight3: 'Wool production',
      infrastructure: 'Natural grazing lands',
      farmType: 'Sheep',
      service: 'Wool and mutton sales',
      certifications: 'Sustainable farming certification'
    },
    {
      id: 'farm9',
      name: 'Cloudy Sky Farm',
      ubication: 'Cusco',
      product: 'Alpaca',
      totalSurface: 270,
      price: 10500,
      images: ["/assets/farm-2.png"],
      highlight1: 'Alpaca breeding',
      highlight2: 'High altitude farming',
      highlight3: 'Alpaca wool production',
      infrastructure: 'High altitude pastures',
      farmType: 'Alpaca',
      service: 'Alpaca wool sales',
      certifications: 'High altitude farming certification'
    },
    {
      id: 'farm10',
      name: 'Sunny Side Farm',
      ubication: 'Ica',
      product: 'Pigs',
      totalSurface: 190,
      price: 7500,
      images: ["/assets/farm-5.png"],
      highlight1: 'Pig farming',
      highlight2: 'River side location',
      highlight3: 'Pork production',
      infrastructure: 'Modern pig pens',
      farmType: 'Pig',
      service: 'Pork sales',
      certifications: 'Pig farming certification'
    }
  ];
  private farmsSubject = new BehaviorSubject<any[]>(this.farms);

  constructor() { }

  addFarm(farm: any, userRole: string) {
    const id = `farm${this.userFarms.length + 6}`;
    this.userFarms.push({ ...farm, id, addedBy: userRole });
    this.farmsSubject.next([...this.farms, ...this.userFarms]);
  }

  getUserFarms(userRole: string) {
    return of(this.userFarms);
  }

  getFarms() {
    return this.farmsSubject.asObservable();
  }

  getFarmById(id: string) {
    const farm = [...this.farms, ...this.userFarms].find(farm => farm.id === id);
    console.log('getFarmById called, found farm:', farm);// confirmation
    return of(farm);
  }
}
