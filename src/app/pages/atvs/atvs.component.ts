import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Inventory} from "../../interfaces/inventory";

@Component({
  selector: 'app-atvs',
  templateUrl: './atvs.component.html',
  styleUrls: ['./atvs.component.scss']
})
export class AtvsComponent implements AfterViewInit {
  atvs: any[] = [
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
  ]
  dataSource: MatTableDataSource<Inventory>;
  displayedColumns = ['image', 'subType', 'brand', 'model', 'year', 'peopleCapacity', 'length', 'weight', 'pricePerHour', 'pricePerDay'];

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.atvs);
  }

  ngAfterViewInit() {
    console.log(this.atvs);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

