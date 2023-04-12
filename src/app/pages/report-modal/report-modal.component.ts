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

  constructor(
    public dialogRef: MatDialogRef<ReportModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private router: Router,
    public inventoryService: InventoryService,
  ) { }

  ngOnInit(): void {
    this.type = this.data.type;
    this.getItems();
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

  onClose(): void {
    this.dialogRef.close("closed");
  }

}
