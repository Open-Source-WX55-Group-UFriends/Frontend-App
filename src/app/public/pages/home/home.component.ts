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

  constructor(private farmService: FarmService, private router: Router) { }

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
      // manejar el caso en que 'id' es null
      console.error('No se proporcionó un ID de granja');
    }
  }
}
