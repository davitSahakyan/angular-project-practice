import { CarService } from './../../core/services/car-service/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: any;
  titles: string[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.fetchCars().subscribe((res) => {
      this.cars = Object.values(res);
      this.titles = Object.keys(this.cars[0]);
    });
  }
}
