import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InventoryService} from "../../services/inventory.service";
import {SubTypes} from "../../interfaces/subTypes";

@Component({
  selector: 'app-add-new-subtype',
  templateUrl: './add-new-subtype.component.html',
  styleUrls: ['./add-new-subtype.component.scss']
})
export class AddNewSubtypeComponent implements OnInit {

  addNewSubType!: FormGroup;
  subTypes: SubTypes[] = [];
  subType: SubTypes = {
    id: 0,
    subType: '',
  }

  constructor(
    public dialogRef: MatDialogRef<AddNewSubtypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    this.addNewSubType = new FormGroup({
      type: new FormControl(this.data.type, {}),
      subType: new FormControl('', {})
    })
  }

  clearForm(): void {
    this.addNewSubType.reset();
  }

  onClose(): void {
    this.dialogRef.close("closed");
  }

  onSubmit(): void {
    if (this.addNewSubType.invalid) {
      return;
    } else {
      const subType = {
        id: this.addNewSubType.value.id,
        subType: this.addNewSubType.value.subType
      };
      this.inventoryService.postAddNewSubTypeForm(subType).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error),
      );
      this.onClose();
    }
  }

  getSubTypes() {
    this.inventoryService.getSubTypes().subscribe({
      next: subTypes => {
        this.subTypes = subTypes;
      }
    });
  }

  delete(subType: SubTypes): void {
    this.subTypes = this.subTypes.filter(i => i !== subType);
    this.inventoryService.deleteSubType(subType).subscribe();
  }

}
