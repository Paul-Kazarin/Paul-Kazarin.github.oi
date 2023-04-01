import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-addnewitem',
  templateUrl: './addnewitem.component.html',
  styleUrls: ['./addnewitem.component.scss']
})
export class AddnewitemComponent {

  constructor(
    private router: Router
  ) {}

  onBack(): void {
    this.router.navigate(['products/boat']);
  }

}
