import {ItemsComponent} from "./items.component";
import {Inventory} from "../../../interfaces/inventory";
import {of} from "rxjs";

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let items: Inventory[];
  let mockItemsService: any;
  let mockRouter;
  let mockRoute;
  let mockDialog;

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

    mockItemsService = jasmine.createSpyObj(['getItems', 'performFilter'])
    mockRouter = jasmine.createSpyObj(['navigateByUrl', 'navigate'])
    mockRoute = jasmine.createSpyObj(['route.snapshot.paramMap.get'])
    mockDialog = jasmine.createSpyObj(['open'])

    component = new ItemsComponent(mockItemsService, mockRouter, mockRoute, mockDialog);
  })

  describe('getItems', () => {
    // it('should get all items from the items list', () => {
    //   mockItemsService.getItems.and.returnValue(of(true))
    //   component.items = items;
    //
    //   component.getItems();
    //   expect(component.items.length).toBe(3);
    // })
  });

});
