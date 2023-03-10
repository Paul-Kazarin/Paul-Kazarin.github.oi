import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import { HeaderComponent } from './shared/header/header.component';
import { BoatsComponent } from './pages/boats/boats.component';
import { AtvsComponent } from './pages/atvs/atvs.component';
import { RvsComponent } from './pages/rvs/rvs.component';
import { ToursComponent } from './pages/tours/tours.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MatTableModule} from "@angular/material/table";
import {MatPaginatorModule as MatPaginatorModuleOld} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    BoatsComponent,
    AtvsComponent,
    RvsComponent,
    ToursComponent,
    ContactsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModuleOld,
    //MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot([
      {path: 'homepage', component: HomepageComponent},
      {path: 'boats', component: BoatsComponent},
      {path: 'atvs', component: AtvsComponent},
      {path: 'rvs', component: RvsComponent},
      {path: 'tours', component: ToursComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'homepage', pathMatch: 'full'},
      {path: '**', redirectTo: 'homepage', pathMatch: 'full'}
    ]),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
