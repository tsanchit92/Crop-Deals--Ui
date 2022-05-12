import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFarmOrdersComponent } from './get-farm-orders.component';

describe('GetFarmOrdersComponent', () => {
  let component: GetFarmOrdersComponent;
  let fixture: ComponentFixture<GetFarmOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFarmOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFarmOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
