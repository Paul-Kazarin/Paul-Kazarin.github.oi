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
  toISOStringCreatedStartDate: string = '';
  toISOStringCreatedEndDate: string = '';
  toISOStringUpdatedStartDate: string = '';
  toISOStringUpdatedEndDate: string = '';
  toLocalStringCreatedStartDate: string = '';
  toLocalStringCreatedEndDate: string = '';
  toLocalStringUpdatedStartDate: string = '';
  toLocalStringUpdatedEndDate: string = '';
  toISOStringCreatedObjectDate: string = '';
  toISOStringUpdatedObjectDate: string = '';
  toLocalStringCreatedObjectDate: string = '';
  toLocalStringUpdatedObjectDate: string = '';

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
    } else if (this.data.createdStartDate && this.data.createdEndDate) {
      // this.data.createdStartDate = this.data.createdStartDate - 1;
      // this.data.createdEndDate = this.data.createdEndDate - 1;
      this.toISOStringCreatedStartDate = this.data.createdStartDate.toISOString();
      this.toISOStringCreatedEndDate = this.data.createdEndDate.toISOString();
      this.getItemsCreatedDateRange();
    } else {
      // this.data.updatedStartDate = this.data.updatedStartDate - 1;
      // this.data.updatedEndDate = this.data.updatedEndDate - 1;
      this.toISOStringUpdatedStartDate = this.data.updatedStartDate.toISOString();
      this.toISOStringUpdatedEndDate = this.data.updatedEndDate.toISOString();
      this.getItemsUpdatedDateRange();
    }

    if (!this.type) {this.all = 'all types'}
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
    this.inventoryService.getItemsCreatedDateRange(this.toISOStringCreatedStartDate, this.toISOStringCreatedEndDate).subscribe({
      next: units => {
        this.items = units;
        this.filteredList = this.items.filter((item: any) => item.type.toLocaleLowerCase().includes(this.type));
      },
    });
  }

  getItemsUpdatedDateRange(): void {
    this.inventoryService.getItemsUpdatedDateRange(this.toISOStringUpdatedStartDate, this.toISOStringUpdatedEndDate).subscribe({
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
