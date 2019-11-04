import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  weather: Object;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data
      console.log(this.weather);
    }
    );
  }

}