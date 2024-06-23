import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import {FarmService} from "../services/farm/farm.service";
import {AuthenticationService} from "../../register/services/authentication.service";

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

  constructor(private router: Router, private farmService: FarmService, private authService: AuthenticationService) {
    const userId = this.authService.getIdSignIn();

    this.farmService.getFarmById(userId).subscribe(response => {
      if (response) {
        this.router.navigate(['/description-shed',userId]);
      }
    });
  }

  save() {
    const highlights = this.farm.highlights.split('\n');
    if (highlights.length < 1 || highlights.length > 3) {
      alert('Please enter between 1 and 3 highlights.');
      return;
    }
    this.farm.highlight1 = highlights[0];
    this.farm.highlight2 = highlights[1] || '';
    this.farm.highlight3 = highlights[2] || '';

    const farmData = {
      farmName: this.farm.name,
      location: this.farm.ubication,
      type: this.farm.farmType,
      infrastructure: this.farm.infrastructure,
      services: this.farm.service,
      status: this.farm.condition,
      certificates: this.farm.certifications,
      image: this.farm.images.length ? this.farm.images[0] : '',
      price: parseFloat(this.farm.price),
      Surface: this.farm.totalSurface,
      product: this.farm.product,
      highlights: `${this.farm.highlight1}\n${this.farm.highlight2}\n${this.farm.highlight3}`
    };

    // @ts-ignore
    this.farmService.addFarm(farmData).subscribe(response => {
      console.log("data", farmData); // Imprime los datos de farmData
      if (response) {
        alert('Farm added successfully.');
        this.router.navigate(['/home']);
      } else {
        alert('Failed to add farm.');
      }
    });
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
