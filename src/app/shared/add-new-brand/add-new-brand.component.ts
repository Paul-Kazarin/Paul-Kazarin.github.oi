import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InventoryService} from "../../services/inventory.service";
import {Brand} from "../../interfaces/brand";

@Component({
  selector: 'app-add-new-brand',
  templateUrl: './add-new-brand.component.html',
  styleUrls: ['./add-new-brand.component.scss']
})
export class AddNewBrandComponent implements OnInit {

  addNewBrand!: FormGroup;
  brands: Brand[] = [];
  brand: Brand = {
    id: 0,
    brand: '',
  }

  constructor(
    public dialogRef: MatDialogRef<AddNewBrandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private inventoryService: InventoryService,
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

  getBrands() {
    this.inventoryService.getBrands().subscribe({
      next: brands => {
        this.brands = brands;
      }
    });
  }

  delete(brand: Brand): void {
    this.brands = this.brands.filter(i => i !== brand);
    this.inventoryService.deleteBrand(brand).subscribe();
  }

}
