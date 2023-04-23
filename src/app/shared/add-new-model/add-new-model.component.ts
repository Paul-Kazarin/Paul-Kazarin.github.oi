import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InventoryService} from "../../services/inventory.service";
import {Model} from "../../interfaces/model";

@Component({
  selector: 'app-add-new-model',
  templateUrl: './add-new-model.component.html',
  styleUrls: ['./add-new-model.component.scss']
})
export class AddNewModelComponent implements OnInit {

  addNewModel!: FormGroup;
  models: Model[] = [];
  model: Model = {
    id: 0,
    model: '',
  }

  constructor(
    public dialogRef: MatDialogRef<AddNewModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private inventoryService: InventoryService
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

  getModels() {
    this.inventoryService.getModels().subscribe({
      next: models => {
        this.models = models;
      }
    });
  }

  delete(model: Model): void {
    this.models = this.models.filter(i => i !== model);
    this.inventoryService.deleteModel(model).subscribe();
  }

}
