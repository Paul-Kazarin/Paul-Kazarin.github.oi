import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InventoryService} from "../../../services/inventory.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Inventory} from "../../../interfaces/inventory";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddNewSubtypeComponent} from "../../../shared/add-new-subtype/add-new-subtype.component";
import { AddNewBrandComponent } from 'src/app/shared/add-new-brand/add-new-brand.component';
import { AddNewModelComponent } from 'src/app/shared/add-new-model/add-new-model.component';
import { Brand } from 'src/app/interfaces/brand';
import { Model } from 'src/app/interfaces/model';
import {SubTypes} from "../../../interfaces/subTypes";

@Component({
  selector: 'app-addnewitem',
  templateUrl: './addnewitem.component.html',
  styleUrls: ['./addnewitem.component.scss']
})
export class AddnewitemComponent implements OnInit{

  addNewItem!: FormGroup;
  productUrl: string = this.inventoryService.productUrl;
  item: Inventory[] = [];
  brands: Brand[] = [];
  models: Model[] = [];
  subTypes: SubTypes[] = [];
  subType: string = '';
  brand: string = '';
  model: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddnewitemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private inventoryService: InventoryService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.addNewItem = new FormGroup({
      type: new FormControl(this.data.type, {}),
      subType: new FormControl('', {}),
      brand: new FormControl('', {}),
      model: new FormControl('', {}),
      year: new FormControl('', {}),
      length: new FormControl('', {}),
      weight: new FormControl('', {}),
      pricePerHour: new FormControl('', {}),
      pricePerDay: new FormControl('', {}),
      peopleCapacity: new FormControl('', {}),
      image: new FormControl('', {}),
      active: new FormControl(true, {})
    })
    this.getSubTypes();
    this.getBrands();
    this.getModels();
  }

  getSubTypes() {
    this.inventoryService.getSubTypes().subscribe({
      next: subTypes => {
        this.subTypes = subTypes;
      }
    });
  }

  getBrands() {
    this.inventoryService.getBrands().subscribe({
      next: brands => {
        this.brands = brands;
      }
    });
  }

  getModels() {
    this.inventoryService.getModels().subscribe({
      next: models => {
        this.models = models;
      }
    });
  }

  goToAddImagePage(): void {
    this.router.navigateByUrl(
      'http://localhost:8080/item'
    );
  }

  clearForm(): void {
    this.addNewItem.reset();
  }

  onClose(): void {
    this.dialogRef.close("closed");
    this.onBack();
  }

  onBack(): void {
    this.router.navigate(['products/', this.data.type]);
  }

  onSubmit(): void {
    if (this.addNewItem.invalid) {
      return;
    } else {
      const inventory = {
        id: this.addNewItem.value.id,
        type: this.addNewItem.value.type,
        subType: this.addNewItem.value.subType,
        brand: this.addNewItem.value.brand,
        model: this.addNewItem.value.model,
        year: this.addNewItem.value.year,
        length: this.addNewItem.value.length,
        weight: this.addNewItem.value.weight,
        pricePerHour: this.addNewItem.value.pricePerHour,
        pricePerDay: this.addNewItem.value.pricePerDay,
        peopleCapacity: this.addNewItem.value.peopleCapacity,
        image: this.addNewItem.value.image,
        active: this.addNewItem.value.active
      };
      this.inventoryService.postAddNewItemForm(inventory).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error),
      );
      this.onBack();
      this.onClose();
    }
  }

  addNewSubType(): void {
    const dialogRef = this.dialog.open(AddNewSubtypeComponent, {
      width: '60%',
      height: '30%',
      data: {
        type: 'boat',
        subType: this.subType
      }
    })
  }

  addNewBrand(): void {
    const dialogRef = this.dialog.open(AddNewBrandComponent, {
      width: '60%',
      height: '30%',
      data: {
        type: 'boat',
        brand: this.brand
      }
    })
  }

  addNewModel(): void {
    const dialogRef = this.dialog.open(AddNewModelComponent, {
      width: '60%',
      height: '30%',
      data: {
        type: 'boat',
        model: this.model
      }
    })
  }

}
