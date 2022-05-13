import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldCropsComponent } from './sold-crops.component';

describe('SoldCropsComponent', () => {
  let component: SoldCropsComponent;
  let fixture: ComponentFixture<SoldCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldCropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
