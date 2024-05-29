import { Component, OnInit } from '@angular/core';
import { FarmService } from '../../../profile-farm/farm/farm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  farms: any[] = [];
  private farmsSubscription: Subscription = undefined!;

  constructor(private farmService: FarmService) { }

  ngOnInit() {
    this.farmsSubscription = this.farmService.getFarms().subscribe((farms: any[]) => {
      this.farms = farms;
    });
  }

  ngOnDestroy() {
    if (this.farmsSubscription) {
      this.farmsSubscription.unsubscribe();
    }
  }
}
