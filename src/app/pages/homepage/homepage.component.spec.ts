import {HomepageComponent} from "./homepage.component";
import {ItemType} from "../../interfaces/itemType";
import {of} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {InventoryService} from "../../services/inventory.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {Router} from "@angular/router";

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let TYPES: ItemType[];
  let mockInventoryService: any;
  let mockRouter;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TYPES = [
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

    mockRouter = jasmine.createSpyObj(['navigate'])
    mockInventoryService = jasmine.createSpyObj(['getTypes', 'getType', 'deleteType'])

    component = new HomepageComponent(mockInventoryService, mockRouter);

    TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      providers: [
        {provide: InventoryService, useValue: mockInventoryService},
        {provide: Router, useValue: mockRouter}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HomepageComponent);
  });

  it('should set types correctly from the service', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    fixture.componentInstance.types = TYPES;
    expect(fixture.componentInstance.types.length).toBe(3);
  });

  it('should set type correctly from the service', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES[0]));
    fixture.componentInstance.typeObject = TYPES[0];

    expect(fixture.componentInstance.typeObject.type).toEqual('jetski');
  });

  it('should render type name in an anchor tag', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES[0]));
    fixture.componentInstance.typeObject = TYPES[0];
    //fixture.detectChanges();
    //console.log(fixture.componentInstance.typeObject);
    //console.log(fixture.nativeElement.querySelector('a').textContent);

    //expect(fixture.nativeElement.querySelector('a').textContent.toContain('jetski'));
  });

  describe('delete', () => {
    it('should delete the indicated type from the types list', () => {
      mockInventoryService.deleteType.and.returnValue(of(true))
      component.types = TYPES;

      component.delete(TYPES[2]);

      expect(component.types.length).toBe(2);
    })

    it('should call deleteType', () => {
      mockInventoryService.deleteType.and.returnValue(of(true))
      component.types = TYPES;

      component.delete(TYPES[2]);

      expect(mockInventoryService.deleteType).toHaveBeenCalledWith(TYPES[2]);
    })
  });

});
