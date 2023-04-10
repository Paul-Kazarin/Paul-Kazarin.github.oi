import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Inventory} from "../../../interfaces/inventory";
import {InventoryService} from "../../../services/inventory.service";
import {FormControl, FormGroup} from "@angular/forms";
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
  product: Inventory | undefined;
  id: number = 0;
  editItem!: FormGroup;
  productUrl: string = this.inventoryService.productUrl;
  sub!: Subscription;
  items: Inventory[] = [];
  brands: Brand[] = [];
  models: Model[] = [];
  subTypes: SubTypes[] = [];
  subType: string = '';
  brand: string = '';
  model: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.pageTitle += ` id: ${id}`;
    this.sub = this.inventoryService.getItems().subscribe({
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
        this.editItem = new FormGroup({
          id: new FormControl(this.product?.id, {}),
          type: new FormControl(this.product?.type, {}),
          subType: new FormControl(this.product?.subType, {}),
          brand: new FormControl(this.product?.brand, {}),
          model: new FormControl(this.product?.model, {}),
          year: new FormControl(this.product?.year, {}),
          length: new FormControl(this.product?.length, {}),
          weight: new FormControl(this.product?.weight, {}),
          pricePerHour: new FormControl(this.product?.pricePerHour, {}),
          pricePerDay: new FormControl(this.product?.pricePerDay, {}),
          peopleCapacity: new FormControl(this.product?.peopleCapacity, {}),
          image: new FormControl(this.product?.image, {}),
          active: new FormControl(this.product?.active, {}),
          comment: new FormControl(this.product?.comment, {})
        })
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

  clearForm(): void {
    this.editItem.reset();
  }

  onSubmit(): void {
    if (this.editItem.invalid) {
      return;
    } else {
      const inventory = {
        id: this.editItem.value.id,
        type: this.editItem.value.type,
        subType: this.editItem.value.subType,
        brand: this.editItem.value.brand,
        model: this.editItem.value.model,
        year: this.editItem.value.year,
        length: this.editItem.value.length,
        weight: this.editItem.value.weight,
        pricePerHour: this.editItem.value.pricePerHour,
        pricePerDay: this.editItem.value.pricePerDay,
        peopleCapacity: this.editItem.value.peopleCapacity,
        image: this.editItem.value.image,
        active: this.editItem.value.active,
        comment: this.editItem.value.comment
      };
      this.inventoryService.postAddNewItemForm(inventory).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error),
      );
      this.onBack();
    }
  }

}
