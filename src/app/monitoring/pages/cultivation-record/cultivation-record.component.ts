import { Component } from '@angular/core';
import {CropService} from "../../service/crop/crop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cultivation-record',
  templateUrl: './cultivation-record.component.html',
  styleUrl: './cultivation-record.component.css'
})
export class CultivationRecordComponent {
  crop = {
    id: '',
    shed: '',
    typeCrop: '',
    sowingDate: ''
  };

  constructor(private cropService: CropService, private router: Router) {  }

  saveCrop() {
    this.cropService.addCrop(this.crop);
    this.crop = {
      id: '',
      shed: '',
      typeCrop: '',
      sowingDate: ''
    };
    this.router.navigate(['monitoring/crop-inventory'])
  }

  goBack() {
    this.router.navigate(['monitoring/crop-inventory'])
  }

}
