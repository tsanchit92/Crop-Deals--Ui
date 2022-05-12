import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDealersComponent } from './show-dealers.component';

describe('ShowDealersComponent', () => {
  let component: ShowDealersComponent;
  let fixture: ComponentFixture<ShowDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDealersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
