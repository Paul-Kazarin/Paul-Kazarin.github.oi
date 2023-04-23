import {AddNewBrandComponent} from "./add-new-brand.component";
import {Brand} from "../../interfaces/brand";
import {of} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {InventoryService} from "../../services/inventory.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AddNewBrandComponent', () => {
  let component: AddNewBrandComponent;
  let BRANDS: Brand[];
  let mockInventoryService: any;
  let mockDialogRef;
  let mockData;
  let fixture: ComponentFixture<AddNewBrandComponent>;

  beforeEach(() => {
    BRANDS = [
      {
        "id": 1,
        "brand": "yamaha"
      },
      {
        "id": 2,
        "brand": "seadoo"
      },
      {
        "id": 52,
        "brand": "Sea Ray"
      }
    ]

    mockDialogRef = jasmine.createSpyObj(['close'])
    mockData = jasmine.createSpyObj(['brand', 'type'])
    mockInventoryService = jasmine.createSpyObj(['getBrands', 'deleteBrand', 'postAddNewBrandForm'])

    component = new AddNewBrandComponent(mockDialogRef, mockData, mockInventoryService);

    TestBed.configureTestingModule({
      declarations: [AddNewBrandComponent],
      providers: [
        {provide: InventoryService, useValue: mockInventoryService},
        {provide: MAT_DIALOG_DATA, useValue: mockData},
        {provide: MatDialogRef, useValue: mockDialogRef}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(AddNewBrandComponent);
  });

  it('should set brands correctly from the service', () => {
    mockInventoryService.getBrands.and.returnValue(of(BRANDS));
    fixture.detectChanges();
    fixture.componentInstance.brands = BRANDS;
    expect(fixture.componentInstance.brands.length).toBe(3);
  });

  describe('delete', () => {
    it('should delete the indicated brand from the brands list', () => {
      mockInventoryService.deleteBrand.and.returnValue(of(true))
      component.brands = BRANDS;

      component.delete(BRANDS[2]);

      expect(component.brands.length).toBe(2);
    })

    it('should call deleteBrand', () => {
      mockInventoryService.deleteBrand.and.returnValue(of(true))
      component.brands = BRANDS;

      component.delete(BRANDS[2]);

      expect(mockInventoryService.deleteBrand).toHaveBeenCalledWith(BRANDS[2]);
    })
  });

});
