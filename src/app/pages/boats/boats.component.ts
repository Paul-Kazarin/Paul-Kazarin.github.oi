import {Component, OnInit} from '@angular/core';
import {Sort} from "@angular/material/sort";

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss']
})
export class BoatsComponent implements OnInit {

  pageTitle = 'Rent Boat';
  boats: any[] = [
    {
      unitId: 1,
      type: "boat",
      subType: "pontoon",
      brand: "SeaDoo",
      model: "Switch",
      year: "2022",
      length: 16,
      weight: 2500,
      pricePerHour: 100,
      pricePerDay: 400,
      peopleCapacity: 7,
      image: "assets/images/sea-doo-switch-16.webp"
    },
    {
      unitId: 2,
      type: "boat",
      subType: "pontoon",
      brand: "SeaDoo",
      model: "Switch",
      year: "2022",
      length: 19,
      weight: 3000,
      pricePerHour: 130,
      pricePerDay: 500,
      peopleCapacity: 9,
      image: "assets/images/sea-doo-switch-16.webp"
    },
    {
      unitId: 2,
      type: "boat",
      subType: "jetboat",
      brand: "Yamaha",
      model: "AR190",
      year: "2022",
      length: 19.5,
      weight: 2441,
      pricePerHour: 130,
      pricePerDay: 500,
      peopleCapacity: 8,
      image: "assets/images/yamaha-ar190.webp"
    }
  ];
  displayedColumns = ['image', 'subType', 'brand', 'model', 'year', 'peopleCapacity', 'length', 'weight', 'pricePerHour', 'pricePerDay'];
  sortedData: any;
  filteredList: any[] = [];
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    console.log('in setter: ', value);
    this.filteredList = this.performFilter(value);
  }

  constructor() {
    this.sortedData = this.boats.slice();
  }

  ngOnInit() {
    this.listFilter = 'yamaha';
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.boats.filter((boat) =>
    boat.brand.toLocaleLowerCase().includes(filterBy));
  }

  sortData(sort: Sort) {
    const data = this.boats.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'year':
          return compare(a.year, b.year, isAsc);
        case 'peopleCapacity':
          return compare(a.peopleCapacity, b.peopleCapacity, isAsc);
        case 'length':
          return compare(a.length, b.length, isAsc);
        case 'weight':
          return compare(a.weight, b.weight, isAsc);
        case 'pricePerHour':
          return compare(a.pricePerHour, b.pricePerHour, isAsc);
        case 'pricePerDay':
          return compare(a.pricePerDay, b.pricePerDay, isAsc);
        default:
          return 0;
      }
    });
  }
}
