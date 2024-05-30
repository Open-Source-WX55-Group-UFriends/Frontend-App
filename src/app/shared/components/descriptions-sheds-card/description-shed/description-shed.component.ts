import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmService } from '../../../../profile-farm/farm/farm.service';

@Component({
  selector: 'app-description-shed',
  templateUrl: './description-shed.component.html',
  styleUrls: ['./description-shed.component.css']
})
export class DescriptionShedComponent implements OnInit {
  farm: any;

  constructor(private route: ActivatedRoute, private farmService: FarmService) { }

  ngOnInit(): void {
    this.getFarmData();
  }

  getFarmData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.farmService.getFarmById(id).subscribe((data: any) => {
        this.farm = data;
        console.log(this.farm);
      });
    } else {
      console.error('No se proporcionó un ID de granja');
      return;
    }
  }

  Handle(event:number) {
    alert(`You rate ${event}`);
  }
}
