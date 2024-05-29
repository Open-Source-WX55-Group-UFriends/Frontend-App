import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-farm',
  templateUrl: './profile-farm.component.html',
  styleUrls: ['./profile-farm.component.css']
})
export class ProfileFarmComponent {
  farm = {
    name: '',
    ubication: '',
    infrastructure: '',
    farmType: '',
    product: '',
    totalSurface: '',
    service: '',
    certifications: '',
    images: [] as string[]
  };

  farms: {
    name: string;
    ubication: string;
    infrastructure: string;
    farmType: string;
    product: string;
    totalSurface: string;
    service: string;
    certifications: string;
    images: string[];
  }[] = [];

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    this.farm.images = []; // Limpiar el array de imágenes antes de cargar nuevas imágenes

    for (let i = 0; i < input.files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!e.target?.result) return;
        this.farm.images.push(e.target.result as string);
      };

      reader.readAsDataURL(input.files[i]);
    }
  }

  save() {
    this.farms.push({ ...this.farm }); // Agregar una copia de la granja actual al array de granjas
    this.farm = {
      name: '',
      ubication: '',
      infrastructure: '',
      farmType: '',
      product: '',
      totalSurface: '',
      service: '',
      certifications: '',
      images: [] as string[]
    }; // Limpiar el formulario
  }
}
