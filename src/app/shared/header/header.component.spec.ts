import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let mockInventoryService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    mockInventoryService = jasmine.createSpyObj(['getTypes'])
  });

  // it('should have list of types', () => {
  //   fixture.componentInstance.types = [
  //     {
  //       "id": 1,
  //       "type": "jetski",
  //       "image": "http://localhost:4200/item/files/jetski.webp"
  //     },
  //     {
  //       "id": 2,
  //       "type": "boat",
  //       "image": "http://localhost:4200/item/files/sea-ray-cuddy-cabin.jpg"
  //     },
  //     {
  //       "id": 52,
  //       "type": "tour",
  //       "image": "http://localhost:4200/item/files/reflection-canyon.avif"
  //     }
  //   ];
  //
  //   expect(fixture.componentInstance.types.length).toEqual(3);
  // })

});
