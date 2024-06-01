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
