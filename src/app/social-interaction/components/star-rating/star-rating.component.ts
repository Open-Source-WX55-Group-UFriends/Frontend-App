import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],

})

export class StarRatingComponent implements OnInit {
  maxRatingArr = [1, 2, 3, 4, 5];
  SelectedStar = 0;
  farmId: string = '';
  farmNumber: number = 0;
  ratings: any = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  totalRatings: number = 0;
  hasRated: boolean = false;

  constructor(private socialService: ServicesService) {}

  ngOnInit(): void {
    this.extractFarmIdFromUrl();
    this.loadRatings();
  }

  extractFarmIdFromUrl(): void {
    const url = window.location.href;
    const segments = url.split('/');
    this.farmId = segments[segments.length - 1];
    const match = this.farmId.match(/\d+$/);
    this.farmNumber = match ? parseInt(match[0], 10) : 0;
    console.log('Farm Number:', this.farmNumber);
  }

  loadRatings(): void {
    this.socialService.getRatings(this.farmNumber).subscribe({
      next: response => {
        this.updateRatings(response);
        console.log('Ratings loaded successfully', response);
      },
      error: error => {
        console.error('Error loading ratings', error);
      }
    });
  }

  updateRatings(response: any): void {
    if (typeof response === 'object') {
      this.ratings = { ...this.ratings, ...response };
      this.totalRatings = this.getTotalRatings();
    } else {
      console.error('Unexpected response format:', response);
    }
  }

  getTotalRatings(): number {
    // @ts-ignore
    return Object.values(this.ratings).reduce((total: number, count: number) => total + count, 0);
  }


  HandleMouseEnter(index: number): void {
    if (!this.hasRated) {
      this.SelectedStar = index + 1;
    }
  }

  HandleMouseLeave(): void {
    if (!this.hasRated) {
      this.SelectedStar = 0;
    }
  }

  Rating(index: number): void {
    if (!this.hasRated) {
      this.SelectedStar = index + 1;
      this.saveRating(this.SelectedStar);
    }
  }

  saveRating(rating: number): void {
    const data = {
      farmId: this.farmNumber,
      rating: rating
    };

    this.socialService.postRating(data).subscribe({
      next: response => {
        console.log('Rating saved successfully', response);
        this.hasRated = true;
        this.loadRatings();
      },
      error: error => {
        console.error('Error saving rating', error);
      }
    });
  }
}
