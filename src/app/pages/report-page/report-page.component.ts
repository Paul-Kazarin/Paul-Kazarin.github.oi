import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemType} from "../../interfaces/itemType";
import {InventoryService} from "../../services/inventory.service";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  types: ItemType[] = [];

  constructor(
    private router: Router,
    private inventoryService: InventoryService
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

  onHome(): void {
    this.router.navigate(['/homepage']);
  }

}
