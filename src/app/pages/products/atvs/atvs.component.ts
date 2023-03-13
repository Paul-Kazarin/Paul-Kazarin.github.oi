import {AfterViewInit, Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Inventory} from "../../../interfaces/inventory";
import {InventoryService} from "../../../services/inventory.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-atvs',
  templateUrl: './atvs.component.html',
  styleUrls: ['./atvs.component.scss']
})
export class AtvsComponent implements OnInit, AfterViewInit, OnDestroy {

  dataSource: MatTableDataSource<Inventory>;
  displayedColumns = ['image', 'subType', 'brand', 'model', 'year', 'peopleCapacity', 'length', 'weight', 'pricePerHour', 'pricePerDay'];
  units: Inventory[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  constructor(public inventoryService: InventoryService) {
    this.dataSource = new MatTableDataSource(this.units);
  }

  ngOnInit(): void {
    this.sub = this.inventoryService.getItems().subscribe({
      next: units => {
        this.units = units;
        this.dataSource = new MatTableDataSource(this.units);
      },
      error: err => this.errorMessage = err
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);
    this.dataSource.sort = this.sort;
    console.log(this.sort);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

