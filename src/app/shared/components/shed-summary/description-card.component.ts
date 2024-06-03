import {Component, OnInit} from '@angular/core';
import {FarmApiService} from "../../services/farm-api.service";
import {ActivatedRoute} from "@angular/router";
import {of, switchMap} from "rxjs";

@Component({
  selector: 'app-shed-summary',
  templateUrl: './description-card.component.html',
  styleUrl: './description-card.component.css'
})
export class DescriptionCardComponent  implements OnInit {
  selectedFarm: any;
  showFarm: boolean = false; // Añade esta línea

  constructor(private farmApiService: FarmApiService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('shed');
        if (id !== null) {
          return this.farmApiService.getById(id);
        } else {
          console.log('ID is null');
          this.showFarm = false; // Añade esta línea
          return of(null);
        }
      })
    ).subscribe(data => {
      this.selectedFarm = data;
      this.showFarm = true; // Añade esta línea
    });
  }
}
