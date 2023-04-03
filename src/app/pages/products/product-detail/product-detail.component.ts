import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Inventory} from "../../../interfaces/inventory";
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  pageTitle: string = 'Product Detail:';
  errorMessage = '';
  product: Inventory | undefined;
  type: string | undefined;
  active: boolean | undefined;
  selected: Date | null = new Date();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` id: ${id}`;
    this.getProduct(id);
  }

  getProduct(id: number): void {
    this.inventoryService.getItem(id).subscribe({
      next: product => {
        this.product = product;
        this.type = product?.type;
        this.active = product?.active;
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['products/', this.type]);
  }

}
