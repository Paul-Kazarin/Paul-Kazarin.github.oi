import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvsComponent } from './atvs.component';

describe('AtvsComponent', () => {
  let component: AtvsComponent;
  let fixture: ComponentFixture<AtvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
