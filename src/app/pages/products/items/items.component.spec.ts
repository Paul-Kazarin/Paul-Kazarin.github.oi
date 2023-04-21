import {ItemsComponent} from "./items.component";
import {Inventory} from "../../../interfaces/inventory";
import {of} from "rxjs";
import {ComponentFixture, getTestBed, TestBed} from "@angular/core/testing";
import {InventoryService} from "../../../services/inventory.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let items: Inventory[];
  let mockInventoryService: any;
  let mockRouter;
  let mockRoute;
  let mockDialog;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(() => {
    items = [
      {
        "id": 3,
        "type": "boat",
        "subType": "jetboat",
        "brand": "yamaha",
        "model": "ar190",
        "year": 2020,
        "length": 19,
        "weight": 2500,
        "pricePerHour": 150,
        "pricePerDay": 800,
        "peopleCapacity": 12,
        "image": "assets/images/yamaha-ar190.webp",
        "active": true,
        "comment": null,
        "dateCreated": "2023-04-11",
        "dateUpdated": "2023-04-11"
      },
      {
        "id": 452,
        "type": "boat",
        "subType": "pontoon",
        "brand": "seadoo",
        "model": "Switch",
        "year": 2020,
        "length": 16,
        "weight": 2000,
        "pricePerHour": 100,
        "pricePerDay": 500,
        "peopleCapacity": 8,
        "image": "http://localhost:4200/item/files/sea-doo-switch-16.webp",
        "active": true,
        "comment": "seadoo comment",
        "dateCreated": "2023-04-11",
        "dateUpdated": "2023-04-11"
      },
      {
        "id": 852,
        "type": "jetski",
        "subType": "2 people seater",
        "brand": "yamaha",
        "model": "Waverunner",
        "year": 2020,
        "length": 8,
        "weight": 800,
        "pricePerHour": 100,
        "pricePerDay": 500,
        "peopleCapacity": 2,
        "image": "http://localhost:4200/item/files/jetski.webp",
        "active": true,
        "comment": "",
        "dateCreated": "2023-04-11",
        "dateUpdated": "2023-04-11"
      }
    ]

    mockInventoryService = jasmine.createSpyObj(['getItems', 'performFilter', 'getAllItems'])
    mockRouter = jasmine.createSpyObj(['navigateByUrl', 'navigate'])
    mockRoute = jasmine.createSpyObj(['route', 'snapshot', 'paramMap', 'get'])
    mockDialog = jasmine.createSpyObj(['open'])

    component = new ItemsComponent(mockInventoryService, mockRouter, mockDialog, mockRoute);

    // TestBed.configureTestingModule({
    //   declarations: [ItemsComponent],
    //   providers: [
    //     {provide: InventoryService, useValue: mockInventoryService},
    //     {provide: MatDialog, useValue: mockDialog},
    //     {provide: ActivatedRoute, use: mockRoute},
    //     {provide: Router, use: mockRouter}
    //   ],
    //   schemas: [NO_ERRORS_SCHEMA]
    // })
    // fixture = TestBed.createComponent(ItemsComponent);
  });

  // it('should set items correctly from the service',  () => {
  //   mockInventoryService.getItems.and.returnValue(of(items))
  //   fixture.detectChanges();
  //
  //   expect(fixture.componentInstance.items.length).toBe(3);
  // });

  describe('getItems', () => {
    it('should call getItems', () => {
      mockInventoryService.getItems.and.returnValue(of(true))
      component.items = items;

      component.getAllItems();

      expect(mockInventoryService.getItems).toHaveBeenCalled();
    })
  });

});
