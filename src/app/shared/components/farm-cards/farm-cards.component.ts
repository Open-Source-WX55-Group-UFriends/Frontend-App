import {Component, OnInit} from '@angular/core';
import {FarmApiService} from "../../services/farm-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-farm-cards',
  templateUrl: './farm-cards.component.html',
  styleUrl: './farm-cards.component.css'
})
export class FarmCardsComponent implements OnInit {
  farms: any[] = [];
  showFarms = true; // Añade esta línea

  constructor(private farmApiService: FarmApiService,private router: Router) { }

  ngOnInit(): void {

    this.farmApiService.getAll().subscribe(data => {
      this.farms = data;
    });

  }


  navigateToDetails(id: string): void {
    this.showFarms = false;
    this.router.navigateByUrl(`/descriptions/${id}`).then(() => {
      this.showFarms = false;
    });
  }
}
