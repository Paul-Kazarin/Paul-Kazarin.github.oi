import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Inventory} from "../../../../interfaces/inventory";
import {InventoryService} from "../../../../services/inventory.service";

@Component({
  selector: 'app-boat-detail',
  templateUrl: './boat-detail.component.html',
  styleUrls: ['./boat-detail.component.scss']
})
export class BoatDetailComponent implements OnInit{
  pageTitle: string = 'Boat Detail:';
  errorMessage = '';
  boat: Inventory | undefined;
  selected: Date | null = new Date();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` itemId: ${id}`;
    this.getBoat(id);
  }

  getBoat(id: number): void {
    this.inventoryService.getItem(id).subscribe({
      next: boat => this.boat = boat,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/boats']);
  }

}
