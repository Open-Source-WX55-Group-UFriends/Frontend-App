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
  farm: any;
  formFarm: any;



  constructor(private route: ActivatedRoute, private farmService: FarmService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.farmService.getFarmById(id).subscribe(farm => {
        this.farm = farm;
        this.formFarm = { ...farm };
      });
    } else {
      console.error('No farm ID was provided');
    }
  }


  saveFarm(): void {
    this.farm = { ...this.formFarm };
    this.farmService.updateFarm(this.farm).subscribe(() => {
      console.log('Farm updated successfully');
      this.router.navigate(['/descriptions', this.farm.id]);
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
        this.formFarm.images = [reader.result as string];
      };

      reader.readAsDataURL(file);
    }
  }
}
