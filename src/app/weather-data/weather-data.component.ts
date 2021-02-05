import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  constructor(private http: HttpClient) { }

  load:boolean;
  wCityLoad:boolean=false;

  wrongCity:string;

  dateObj = Date.now();
  weatherData:any = {};

  myData(myData: any) {
    this.load=true;
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + myData + "&appid=5f531e01f48d7e649766b8e4a0ab3159").subscribe(data => {
      this.weatherData = data;
      this.load=false;   
      this.wCityLoad=false;   
    },
    (err)=>{
      this.wCityLoad=true;
      this.load=false;
      this.wrongCity="Sorry! this city is unavailable...";
    })
    
  }

  ngOnInit(): void {
    this.load=true;
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=madhubani&appid=5f531e01f48d7e649766b8e4a0ab3159").subscribe(data => {
      this.weatherData = data;
      this.load=false;
    })
  }


}
