import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from "../../services/weather-api.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers: any[] = [];
  weatherImages = {
    'rainy.png': '../../assets/rainy.png',
    'cloudy.png': '../../assets/cloudy.png',
    'mcloudy.png': '../../assets/mcloudy.png',
    'clear.png': '../../assets/clear.png'
  };

  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit(): void {
    this.weatherApi.getWeathers().subscribe(response => {
      this.weathers = response;
      this.shuffleWeathers();
    }, error => {
      console.error(error);
    });
  }

  shuffleWeathers(): void {
    for (let i = this.weathers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tempDegree = this.weathers[i].degree;
      const tempImage = this.weathers[i].image;
      this.weathers[i].degree = this.weathers[j].degree;
      this.weathers[i].image = this.weathers[j].image;
      this.weathers[j].degree = tempDegree;
      this.weathers[j].image = tempImage;
    }
  }
}
