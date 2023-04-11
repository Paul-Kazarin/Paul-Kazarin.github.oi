import { NgModule } from '@angular/core';
import {ItemsComponent} from "./items/items.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {RouterModule} from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { AddImageComponent } from './add-image/add-image.component';

@NgModule({
  declarations: [
    ItemsComponent,
    ProductDetailComponent,
    AddnewitemComponent,
    AddImageComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products/:type', component: ItemsComponent},
      {path: 'products/:type/:id', component: ProductDetailComponent}
    ]),
    SharedModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class ProductModule { }
