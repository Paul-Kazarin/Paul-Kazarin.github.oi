import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubtypeComponent } from './add-new-subtype.component';

describe('AddNewSubtypeComponent', () => {
  let component: AddNewSubtypeComponent;
  let fixture: ComponentFixture<AddNewSubtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSubtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
