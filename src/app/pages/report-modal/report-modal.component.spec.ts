import {ReportModalComponent} from "./report-modal.component";
import {Inventory} from "../../interfaces/inventory";
import {of} from "rxjs";

describe('ReportModalComponent', () => {
  let component: ReportModalComponent;
  let items: Inventory[];
  let mockInventoryService: any;
  let mockDialog;
  let mockDialogRef;
  let mockData;

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

    mockInventoryService = jasmine.createSpyObj(['getItems', 'deleteItem'])
    mockDialog = jasmine.createSpyObj(['open'])
    mockDialogRef = jasmine.createSpyObj(['close'])
    mockData = jasmine.createSpyObj(['type', 'createdStartDate', 'createdEndDate', 'updatedStartDate', 'updatedStartDate'])

    component = new ReportModalComponent(mockDialogRef, mockData, mockDialog, mockInventoryService);
  })

  describe('delete', () => {
    it('should delete the indicated item from the items list', () => {
      mockInventoryService.deleteItem.and.returnValue(of(true))
      component.items = items;

      component.delete(items[2]);

      expect(component.items.length).toBe(2);
    })

    it('should call deleteItem', () => {
      mockInventoryService.deleteItem.and.returnValue(of(true))
      component.items = items;

      component.delete(items[2]);

      expect(mockInventoryService.deleteItem).toHaveBeenCalledWith(items[2]);
    })
  });

  // describe('getItems', () => {
  //   it('should get all items from the items list', () => {
  //     mockInventoryService.getItems.and.returnValue(of(true))
  //     component.items = items;
  //
  //     component.getItems();
  //     expect(component.items.length).toBe(3);
  //   })
  // });

});
