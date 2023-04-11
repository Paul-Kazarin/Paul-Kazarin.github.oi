import { Component, OnInit } from '@angular/core';
import {InventoryService} from "../../services/inventory.service";
import {ItemType} from "../../interfaces/itemType";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  types: ItemType[] = [];
  type: string = '';
  image: string = '';

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.inventoryService.getTypes().subscribe({
      next: types => {
        this.types = types;
      }
    });
  }

  onReport(): void {
    this.router.navigate(['/reportpage']);
  }

}
