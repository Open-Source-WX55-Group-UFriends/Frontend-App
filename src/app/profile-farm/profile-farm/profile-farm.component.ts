import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import {FarmService} from "../services/farm/farm.service";

@Component({
  selector: 'app-profile-farm',
  templateUrl: './profile-farm.component.html',
  styleUrls: ['./profile-farm.component.css']
})
export class ProfileFarmComponent {
  fileName: string = '';
  private incrementInterval: any;
  private decrementInterval: any;

  farm = {
    name: '',
    ubication: '',
    infrastructure: '',
    farmType: '',
    product: '',
    totalSurface: "" as any,
    service: '',
    certifications: '',
    condition: '',
    highlights: '',
    highlight1: '',
    highlight2: '',
    highlight3: '',
    price: "" as any,
    images: [] as string[]
  };

  constructor(private router: Router, private farmService: FarmService) { }

  save() {
    const highlights = this.farm.highlights.split('\n');
    if (highlights.length < 1 || highlights.length > 3) {
      alert('Please enter between 1 and 3 highlights.');
      return;
    }
    this.farm.highlight1 = highlights[0];
    this.farm.highlight2 = highlights[1] || '';
    this.farm.highlight3 = highlights[2] || '';

    // Pass the userRole when calling addFarm
    this.farmService.addFarm(this.farm, 'farmer');
    this.farm = {
      name: '',
      ubication: '',
      infrastructure: '',
      farmType: '',
      product: '',
      totalSurface: "" as any,
      service: '',
      certifications: '',
      condition: '',
      highlights: '',
      highlight1: '',
      highlight2: '',
      highlight3: '',
      price: "" as any,
      images: [] as string[]
    },

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




  startIncrement(event: Event) {
    event.preventDefault();
    let firstClick = true;
    this.incrementInterval = setInterval(() => {
      if (this.farm.totalSurface < 500) {
        if (firstClick) {
          this.farm.totalSurface++;
          firstClick = false;
        } else {
          this.farm.totalSurface += 1;
        }
      }
    }, 50);
  }
  stopIncrement(event: Event) {
    event.preventDefault();
    clearInterval(this.incrementInterval);
  }

  startDecrement(event: Event) {
    event.preventDefault();
    let firstClick = true;
    this.decrementInterval = setInterval(() => {
      if (this.farm.totalSurface > 1) {
        if (firstClick) {
          this.farm.totalSurface--;
          firstClick = false;
        } else {
          this.farm.totalSurface -= 1;
        }
      }
    }, 60);
  }

  stopDecrement(event: Event) {
    event.preventDefault();
    clearInterval(this.decrementInterval);
  }



}
