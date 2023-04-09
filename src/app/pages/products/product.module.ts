import { NgModule } from '@angular/core';
import {BoatsComponent} from "./boats/boats.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AtvsComponent} from "./atvs/atvs.component";
import {RvsComponent} from "./rvs/rvs.component";
import {ToursComponent} from "./tours/tours.component";
import {RouterModule} from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';
import { AddNewItemModalComponent } from './add-new-item-modal/add-new-item-modal.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { AddImageComponent } from './add-image/add-image.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    BoatsComponent,
    ProductDetailComponent,
    AtvsComponent,
    RvsComponent,
    ToursComponent,
    AddnewitemComponent,
    AddNewItemModalComponent,
    AddImageComponent,
    EditItemComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products/boat', component: BoatsComponent},
      {path: 'products/atv', component: AtvsComponent},
      {path: 'products/rv', component: RvsComponent},
      {path: 'products/tour', component: ToursComponent},
      {path: 'products/addnewitem', component: AddnewitemComponent},
      {path: 'products/:id', component: ProductDetailComponent}
    ]),
    SharedModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class ProductModule { }
