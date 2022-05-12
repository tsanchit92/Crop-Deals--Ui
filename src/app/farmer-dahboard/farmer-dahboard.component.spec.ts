import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDahboardComponent } from './farmer-dahboard.component';

describe('FarmerDahboardComponent', () => {
  let component: FarmerDahboardComponent;
  let fixture: ComponentFixture<FarmerDahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerDahboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
