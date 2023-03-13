import {Component, OnInit, ViewChild} from '@angular/core';
import {Sort} from "@angular/material/sort";
import {Subscription} from "rxjs";
import {InventoryService} from "../../../services/inventory.service";
import {Inventory} from "../../../interfaces/inventory";

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-rvs',
  templateUrl: './rvs.component.html',
  styleUrls: ['./rvs.component.scss']
})
export class RvsComponent implements OnInit {

  pageTitle = 'Rent Boat';
  boats: Inventory[] = [];
  sortedData: Inventory[] = [];
  filteredList: Inventory[] = [];
  displayedColumns = ['image', 'subType', 'brand', 'model', 'year', 'peopleCapacity', 'length', 'weight', 'pricePerHour', 'pricePerDay'];
  sub!: Subscription;
  errorMessage: string = '';
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    console.log('in setter: ', value);
    this.filteredList = this.performFilter(value);
  }

  constructor(public inventoryService: InventoryService) {}

  ngOnInit() {
    this.listFilter = '';
    this.sub = this.inventoryService.getItems().subscribe({
      next: units => {
        this.boats = units;
        this.filteredList = this.boats.filter((boat: any) => boat.type.toLocaleLowerCase().includes('rv'))
        this.sortedData = this.filteredList.slice();
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.boats.filter((boat: any) =>
      boat.type.toLocaleLowerCase().includes('rv') &&
      (boat.brand.toLocaleLowerCase().includes(filterBy)
        || boat.model.toLocaleLowerCase().includes(filterBy)
        || boat.subType.toLocaleLowerCase().includes(filterBy))
    );
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
