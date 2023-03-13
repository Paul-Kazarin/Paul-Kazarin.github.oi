import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Inventory} from "../../../interfaces/inventory";
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-rvs',
  templateUrl: './rvs.component.html',
  styleUrls: ['./rvs.component.scss']
})
export class RvsComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<Inventory>;
  displayedColumns = ['image', 'subType', 'brand', 'model', 'year', 'peopleCapacity', 'length', 'weight', 'pricePerHour', 'pricePerDay'];
  units: Inventory[] = [];

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  constructor(public inventoryService: InventoryService) {
    this.dataSource = new MatTableDataSource(this.units);
  }

  ngOnInit(): void {
    this.units = this.inventoryService.getItemsOld();
    this.dataSource = new MatTableDataSource(this.units);
  }

  ngAfterViewInit() {
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
