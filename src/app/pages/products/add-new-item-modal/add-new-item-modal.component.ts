import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-new-item-modal',
  templateUrl: './add-new-item-modal.component.html',
  styleUrls: ['./add-new-item-modal.component.scss']
})
export class AddNewItemModalComponent implements OnInit {
  type!: string;

  constructor(
    public dialogRef: MatDialogRef<AddNewItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.type = this.data.type
  }

}
