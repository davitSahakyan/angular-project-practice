import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CarService implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchCars() {
    return this.http.get('https://car-list-7a458.firebaseio.com/cars.json');
  }

  addCar() {
    this.http
      .post('https://car-list-7a458.firebaseio.com/cars.json', {
        h: 'ewrf',
      })
      .subscribe();
  }

  getData() {
    return this.data;
  }
}
