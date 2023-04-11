import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Inventory} from "../../../interfaces/inventory";
import {InventoryService} from "../../../services/inventory.service";
import {Subscription} from "rxjs";
import {Brand} from "../../../interfaces/brand";
import {Model} from "../../../interfaces/model";
import {SubTypes} from "../../../interfaces/subTypes";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  pageTitle: string = 'Product Detail:';
  errorMessage = '';
  product: any = {
    id: 0,
    type: '',
    subType: '',
    brand: '',
    model: '',
    year: 0,
    length: 0,
    weight: 0,
    pricePerHour: 0,
    pricePerDay: 0,
    peopleCapacity: 0,
    image: '',
    active: false,
    comment: ''
  };
  id: number = 0;
  productUrl: string = this.inventoryService.productUrl;
  subItems!: Subscription;
  items: Inventory[] = [];
  brands: Brand[] = [];
  models: Model[] = [];
  subTypes: SubTypes[] = [];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.pageTitle += ` id: ${id}`;
    this.subItems = this.inventoryService.getItems().subscribe({
      next: units => {
        this.items = units;
      },
      error: err => this.errorMessage = err
    });
    this.getProduct(id);
    this.getSubTypes();
    this.getBrands();
    this.getModels();
  }

  getSubTypes() {
    this.inventoryService.getSubTypes().subscribe({
      next: subTypes => {
        this.subTypes = subTypes;
      }
    });
  }

  getBrands() {
    this.inventoryService.getBrands().subscribe({
      next: brands => {
        this.brands = brands;
      }
    });
  }

  getModels() {
    this.inventoryService.getModels().subscribe({
      next: models => {
        this.models = models;
      }
    });
  }

  getProduct(id: number): void {
    this.inventoryService.getItem(id).subscribe({
      next: product => {
        this.product = product;
      },
      error: err => this.errorMessage = err
    });
  }

  onDeleteById(id: number): void {
    this.inventoryService
    .deleteItemById(id)
    .subscribe((resp) => {
      this.items = this.items.filter((element) => {
        return element.id !== id;
      });
    });
    this.onBack();
  }

  onDelete(item: any): void {
    this.inventoryService
    .deleteItem(item)
    .subscribe((resp) => {
      this.items = this.items.filter((element) => {
        return element.id !== item.id;
      });
    });
    this.onBack();
  }

  onBack(): void {
    this.router.navigate(['products/', this.product?.type]);
  }

  onSubmit(): void {
      this.inventoryService.postAddNewItemForm(this.product).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error),
      );
      this.onBack();
  }

}
