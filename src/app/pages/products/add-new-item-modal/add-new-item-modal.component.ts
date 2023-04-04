import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {InventoryService} from "../../../services/inventory.service";
import {Inventory} from "../../../interfaces/inventory";

@Component({
  selector: 'app-add-new-item-modal',
  templateUrl: './add-new-item-modal.component.html',
  styleUrls: ['./add-new-item-modal.component.scss']
})
export class AddNewItemModalComponent implements OnInit {
  item: Inventory = {
    id: 0,
    type: '',
    subType: '',
    brand: '',
    model: '',
    year: 0,
    length: 0,
    weight: 0,
    pricePerHour: 0,
    pricePerDay: 0,
    peopleCapacity: 0,
    image: '',
    active: false
  }

  constructor(
    public dialogRef: MatDialogRef<AddNewItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    this.item.type = this.data.type;
  }

  onSubmit() {
    this.inventoryService.postAddNewItemForm(this.item).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error),
    );
  }

  onClose(): void {
    this.dialogRef.close("closed");
  }

}
