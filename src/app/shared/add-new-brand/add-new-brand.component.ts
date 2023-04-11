import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {InventoryService} from "../../services/inventory.service";

@Component({
  selector: 'app-add-new-brand',
  templateUrl: './add-new-brand.component.html',
  styleUrls: ['./add-new-brand.component.scss']
})
export class AddNewBrandComponent implements OnInit {

  addNewBrand!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddNewBrandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private inventoryService: InventoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.addNewBrand = new FormGroup({
      type: new FormControl(this.data.type, {}),
      brand: new FormControl('', {})
    })
  }

  clearForm(): void {
    this.addNewBrand.reset();
  }

  onClose(): void {
    this.dialogRef.close("closed");
  }

  onSubmit(): void {
    if (this.addNewBrand.invalid) {
      return;
    } else {
      const brand = {
        id: this.addNewBrand.value.id,
        brand: this.addNewBrand.value.brand
      };
      this.inventoryService.postAddNewBrandForm(brand).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error),
      );
      this.onClose();
    }
  }

}
