import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],

})
export class StarRatingComponent implements OnInit{
  @Input() maxRating = 5;
  maxRatingArr:any = [];
  @Output()
  onRating:EventEmitter<number> = new EventEmitter<number>();


  @Input() SelectedStar=0;
  previousSelection = 0;
  constructor() { }
  HandleMouseEnter(index:number)
  {
    this.SelectedStar=index+1;
  }

  HandleMouseLeave()
  {
    if(this.previousSelection!==0){
      this.SelectedStar = this.previousSelection;
    }
    else{
      this.SelectedStar=0;
    }
  }

  Rating(index:number)
  {
    this.SelectedStar=index;
    this.previousSelection=this.SelectedStar;
    this.onRating.emit(this.SelectedStar+1);
  }
  ngOnInit(): void {
    this.maxRatingArr=Array(this.maxRating).fill(0);
  }

}


