import { Component, OnInit } from '@angular/core';
import {InventoryService} from "../../services/inventory.service";
import {ItemType} from "../../interfaces/itemType";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  types: ItemType[] = [];
  type: string = '';

  constructor(private inventoryService: InventoryService) { }

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

}
