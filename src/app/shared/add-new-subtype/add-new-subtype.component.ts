import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {InventoryService} from "../../services/inventory.service";

@Component({
  selector: 'app-add-new-subtype',
  templateUrl: './add-new-subtype.component.html',
  styleUrls: ['./add-new-subtype.component.scss']
})
export class AddNewSubtypeComponent implements OnInit {

  addNewSubType!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddNewSubtypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private inventoryService: InventoryService,
    public dialog: MatDialog
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

}
