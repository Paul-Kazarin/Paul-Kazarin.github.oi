import {ProductDetailComponent} from "./product-detail.component";
import {Inventory} from "../../../interfaces/inventory";
import {of} from "rxjs";
import {SubTypes} from "../../../interfaces/subTypes";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ActivatedRoute, RouterModule} from "@angular/router";

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let items: Inventory[];
  let subTypes: SubTypes[];
  let mockInventoryService: any;
  let mockRouter;
  let mockRoute;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(() => {
    items = [
      {
        "id": 1,
        "type": "tour",
        "subType": "boat-tour",
        "brand": "Lake Powell",
        "model": "Reflection Canyon",
        "year": 2023,
        "length": 10000,
        "weight": 0,
        "pricePerHour": 100,
        "pricePerDay": 800,
        "peopleCapacity": 6,
        "image": "http://localhost:4200/item/files/reflection-canyon.avif",
        "active": true,
        "comment": null,
        "dateCreated": "2023-04-01",
        "dateUpdated": "2023-04-01"
      },
      {
        "id": 2,
        "type": "boat",
        "subType": "jetboat",
        "brand": "yamaha",
        "model": "ar190",
        "year": 2010,
        "length": 19,
        "weight": 2500,
        "pricePerHour": 100,
        "pricePerDay": 500,
        "peopleCapacity": 12,
        "image": "assets/images/yamaha-ar190.webp",
        "active": true,
        "comment": "112233",
        "dateCreated": "2023-04-02",
        "dateUpdated": "2023-04-02"
      },
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
      }
    ]

    subTypes = [
      {
        "id": 1,
        "subType": "wake-surf"
      },
      {
        "id": 2,
        "subType": "jetboat"
      },
      {
        "id": 52,
        "subType": "pontoon"
      }
    ]

    mockInventoryService = jasmine.createSpyObj(['getSubTypes', 'getItems', 'deleteItem'])
    mockRouter = jasmine.createSpyObj(['navigate'])
    mockRoute = jasmine.createSpyObj(['snapshot.paramMap.get'])

    component = new ProductDetailComponent(mockRoute, mockRouter, mockInventoryService);

    // TestBed.configureTestingModule({
    //   declarations: [ProductDetailComponent],
    //   providers: [ActivatedRoute]
    // });
    // fixture = TestBed.createComponent(ProductDetailComponent);
  });

  // it('should have the correct product', () => {
  //   fixture.componentInstance.product = {
  //     "id": 3,
  //     "type": "boat",
  //     "subType": "jetboat",
  //     "brand": "yamaha",
  //     "model": "ar190",
  //     "year": 2020,
  //     "length": 19,
  //     "weight": 2500,
  //     "pricePerHour": 150,
  //     "pricePerDay": 800,
  //     "peopleCapacity": 12,
  //     "image": "assets/images/yamaha-ar190.webp",
  //     "active": true,
  //     "comment": null,
  //     "dateCreated": "2023-04-11",
  //     "dateUpdated": "2023-04-11"
  //   };
  //
  //   expect(fixture.componentInstance.product.type).toEqual('boat');
  // })

  describe('delete', () => {
    it('should delete the product', () => {
      mockInventoryService.deleteItem.and.returnValue(of(true))
      component.items = items;

      component.deleteProduct(items[2]);

      expect(component.items.length).toBe(2);
    })

    it('should call delete', () => {
      mockInventoryService.deleteItem.and.returnValue(of(true))
      component.items = items;

      component.deleteProduct(items[2]);

      expect(mockInventoryService.deleteItem).toHaveBeenCalledWith(items[2]);
    })
  });

  describe('getSubTypes', () => {
    // it('should get all subtypes from the subtypes list', () => {
    //   mockInventoryService.getSubTypes.and.returnValue(of(true))
    //   component.subTypes = subTypes;
    //
    //   component.getAllSubTypes();
    //   expect(component.subTypes.length).toBe(3);
    // })

    it('should call getSubTypes', () => {
      mockInventoryService.getSubTypes.and.returnValue(of(true))
      component.subTypes = subTypes;

      component.getAllSubTypes();

      expect(mockInventoryService.getSubTypes).toHaveBeenCalled();
    })

  });

});
