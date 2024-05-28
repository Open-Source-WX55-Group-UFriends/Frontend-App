import {Component, OnInit} from '@angular/core';
import {FarmApiService} from "../../services/farm-api.service";

@Component({
  selector: 'app-farm-cards',
  templateUrl: './farm-cards.component.html',
  styleUrl: './farm-cards.component.css'
})
export class FarmCardsComponent implements OnInit {
  farms: any[] = [];

  constructor(private farmApiService: FarmApiService) { }

  ngOnInit(): void {
    this.farmApiService.getAll().subscribe(data => {
      this.farms = data;
    });
  }
}
