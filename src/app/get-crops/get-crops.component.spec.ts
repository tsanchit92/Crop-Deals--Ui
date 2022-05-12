import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCropsComponent } from './get-crops.component';

describe('GetCropsComponent', () => {
  let component: GetCropsComponent;
  let fixture: ComponentFixture<GetCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
