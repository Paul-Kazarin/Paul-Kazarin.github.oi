import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {InventoryService} from "../../services/inventory.service";

@Component({
  selector: 'app-add-new-model',
  templateUrl: './add-new-model.component.html',
  styleUrls: ['./add-new-model.component.scss']
})
export class AddNewModelComponent implements OnInit {

  addNewModel!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddNewModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private inventoryService: InventoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.addNewModel = new FormGroup({
      type: new FormControl(this.data.type, {}),
      model: new FormControl('', {})
    })
  }

  clearForm(): void {
    this.addNewModel.reset();
  }

  onClose(): void {
    this.dialogRef.close("closed");
  }

  onSubmit(): void {
    if (this.addNewModel.invalid) {
      return;
    } else {
      const model = {
        id: this.addNewModel.value.id,
        model: this.addNewModel.value.model
      };
      this.inventoryService.postAddNewModelForm(model).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error),
      );
      this.onClose();
    }
  }

}
