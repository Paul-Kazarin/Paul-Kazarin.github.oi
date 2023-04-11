import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {InventoryService} from "../../services/inventory.service";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  reportPage!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ReportPageComponent>,
    private router: Router,
    private inventoryService: InventoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.reportPage = new FormGroup({
      type: new FormControl('', {}),
      dateRange: new FormControl('', {})
    })
  }

  clearForm(): void {
    this.reportPage.reset();
  }

  onClose(): void {
    this.dialogRef.close("closed");
  }

  onSubmit(): void {
    if (this.reportPage.invalid) {
      return;
    } else {
      const report = {
        id: this.reportPage.value.id,
        dateRange: this.reportPage.value.dateRange
      };
      console.log();
      // this.inventoryService.postReportPageForm(report).subscribe(
      //   result => console.log('success: ', result),
      //   error => console.log('error: ', error),

      this.onClose();
    }
  }

  onHome(): void {
    this.router.navigate(['/homepage']);
  }

}
