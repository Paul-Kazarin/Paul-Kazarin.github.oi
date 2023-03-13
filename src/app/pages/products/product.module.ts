import { NgModule } from '@angular/core';
import {BoatsComponent} from "./boats/boats.component";
import {BoatDetailComponent} from "./boats/boat-detail/boat-detail.component";
import {AtvsComponent} from "./atvs/atvs.component";
import {RvsComponent} from "./rvs/rvs.component";
import {ToursComponent} from "./tours/tours.component";
import {RouterModule} from "@angular/router";
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    BoatsComponent,
    BoatDetailComponent,
    AtvsComponent,
    RvsComponent,
    ToursComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'boats', component: BoatsComponent},
      {path: 'boats/:id', component: BoatDetailComponent},
      {path: 'atvs', component: AtvsComponent},
      {path: 'rvs', component: RvsComponent},
      {path: 'tours', component: ToursComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
