import {Component, OnInit} from '@angular/core';
import {FeedingService} from "../../service/feeding/feeding.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-feeding-record',
  templateUrl: './feeding-record.component.html',
  styleUrl: './feeding-record.component.css'
})
export class FeedingRecordComponent implements OnInit{
  feeding = {
    id: '',
    shed: '',
    date: '',
    typeFood: '',
    amountFood: ''
  };

  feedings: any[] = [

  ];

  isLoading = false;

  filteredFeedings = this.feedings;
  selectedShed = '';

  constructor(private feedingService: FeedingService, private router: Router,
              private location: Location) {  }

  ngOnInit() {
    this.getFeedings();
    this.filterFeedings();
  }

  getFeedings() {
    this.feedingService.getFeedings().subscribe(data =>{
      this.feedings = [...this.feedings, ...data];
      this.filteredFeedings = this.feedings;
    })
  }

  filterFeedings(): void {
    if (this.selectedShed) {
      this.filteredFeedings = this.feedings.filter(feeding => feeding.shed === this.selectedShed);
    }else {
      this.filteredFeedings = this.feedings;
    }
  }

  saveFeeding() {
    this.feedingService.addFeeding(this.feeding);
    this.feeding = {
      id: '',
      shed: '',
      date: '',
      typeFood: '',
      amountFood: ''
    };
    this.router.navigate(['monitoring/feeding-record'])
  }

  goBack() {
    this.router.navigate(['monitoring/feeding-record']);
  }
}
