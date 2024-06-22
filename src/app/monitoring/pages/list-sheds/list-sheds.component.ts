import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {ShedService} from "../../service/shed.service";
@Component({
  selector: 'app-list-sheds',
  templateUrl: './list-sheds.component.html',
  styleUrl: './list-sheds.component.css'
})
export class ListShedsComponent implements OnInit{
  sheds: any[] = [];
  filteredSheds: any[] = [];
  isLoading: boolean = true;

  constructor(
    private shedService: ShedService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadSheds();
  }

  loadSheds() {
    this.isLoading = true;
    this.shedService.getAllSheds().subscribe(
      (data) => {
        this.sheds = data;
        this.filteredSheds = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching sheds', error);
        this.isLoading = false;
        if (error.status === 401) {
          this.authService.signOut();
        }
      }
    );
  }

}
