import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemType} from "../../interfaces/itemType";
import {InventoryService} from "../../services/inventory.service";
import {MatDialog} from "@angular/material/dialog";
import {ReportModalComponent} from "../report-modal/report-modal.component";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  types: ItemType[] = [];
  type: string = '';
  typeCheck: boolean = false;
  subType: boolean = false;
  brand: boolean = false;
  model: boolean = false;
  year: boolean = false;
  length: boolean = false;
  weight: boolean = false;
  pricePerHour: boolean = false;
  pricePerDay: boolean = false;
  peopleCapacity: boolean = false;
  active: boolean = false;
  image: boolean = false;
  comment: boolean = false;
  dateCreated: boolean = false;
  dateUpdated: boolean = false;
  startDate: string = '';
  endDate: string = '';
  selectedAll: boolean = false;

  constructor(
    private router: Router,
    private inventoryService: InventoryService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.inventoryService.getTypes().subscribe({
      next: types => {
        this.types = types;
      }
    });
  }

  onHome(): void {
    this.router.navigate(['/homepage']);
  }

  openReportModal(): void {
    const dialogRef = this.dialog.open(ReportModalComponent, {
      width: '100%',
      height: '100%',
      data: {
        type: this.type,
        typeCheck: this.typeCheck,
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
        comment: this.comment,
        dateCreated: this.dateCreated,
        dateUpdated: this.dateUpdated,
        startDate: this.startDate,
        endDate: this.endDate,
        selectedAll: this.selectedAll
      }
    })
  }

  selectAll(): void {
    this.typeCheck = true;
    this.subType = true;
    this.brand = true;
    this.model = true;
    this.year = true;
    this.length = true;
    this.weight = true;
    this.pricePerHour = true;
    this.pricePerDay = true;
    this.peopleCapacity = true;
    this.active = true;
    this.comment = true;
    this.image = true;
    this.dateCreated = true;
    this.dateUpdated = true;
    this.selectedAll = true;
  }

  deselectAll(): void {
    this.typeCheck = false;
    this.subType = false;
    this.brand = false;
    this.model = false;
    this.year = false;
    this.length = false;
    this.weight = false;
    this.pricePerHour = false;
    this.pricePerDay = false;
    this.peopleCapacity = false;
    this.active = false;
    this.comment = false;
    this.image = false;
    this.dateCreated = false;
    this.dateUpdated = false;
    this.selectedAll = false;
  }

}
