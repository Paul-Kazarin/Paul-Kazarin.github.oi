import {HomepageComponent} from "./homepage.component";
import {ItemType} from "../../interfaces/itemType";
import {of} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {InventoryService} from "../../services/inventory.service";
import {Router} from "@angular/router";
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from "@angular/core";

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
      },
      {
        "id": 102,
        "type": "atv",
        "image": "http://localhost:4200/item/files/polaris-rzr.png"
      },
      {
        "id": 103,
        "type": "rv",
        "image": "http://localhost:4200/item/files/rv-class-b.webp"
      },
      {
        "id": 104,
        "type": "non-motorized",
        "image": "http://localhost:4200/item/files/kayak.jpeg"
      },
      {
        "id": 105,
        "type": "bike",
        "image": "http://localhost:4200/item/files/suzuki-dirt-bike.jpg"
      },
      {
        "id": 106,
        "type": "off-road car",
        "image": "http://localhost:4200/item/files/lifted-jeep.jpg"
      }
    ]

    mockRouter = jasmine.createSpyObj(['navigate'])
    mockInventoryService = jasmine.createSpyObj(['getTypes', 'deleteType'])

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

    expect(fixture.componentInstance.types.length).toBe(8);
  });

  it('should set type correctly from the service', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES[0]));
    fixture.componentInstance.typeObject = TYPES[0];

    expect(fixture.componentInstance.typeObject.type).toEqual('jetski');
  });

  it('should render type name in an anchor tag (nativeElement)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('a').textContent).toContain('JETSKI');
  });

  it('should render title of the page', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#homepage_title').textContent).toContain('Welcome to Inventory working page!Select the type of inventory you want to work with.');
  });

  it('should render report-page button', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#button_from_homepage_to_report-page').textContent).toContain('REPORT PAGE');
  });

  // it('report-page button should have correct click event', () => {
  //   mockInventoryService.getTypes.and.returnValue(of(TYPES));
  //   fixture.detectChanges();
  //
  //   let deA = fixture.debugElement.query(By.css('#button_from_homepage_to_report-page'));
  //
  //   console.log(deA);
  //
  //   //expect(deA.nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/jetski.webp');
  // });

  it('should render type name in an anchor tag (debugElement.query)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();

    let deA = fixture.debugElement.query(By.css('a'));

    expect(deA.nativeElement.textContent).toContain('JETSKI');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(JETSKI))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[0].nativeElement.innerText).toContain('JETSKI');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(BOAT))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[1].nativeElement.innerText).toContain('BOAT');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(TOUR))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[2].nativeElement.innerText).toContain('TOUR');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(ATV))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[3].nativeElement.innerText).toContain('ATV');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(RV))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[4].nativeElement.innerText).toContain('RV');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(NON-MOTORIZED))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[5].nativeElement.innerText).toContain('NON-MOTORIZED');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(BIKE))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[6].nativeElement.innerText).toContain('BIKE');
  });

  it('should render type name in an anchor tag (debugElement.queryAll(OFF-ROAD CAR))', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('a'));
    expect(deA[7].nativeElement.innerText).toContain('OFF-ROAD CAR');
  });

  it('should set imageUrl in an img tag (for jetski)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[0].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/jetski.webp');
  });

  it('should set imageUrl in an img tag (for boat)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[1].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/sea-ray-cuddy-cabin.jpg');
  });

  it('should set imageUrl in an img tag (for tour)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[2].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/reflection-canyon.avif');
  });

  it('should set imageUrl in an img tag (for atv)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[3].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/polaris-rzr.png');
  });

  it('should set imageUrl in an img tag (for rv)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[4].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/rv-class-b.webp');
  });

  it('should set imageUrl in an img tag (for non-motorized)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[5].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/kayak.jpeg');
  });

  it('should set imageUrl in an img tag (for bike)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[6].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/suzuki-dirt-bike.jpg');
  });

  it('should set imageUrl in an img tag (for off-road car)', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES));
    fixture.detectChanges();
    let deA = fixture.debugElement.queryAll(By.css('img'));
    expect(deA[7].nativeElement.attributes[2].nodeValue).toContain('http://localhost:4200/item/files/lifted-jeep.jpg');
  });

  it('should create one mat-card for each type', () => {
    mockInventoryService.getTypes.and.returnValue(of(TYPES))
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('mat-card')).length).toBe(8);
  });

  describe('delete', () => {
    it('should delete the indicated type from the types list', () => {
      mockInventoryService.deleteType.and.returnValue(of(true))
      component.types = TYPES;

      component.delete(TYPES[2]);

      expect(component.types.length).toBe(7);
    })

    it('should call deleteType', () => {
      mockInventoryService.deleteType.and.returnValue(of(true))
      component.types = TYPES;

      component.delete(TYPES[2]);

      expect(mockInventoryService.deleteType).toHaveBeenCalledWith(TYPES[2]);
    })
  });

});
