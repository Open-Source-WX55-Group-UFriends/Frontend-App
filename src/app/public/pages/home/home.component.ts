import { Component, OnInit } from '@angular/core';
import { FarmService } from '../../../profile-farm/farm/farm.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  farms: any;
  profile:any;

  constructor( private router: Router, private farmService: FarmService) { }

  ngOnInit(): void {
    this.getFarmData();
  }

  getFarmData(): void {
    this.farmService.getFarms().subscribe((data: any) => {
      this.farms = data.map((farm: any, index: number) => {
        return { ...farm, id: `farm${index + 1}` };
      });
      this.farms.unshift({

        name: 'Farm Example',
        ubication: 'Lima',
        product: 'Chicken',
        totalSurface: 100,
        price: 5000,
        images: ['https://media.istockphoto.com/id/1401722160/es/foto/plantaci%C3%B3n-soleada-con-cultivo-de-soja.jpg?s=1024x1024&w=is&k=20&c=bv0pUoZadRvh2FXOnasv5t3Vt8hYeW_6cFETd6i7b-g='],
        highlight1: 'Highlight 1',
        highlight2: 'Highlight 2',
        highlight3: 'Highlight 3',
      });
      console.log(this.farms);
    });
  }
  navigateToDescriptions(id: string): void {
    if (id) {
      this.router.navigate(['/descriptions', id]);
    } else {

      console.error('No farm ID was provided');
    }
  }
}
