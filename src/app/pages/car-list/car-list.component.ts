import { CarService } from './../../core/services/car-service/car.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  titles: string[];
  public carItems: any;
  public pageSlice: any;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.fetchCars().subscribe((res) => {
      this.carItems = Object.values(res);
      this.titles = Object.keys(this.carItems[0]);
      this.pageSlice = this.carItems.slice(0, 3);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.carItems.length) {
      endIndex = this.carItems.length;
    }
    this.pageSlice = this.carItems.slice(startIndex, endIndex);
  }
}
