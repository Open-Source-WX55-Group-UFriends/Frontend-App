import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import {FarmService} from "../farm/farm.service";

@Component({
  selector: 'app-profile-farm',
  templateUrl: './profile-farm.component.html',
  styleUrls: ['./profile-farm.component.css']
})
export class ProfileFarmComponent {
  fileName: string = '';
  farm = {
    name: '',
    ubication: '',
    infrastructure: '',
    farmType: '',
    product: '',
    totalSurface: '',
    service: '',
    certifications: '',
    condition: '',
    highlight1: '',
    highlight2: '',
    highlight3: '',
    price: "" as any,
    images: [] as string[]
  };

  constructor(private router: Router, private farmService: FarmService) { }

  save() {
    this.farmService.addFarm(this.farm);
    this.farm = {
      name: '',
      ubication: '',
      infrastructure: '',
      farmType: '',
      product: '',
      totalSurface: '',
      service: '',
      certifications: '',
      condition: '',
      highlight1: '',
      highlight2: '',
      highlight3: '',
      price: "" as any,
      images: [] as string[]
    };
    this.router.navigate(['/home']);
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.farm.images.push(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

}
