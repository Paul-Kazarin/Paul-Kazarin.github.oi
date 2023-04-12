import {Component, OnInit, ViewChild} from '@angular/core';
import {Sort} from "@angular/material/sort";
import {Subscription} from "rxjs";
import {InventoryService} from "../../../services/inventory.service";
import {Inventory} from "../../../interfaces/inventory";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddnewitemComponent} from "../addnewitem/addnewitem.component";
import {AddNewSubtypeComponent} from "../../../shared/add-new-subtype/add-new-subtype.component";
import {AddNewBrandComponent} from "../../../shared/add-new-brand/add-new-brand.component";
import {AddNewModelComponent} from "../../../shared/add-new-model/add-new-model.component";

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  type: string = '';
  id: number = 0;
  subType: string = '';
  brand: string = '';
  model: string = '';
  year: number = 0;
  length: number = 0;
  weight: number = 0;
  pricePerHour: number = 0;
  pricePerDay: number = 0;
  peopleCapacity: number = 0;
  image: string = '';
  comment: string = '';
  active: boolean = true;
  items: Inventory[] = [];
  sortedData: Inventory[] = [];
  filteredList: Inventory[] = [];
  displayedColumns = ['image', 'subType', 'brand', 'model', 'year', 'peopleCapacity', 'length', 'weight', 'pricePerHour', 'pricePerDay', 'active'];
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

  constructor(
    public inventoryService: InventoryService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const type = String(this.route.snapshot.paramMap.get('type'));
    this.type = type;
    this.listFilter = '';
    this.sub = this.inventoryService.getItems().subscribe({
      next: units => {
        this.items = units;
        this.filteredList = this.items.filter((item: any) => item.type.toLocaleLowerCase().includes(this.type));
        this.sortedData = this.filteredList.slice();
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((item: any) =>
      item.type.toLocaleLowerCase().includes(this.type) &&
      (item.brand.toLocaleLowerCase().includes(filterBy)
      || item.model.toLocaleLowerCase().includes(filterBy)
      || item.subType.toLocaleLowerCase().includes(filterBy))
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

  addNewItem(): void {
    const dialogRef = this.dialog.open(AddnewitemComponent, {
      width: '70%',
      height: '80%',
      data: {
        type: this.type,
        subType: this.subType,
        brand: this.brand,
        model: this.model,
        year: this.year,
        length: this.length,
        weight: this.weight,
        pricePerHour: this.pricePerHour,
        pricePerDay: this.pricePerDay,
        peopleCapacity: this.peopleCapacity,
        image: this.image,
        active: this.active,
        comment: this.comment
      }
    })
  }

  addNewSubType(): void {
    const dialogRef = this.dialog.open(AddNewSubtypeComponent, {
      width: '60%',
      height: '30%',
      data: {
        type: this.type,
        subType: this.subType
      }
    })
  }

  addNewBrand(): void {
    const dialogRef = this.dialog.open(AddNewBrandComponent, {
      width: '60%',
      height: '30%',
      data: {
        type: this.type,
        brand: this.brand
      }
    })
  }

  addNewModel(): void {
    const dialogRef = this.dialog.open(AddNewModelComponent, {
      width: '60%',
      height: '30%',
      data: {
        type: this.type,
        model: this.model
      }
    })
  }

  goToAddImagePage(): void {
    this.router.navigateByUrl(
      'http://localhost:8080/item'
    );
  }

  onHome(): void {
    this.router.navigate(['/homepage']);
  }

}
