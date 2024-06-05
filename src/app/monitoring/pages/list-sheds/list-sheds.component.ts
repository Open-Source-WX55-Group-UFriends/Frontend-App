import {Component, OnInit} from '@angular/core';
import {ShedService} from "../../service/shed/shed.service";
import {Location} from "@angular/common";
@Component({
  selector: 'app-list-sheds',
  templateUrl: './list-sheds.component.html',
  styleUrl: './list-sheds.component.css'
})
export class ListShedsComponent implements OnInit {

  sheds: any[] = [

  ];

  searchTerm: string = '';
  isLoading = false;
  previousSheds: any[] = [];
  searchPerformed = false;

  filteredSheds = this.sheds;
  selectedShed = '';


  constructor(private shedService: ShedService, private location: Location) {  }

  ngOnInit() {
    this.getSheds();
  }

  getSheds() {
    this.shedService.getSheds().subscribe(data => {
      this.sheds = [...this.sheds, ...data];
      this.filteredSheds = this.sheds;
    });
  }

}
