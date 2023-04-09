import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InventoryService} from "../../../services/inventory.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Inventory} from "../../../interfaces/inventory";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddImageComponent} from "../add-image/add-image.component";

@Component({
  selector: 'app-addnewitem',
  templateUrl: './addnewitem.component.html',
  styleUrls: ['./addnewitem.component.scss']
})
export class AddnewitemComponent implements OnInit{

  addNewItem!: FormGroup;
  productUrl: string = this.inventoryService.productUrl;
  item: Inventory[] = [];
  brands = [
    { value: 'Yamaha', viewValue: 'Yamaha' },
    { value: 'SeaDoo', viewValue: 'SeaDoo' },
    { value: 'Sea Ray', viewValue: 'Sea Ray' },
    { value: 'Bayliner', viewValue: 'Bayliner' },
    { value: 'Malibu', viewValue: 'Malibu' },
    { value: 'MasterCraft', viewValue: 'MasterCraft' }
  ];
  models = [
    { value: 'AR190', viewValue: 'AR190' },
    { value: 'Switch', viewValue: 'Switch' },
    { value: 'Wakesetter', viewValue: 'Wakesetter' },
    { value: '245', viewValue: '245' }
  ];
  subTypes = [
    { value: 'Jetboat', viewValue: 'Jetboat' },
    { value: 'Pontoon', viewValue: 'Pontoon' },
    { value: 'Wakesurf', viewValue: 'Wakesurf' },
    { value: 'Cruiser', viewValue: 'Cruiser' }
  ];

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
  }

  addImage(): void {
    const dialogRef = this.dialog.open(AddImageComponent, {
      width: '50%',
      height: '50%',
      data: {
        type: 'boat'
      }
    })
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

}
