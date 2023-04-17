import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {InventoryService} from "../../services/inventory.service";
import {Inventory} from "../../interfaces/inventory";

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss']
})
export class ReportModalComponent implements OnInit {

  items: Inventory[] = [];
  filteredList: Inventory[] = [];
  type: string = '';
  all: string = '';
  toCustomStringCreatedStartDate: string = '';
  toCustomStringCreatedEndDate: string = '';
  toCustomStringUpdatedStartDate: string = '';
  toCustomStringUpdatedEndDate: string = '';

  constructor(
    public dialogRef: MatDialogRef<ReportModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private router: Router,
    public inventoryService: InventoryService,
  ) {}

  ngOnInit(): void {
    this.type = this.data.type;
    if (!this.data.createdStartDate && !this.data.createdEndDate && !this.data.updatedStartDate && !this.data.updatedEndDate) {
      this.getItems();
    } else if (this.data.createdStartDate && this.data.createdEndDate && !this.data.updatedStartDate && !this.data.updatedEndDate) {
      this.toCustomStringCreatedStartDate = this.date_TO_String(this.data.createdStartDate);
      this.toCustomStringCreatedEndDate = this.date_TO_String(this.data.createdEndDate);
      this.getItemsCreatedDateRange();
    } else if (!this.data.createdStartDate && !this.data.createdEndDate && this.data.updatedStartDate && this.data.updatedEndDate) {
      this.toCustomStringUpdatedStartDate = this.date_TO_String(this.data.updatedStartDate);
      this.toCustomStringUpdatedEndDate = this.date_TO_String(this.data.updatedEndDate);
      this.getItemsUpdatedDateRange();
    } else {
      this.toCustomStringCreatedStartDate = this.date_TO_String(this.data.createdStartDate);
      this.toCustomStringCreatedEndDate = this.date_TO_String(this.data.createdEndDate);
      this.toCustomStringUpdatedStartDate = this.date_TO_String(this.data.updatedStartDate);
      this.toCustomStringUpdatedEndDate = this.date_TO_String(this.data.updatedEndDate);
      this.getItemsUpdatedBothRanges();
    }

    if (!this.type) {this.all = 'all types'}
  }

  date_TO_String(date_Object: Date): string {
    // get the year, month, date, hours, and minutes seprately and append to the string.
    let date_String: string =
      date_Object.getFullYear() +
      "-" +
      (date_Object.getMonth() + 1) +
      "-" +
      +date_Object.getDate();
    return date_String;
  }

  getItems(): void {
    this.inventoryService.getItems().subscribe({
      next: units => {
        this.items = units;
        this.filteredList = this.items.filter((item: any) => item.type.toLocaleLowerCase().includes(this.type));
      },
    });
  }

  getItemsCreatedDateRange(): void {
    this.inventoryService.getItemsCreatedDateRange(this.toCustomStringCreatedStartDate, this.toCustomStringCreatedEndDate).subscribe({
      next: units => {
        this.items = units;
        this.filteredList = this.items.filter((item: any) => item.type.toLocaleLowerCase().includes(this.type));
      },
    });
  }

  getItemsUpdatedDateRange(): void {
    this.inventoryService.getItemsUpdatedDateRange(this.toCustomStringUpdatedStartDate, this.toCustomStringUpdatedEndDate).subscribe({
      next: units => {
        this.items = units;
        this.filteredList = this.items.filter((item: any) => item.type.toLocaleLowerCase().includes(this.type));
      },
    });
  }

  getItemsUpdatedBothRanges(): void {
    this.inventoryService.getItemsBothRanges(this.toCustomStringCreatedStartDate, this.toCustomStringCreatedEndDate, this.toCustomStringUpdatedStartDate, this.toCustomStringUpdatedEndDate).subscribe({
      next: units => {
        this.items = units;
        this.filteredList = this.items.filter((item: any) => item.type.toLocaleLowerCase().includes(this.type));
      },
    });
  }

  onClose(): void {
    this.dialogRef.close("closed");
  }
  onPrint(): void {
    print();
  }

  onSave(): void {

  }

}
