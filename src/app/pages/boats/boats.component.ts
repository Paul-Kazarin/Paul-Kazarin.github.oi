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
      itemId: 1,
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
      itemId: 2,
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
      itemId: 3,
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
    },
    {
      itemId: 4,
      type: "boat",
      subType: "wakesurf",
      brand: "Malibu",
      model: "Wakesetter",
      year: "2012",
      length: 22,
      weight: 3500,
      pricePerHour: 150,
      pricePerDay: 550,
      peopleCapacity: 10,
      image: "assets/images/sea-doo-switch-16.webp"
    },
    {
      itemId: 5,
      type: "boat",
      subType: "skiboat",
      brand: "Tige",
      model: "Ski",
      year: "2015",
      length: 21,
      weight: 3400,
      pricePerHour: 130,
      pricePerDay: 500,
      peopleCapacity: 8,
      image: "assets/images/sea-doo-switch-16.webp"
    },
    {
      itemId: 6,
      type: "boat",
      subType: "bowrider",
      brand: "Sea Ray",
      model: "240",
      year: "2017",
      length: 24,
      weight: 4100,
      pricePerHour: 140,
      pricePerDay: 520,
      peopleCapacity: 12,
      image: "assets/images/yamaha-ar190.webp"
    },
    {
      itemId: 7,
      type: "boat",
      subType: "cuddy cabin",
      brand: "Sea Ray",
      model: "260",
      year: "2014",
      length: 26,
      weight: 5100,
      pricePerHour: 170,
      pricePerDay: 600,
      peopleCapacity: 12,
      image: "assets/images/yamaha-ar190.webp"
    }
  ];
  displayedColumns = ['image', 'subType', 'brand', 'model', 'year', 'peopleCapacity', 'length', 'weight', 'pricePerHour', 'pricePerDay'];
  sortedData: any[] = [];
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
    this.listFilter = '';
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.boats.filter((boat: any) =>
    boat.brand.toLocaleLowerCase().includes(filterBy));
  }

  performFilterSorted(filterBy: string) {
    this.sortedData = this.filteredList;
  }

  sortData(sort: Sort) {
    this.performFilter(this.listFilter);
    const data = this.filteredList.slice();
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
