import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AddNewSubtypeComponent } from './add-new-subtype/add-new-subtype.component';
import { AddNewBrandComponent } from './add-new-brand/add-new-brand.component';
import { AddNewModelComponent } from './add-new-model/add-new-model.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AddNewSubtypeComponent,
    AddNewBrandComponent,
    AddNewModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class SharedModule { }
