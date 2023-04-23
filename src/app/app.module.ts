import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { HeaderComponent } from './shared/header/header.component';
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ProductModule } from './pages/products/product.module';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SharedModule} from "./shared/shared.module";
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ReportModalComponent } from './pages/report-modal/report-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ReportPageComponent,
    ReportModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'homepage', component: HomepageComponent},
      {path: 'reportpage', component: ReportPageComponent},
      {path: '', redirectTo: 'homepage', pathMatch: 'full'},
      {path: '**', redirectTo: 'homepage', pathMatch: 'full'}
    ]),
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCheckboxModule,
    ProductModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
