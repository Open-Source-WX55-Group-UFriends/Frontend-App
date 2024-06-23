import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FarmService} from "../profile-farm/services/farm/farm.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-farm',
  templateUrl: './edit-farm.component.html',
  styleUrls: ['./edit-farm.component.css']
})
export class EditFarmComponent implements OnInit {
  formFarm: any = {};
  farm: any;

  constructor(
    private route: ActivatedRoute,
    private farmService: FarmService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.farmService.getFarmById(id).subscribe(farm => {
        this.farm = farm;
        this.formFarm = { ...farm };
      });
    }
  }

  saveFarm(): void {
    const updatedFarm = {
      farmName: this.formFarm.farmName,
      location: this.formFarm.location,
      type: this.formFarm.type,
      infrastructure: this.formFarm.infrastructure,
      services: this.formFarm.services,
      status: this.formFarm.status,
      certificates: this.formFarm.certificates,
      image: this.formFarm.image,
      price: this.formFarm.price,
      Surface: this.formFarm.Surface,
      product: this.formFarm.product,
      highlights:
        this.formFarm.highlight1+' '+
        this.formFarm.highlight2+ ' ' +
        this.formFarm.highlight3

    };

    console.log('Saving farm with data:', updatedFarm);
    this.farmService.updateFarm(updatedFarm).subscribe(() => {
      console.log('Farm updated successfully');
      this.router.navigate(['/description-shed', this.farm.id]);
    }, error => {
      console.error('Error updating farm:', error);
    });
  }

  onFileChangeEdit(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.formFarm.image = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
