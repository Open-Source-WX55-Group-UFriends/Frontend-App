import {Component, OnInit} from '@angular/core';
import {FarmApiService} from "../../services/farm-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shed-summary',
  templateUrl: './description-card.component.html',
  styleUrl: './description-card.component.css'
})
export class DescriptionCardComponent  implements OnInit {
  selectedFarm: any;

  constructor(private farmApiService: FarmApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('shed');
    if (id !== null) {
      this.farmApiService.getById(id).subscribe(data => {
        this.selectedFarm = data;

        console.log(data); // Imprime la data en la consola
      });
    } else {
      // Maneja el caso en que 'id' es null
      console.error('ID is null');
    }
  }
}
