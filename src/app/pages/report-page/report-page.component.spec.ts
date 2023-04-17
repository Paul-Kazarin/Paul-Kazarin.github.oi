import {ReportPageComponent} from "./report-page.component";
import {of} from "rxjs";
import {ItemType} from "../../interfaces/itemType";

describe('ReportPageComponent', () => {
  let component: ReportPageComponent;
  let types: ItemType[];
  let mockInventoryService: any;
  let mockRouter;
  let mockDialog;

  beforeEach(() => {
    types = [
      {
        "id": 1,
        "type": "jetski",
        "image": "http://localhost:4200/item/files/jetski.webp"
      },
      {
        "id": 2,
        "type": "boat",
        "image": "http://localhost:4200/item/files/sea-ray-cuddy-cabin.jpg"
      },
      {
        "id": 52,
        "type": "tour",
        "image": "http://localhost:4200/item/files/reflection-canyon.avif"
      }
    ]

    mockInventoryService = jasmine.createSpyObj(['getItems', 'getTypes'])
    mockRouter = jasmine.createSpyObj(['navigateByUrl', 'navigate'])
    mockDialog = jasmine.createSpyObj(['open'])

    component = new ReportPageComponent(mockRouter, mockInventoryService, mockDialog);
  })

  // describe('getTypes', () => {
  //   it('should get all types from the types list', () => {
  //     mockInventoryService.getTypes.and.returnValue(of(true))
  //     component.types = types;
  //
  //     component.getTypes();
  //     expect(component.types.length).toBe(3);
  //   })
  // });

});
